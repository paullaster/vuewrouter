<template>
    <div class="grid">
        <sidebar class="sidebar">
            <router-view></router-view>
        </sidebar>
        <main class="main">
            <h1>Main</h1>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'Hello from Vue'
        }
    }
}
</script>
