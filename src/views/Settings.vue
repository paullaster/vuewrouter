<template>
    <div class="grid">
        <sidebar class="sidebar">
            <h1>Settings</h1>
            <div class="side-nav">
                <router-link to="/settings/email">Email</router-link>
                <router-link to="/settings/profile">Profile</router-link>
            </div>
        </sidebar>
        <main class="main">
            <router-view name="subscriptions"></router-view>
            <router-view name="changeProfile"></router-view>
            <router-view name="viewProfile"></router-view>
        </main>
    </div>
</template>
<script>
export default {
    name: 'Settings',

}
</script>
<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0 !important;
}

.grid {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: 20px;
}

.main {
    background-color: #fff;

}

.sidebar {
    background-color: #1c2e4a !important;
    color: #fff;
    display: flex !important;
    flex-direction: column;
    /* justify-content: center; */
    padding-top: 28px ;
    align-items: center;
    height: 100vh;
}
.side-nav{
    margin: 16px  0 0 0;
}

a{ 
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px;
    font-size: 24px
}

</style>