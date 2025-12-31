<template>
    <div class="signup-page">
      <div class="logo-container">
        <h1 class="logo" @click="$router.push('/')">TICKETPARK</h1>
      </div>
  
      <div class="signup-container">
        <h2>회원정보 입력</h2>
        
        <form class="signup-form" @submit.prevent="handleSignup">
          <div class="input-group">
            <label>아이디</label>
            <div class="input-wrapper">
              <i class="icon">👤</i>
              <input type="text" v-model="id" placeholder="아이디를 입력하세요" required />
            </div>
          </div>
  
          <div class="input-group">
            <label>비밀번호</label>
            <div class="input-wrapper">
              <i class="icon">🔒</i>
              <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" required />
            </div>
          </div>
  
          <div class="input-group">
            <label>이메일 주소</label>
            <div class="input-wrapper">
              <i class="icon">📧</i>
              <input type="email" v-model="email" placeholder="이메일 주소를 입력하세요" required />
            </div>
          </div>
  
          <div class="terms-box">
            <label>
              <input type="checkbox" required /> [필수] 이용약관 및 개인정보 수집 이용 동의
            </label>
          </div>
  
          <button type="submit" class="signup-submit-btn">동의하고 가입하기</button>
        </form>
  
        <footer class="signup-footer">
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
            id: null,
            password: null,
            email: null
        };
    },
    methods: {
        async handleSignup() {

            var res;
            try {
                res = await axios.post(
                    `/member/create`,
                    {
                        id : this.id,
                        password : this.password,
                        email : this.email
                    }
                );
                alert("회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.");
                this.$router.push('/login');
            } catch (error) {
                console.log(error)
                
                alert("사용중인 아이디입니다.")
            }

            
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
.signup-page {
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}
  
.logo {
    color: #346aff;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
}
  
.signup-container {
    width: 100%;
    max-width: 450px;
    padding: 0 20px;
}
  
h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
}
  
.input-group {
    margin-bottom: 20px;
}
  
.input-group label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}
  
.input-wrapper {
    position: relative;
}
  
.input-wrapper input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 15px;
}
  
.input-wrapper .icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
}
  
.terms-box {
    margin: 20px 0;
    font-size: 13px;
    color: #666;
}
  
.signup-submit-btn {
    width: 100%;
    padding: 16px;
    background-color: #346aff;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
  
.signup-submit-btn:hover {
    background-color: #2a56d1;
}
  
.signup-footer {
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
    color: #999;
    padding-bottom: 20px;
}
</style>