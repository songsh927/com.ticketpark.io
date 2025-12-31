<template>
    <div class="waiting-container">
        <h1>예매페이지</h1>
        <button class="button" type="button" @click="reservation">예매하기</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data (){
        return {
            ticket_idx : null
        }
    },
    mounted() {
        document.body.style.overflow = 'hidden';
        this.ticket_idx = this.$route.params.idx
    }, 
    unmounted() {
        document.body.style.overflow = 'auto';
    },
    methods : {
        async reservation(){
            // const ticket_idx = this.$router.params.idx
            const ticket_idx = this.ticket_idx

            try{
                const res = await axios.post(
                    `/ticket/reserve/${ticket_idx}`,
                    null,
                    {
                        headers : {
                            'x-access-token' : localStorage.getItem('x-access-token')
                        }
                    }
                )

                if(res.data.success){
                    alert(`예매가 되었습니다.`)
                    window.close();
                } else {
                    alert(`예매에 실패했습니다.`)
                    window.close();
                }
            
            }catch(err){
                console.log(err)
                alert(`예매에 실패했습니다.`)
                window.close();
            };

            
        }
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

.button {
    border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgba(220, 0, 0, 0.878);
}
</style>