<template>
    <div class="logo" href="/">TICKETPARK</div>
    <ul class="nav-links">
        <a href="/">홈</a>
        <a href="#">공연</a>
        <a href="#">영화</a>
        <a href="#">스포츠</a>
    </ul>
    <div class="user-actions">
        <a href="/mypage">
            <span class="notification-icon">마이페이지</span>
        </a>
        <a href="/join">
            <span class="profile-icon">회원가입</span>
        </a>
        <a href="/login">
            <span class="profile-icon">로그인</span>
        </a>
    </div>
</template>

<style>
.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a,
.user-actions span {
    text-decoration: none;
    font-size: 0.9rem;
    cursor: pointer;
}

.user-actions {
    margin-left: 50%;
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo {
    font-size: 1.5rem;
    color: #e50914; /* 넷플릭스 빨간색 */
    font-weight: bold;
    margin-right: 30px;
}
</style>