<template>
    <div class="content-wrapper">
      	<!-- <section class="ticket-section" v-for="category in categories" :key="category.id"> -->
        <section class="ticket-section">
        	<!-- <h2>{{ category.title }}</h2> -->
            <h2>공연</h2>
        	<div class="ticket-row">
          		<div 
            		v-for="ticket in categories" 
            		:key="ticket.ticket_idx" 
            		class="ticket-card"
            		@click="$router.push({name : 'Ticket', params : {idx : ticket.ticket_idx}})"
          		>
            		<img :src="ticket.ticket_title_image" :alt="ticket.ticket_title">
            		<div class="card-overlay">
              			<p class="ticket-title">{{ ticket.ticket_title }}</p>
            		</div>
          		</div>
        	</div>
      	</section>
    </div>
</template>
  
<script>
import placeholderImg from '@/assets/img/placeholder.png';
import axios from 'axios';

export default {
    data() {
        return {
            categories: [
                // {
                //     id: 1,
                //     title: "공연",
                //     items: [
                //         { id: 1, title: "Guns N Roses", image: placeholderImg },
                //         { id: 2, title: "Oasis", image: placeholderImg },
                //     ]
                // }
            ]
        };
    },
    async mounted() {
        await this.getTicketList();
    },
    methods: {
        async getTicketList() {
            try {
                const res = await axios.get('/ticket/list');
                res.data.data.content.map((ticket) => {
                    if(!ticket.ticket_title_image){
                        ticket.ticket_title_image = placeholderImg
                    }
                })
                this.categories = res.data.data.content;
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
                alert("공연 정보를 불러오는 데 실패했습니다.");
            }
        }
    }
};
</script>

<style>
.ticket-row {
    display: flex;
    overflow-x: auto;
    padding: 20px 0;
    gap: 10px;
}

.ticket-card {
    min-width: 250px;
    width: 250px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.ticket-card img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
}

.ticket-card:hover {
    transform: scale(1.05);
    z-index: 2;
}

.ticket-title {
	text-align: center;
}

.ticket-row::-webkit-scrollbar {
    display: none;
}
.ticket-row {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.content-wrapper {
    padding-left: 4%;
    padding-right: 4%;
}

h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}
</style>