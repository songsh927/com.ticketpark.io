<template>
    <div class="login-page">
      <div class="logo-container">
        <h1 class="logo" @click="$router.push('/')">TICKETPARK</h1>
      </div>
  
      <div class="login-container">
        <div class="tab-menu">
          <div class="tab active">아이디 로그인</div>
          <div class="tab">이메일 로그인</div>
        </div>
  
        <form class="login-form" @submit.prevent="handleLogin">
          <div class="input-wrapper">
            <i class="icon-email">📧</i>
            <input type="id" v-model="id" placeholder="아이디" required />
            <button type="button" class="clear-btn">×</button>
          </div>
  
          <div class="input-wrapper">
            <i class="icon-password">🔒</i>
            <input type="password" v-model="password" placeholder="비밀번호" required />
            <button type="button" class="view-btn">👁️</button>
          </div>
  
          <div class="login-options">
            <div class="find-links">
              <span>아이디 찾기</span> 〉 <span>비밀번호 찾기</span> 〉
            </div>
          </div>
  
          <button type="submit" class="login-submit-btn">로그인</button>
          
          <div class="divider"></div>
          
          <button type="button" class="signup-btn" @click="goToJoinPage">회원가입</button>
        </form>
  
        <footer class="login-footer">
          <p>©Ticketpark Corp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            id: '',
            password: ''
        };
    },
    methods: {
        async handleLogin() {

            const res = await axios.post(
                `/member/login`,
                {
                    id : this.id,
                    password : this.password
                }
            );

            if(res.data.success){
                localStorage.setItem('x-access-token', res.data.data.accessToken)
                alert("로그인되었습니다.");
                this.$router.push('/');
            } else {
                alert("아이디, 비밀번호를 확인해주세요.");
            }

            
        },
        goToJoinPage(){
            this.$router.push('/join')
        }
    },
    mounted(){
        document.body.style.overflow = 'hidden';
    },
    unmounted(){
        document.body.style.overflow = 'auto';
    }
  };
  </script>
  
<style scoped>
.login-page {
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
}
  
.logo {
    color: #346aff; /* 쿠팡 느낌의 블루 혹은 티켓파크 메인색 */
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 30px;
}
  
.login-container {
    width: 100%;
    max-width: 450px;
}
  
/* 탭 메뉴 스타일 */
.tab-menu {
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}
  
.tab {
    flex: 1;
    text-align: center;
    padding: 15px 0;
    font-size: 14px;
    color: #666;
    cursor: pointer;
}
  
.tab.active {
    color: #346aff;
    border-bottom: 2px solid #346aff;
    font-weight: bold;
}
  
/* 입력창 스타일 */
.input-wrapper {
    position: relative;
    margin-bottom: 10px;
}
  
.input-wrapper input {
    width: 100%;
    padding: 15px 40px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
}
  
.input-wrapper i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #ccc;
}
  
.clear-btn, .view-btn {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    color: #ccc;
    cursor: pointer;
    font-size: 18px;
}
  
/* 옵션 및 버튼 */
.login-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    font-size: 13px;
    color: #346aff;
}
  
.login-submit-btn {
    width: 100%;
    padding: 15px;
    background-color: #346aff;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 15px;
}
  
.signup-btn {
    width: 100%;
    padding: 15px;
    background-color: white;
    color: #333;
    border: 1px solid #ccc;
    font-size: 16px;
    cursor: pointer;
}
  
.login-footer {
    margin-top: 50px;
    text-align: center;
    font-size: 12px;
    color: #999;
}
</style>