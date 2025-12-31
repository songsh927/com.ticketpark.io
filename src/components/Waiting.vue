<template>
    <div class="waiting-container">
        <h1>예매 페이지</h1>
        <p>대기번호 : <span>{{ queueCount }}</span>명</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
        queueCount: '', // 시작 대기 인원
        timer: null
        }
    },
    mounted() {
        document.body.style.overflow = 'hidden';
        this.timer = setInterval(async () => {

        const ticket_idx = this.$route.params.idx;

        const res = await axios.get(
            `/ticket/waiting/${ticket_idx}`,
            {
                validateStatus: function (status) {
                    return status === 200 || status === 302 || status === 408;
                },
                headers : {
                    'x-access-token' : localStorage.getItem('x-access-token')
                }
            }
        );

        if (res.status == 302) {
            this.completeWaiting(ticket_idx);
        }
        }, 1000);
    },
    unmounted() {
        document.body.style.overflow = 'auto';
    },
    methods: {
        completeWaiting(ticket_idx) {
            clearInterval(this.timer);
            this.$router.push(`/reserve/${ticket_idx}`);
        }
    },
  
    beforeUnmount() {
        if (this.timer) clearInterval(this.timer);
    }
}
</script>

<style scoped>

.waiting-container {
    width: 100vw;
    height: 100vh;
    background-color: #141414;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>