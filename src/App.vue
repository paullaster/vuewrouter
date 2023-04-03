<template>
    <div class="grid">
        <sidebar class="sidebar">
            <h1>Sidebar</h1>
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
<style scoped>
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
}
</style>