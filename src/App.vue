<template>
    <router-view></router-view>
    <router-view name="sidebar"></router-view>
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