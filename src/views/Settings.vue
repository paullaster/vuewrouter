<template>
    <sidebar>
        <h1>Settings</h1>
        <router-link to="/settings/email">Email</router-link>
    </sidebar>
    <main>
        <router-view name="subscriptions"></router-view>
    </main>
</template>
<script>
export default {
    name: 'Settings',

}
</script>
<style>
*, *::before, *::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
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
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>