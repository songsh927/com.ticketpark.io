<template>
    <body>
        <div class="detail">
            <div class="img-container">
                <img :src="img">
            </div>
            <div class="info-container">
                <div class="info-detail-container">
                    <div><h1>{{title}}</h1></div>
                </div>

                <div class="info-detail-container">
                    <h2>공연정보</h2>
                    <h4>공연설명</h4>
                    <div>{{sub_title}}</div>
                </div>

                <div class="info-detail-container">
                    <h4>예매기간</h4>
                    <div>예매 시작  {{ ticket_open }}</div>
                    <div>예매 종료  {{ ticket_close }}</div>
                </div>

                <div class="info-detail-container">
                    <div>러닝 타임  {{time}}</div>
                    <div>할인 정보  {{discount}}</div>
                    <div>공연장 위치 {{location}}</div>
                </div>

                <div class="button-container">
                    <div>가격  {{price}} 원</div>
                    <button class="button" type="button" @click="openPopup">예매하기</button>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import placeholderImg from '@/assets/img/placeholder.png';
import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data() {
        return {
            img : placeholderImg,
            title : 'ticket',
            sub_title : null,
            ticket_open : null,
            ticket_close : null,
            time : null,
            discount : null,
            location : null,
            price : null

        }
    },
    methods: {
        async openPopup() {

            if(!localStorage.getItem('x-access-token')){
                alert('로그인이 필요한 서비스입니다.')
                this.$router.push('/login')
            } else {
                const ticket_idx = this.$route.params.idx;
                const url = `/waiting/${ticket_idx}`; 
        
                const popupWidth = 500;
                const popupHeight = 600;

                const left = (window.screen.width / 2) - (popupWidth / 2);
                const top = (window.screen.height / 2) - (popupHeight / 2);

                const result = await axios.post(
                    `/ticket/waiting/${ticket_idx}`,
                    null,
                    {
                        headers : {
                            'x-access-token' : localStorage.getItem('x-access-token')
                        }
                    }
                );

                window.open(
                    url, 
                    'TICKETPARK RESERVATION', 
                    `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=no,resizable=no`
                );
            }

            
        },
        async getTicketDetail(ticket_idx) {
            try {
                const res = await axios.get(`/ticket/detail/${ticket_idx}`);
                const data = res.data.data;

                if(!data.ticket_title_image){
                    data.ticket_title_image = placeholderImg
                }

                this.img = data.ticket_title_image;
                this.title = data.ticket_title;
                this.sub_title = data.ticket_sub_title;
                this.ticket_open = dayjs(data.ticket_open).format('YYYY-MM-DD HH:mm:ss');
                this.ticket_close = dayjs(data.ticket_close).format('YYYY-MM-DD HH:mm:ss');
                this.time = data.ticket_info.time;
                this.discount = data.ticket_info.discount;
                this.location = data.ticket_info.location;
                this.price = data.ticket_price;

                
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
                alert("공연 정보를 불러오는 데 실패했습니다.");
            }
        }
    },
    mounted(){
        document.body.style.overflow = 'hidden';
        const idx = this.$route.params.idx;
        this.getTicketDetail(idx);
    },
    unmounted(){
        document.body.style.overflow = 'auto';
    }
}

</script>

<style scoped>

.detail {
    display: flex;
    padding: 20px 0;
    height: 100%;
    align-content: center;
}

.detail img {
    width: 60%;
    height:100%;
    margin-left: 20px;
}

.img-container {
    width: 50%;
    height: 100%;
    text-align: center;
}

.info-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-start;
}

.info-detail-container {
    height: 100%;
    align-items: center;
    padding-top: 20px;
}

.button-container {
    justify-content:space-around;
    display: flex;
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