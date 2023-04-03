<template>
    <h1>Settings</h1>
    <router-link to="/settings/email" >Email</router-link>
    <router-view name="subscriptions"></router-view>
</template>
<script>
export default {
    name: 'Settings',
    
}
</script>
<style scoped>
a{
    color: #fff;
    text-decoration: none;
}
</style>