<template>
    <div>
        {{ userId }}
    </div>
</template>
<script>
export default {
    name: "SingleUsers",
    props: {
        userId: {
            type: String,
            required: true
        }
    }
}
</script>