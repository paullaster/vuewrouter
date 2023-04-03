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
<style scoped>
a {
    color: #fff;
    text-decoration: none;
}
</style>