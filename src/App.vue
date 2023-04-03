<template>
    <main class="main">
        <h1>Main</h1>
    </main>
    <sidebar class="sidebar">
        <h1>Sidebar</h1>
    </sidebar>
</template>
<script>
export default{
    data(){
        return{
            message:'Hello from Vue'
        }
    }
}
</script>
<style scoped>
.main{
    background-color: #fff;

}
.sidebar{
    background-color: #1c2e4a
}
</style>