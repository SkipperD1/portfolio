<template>
    <div>
        <h3>{{ role }}</h3>
    </div>
</template>

<script>
export default {
    name: 'App',
    component: 'role',

    data() {
        return {
            role: 'UX/UI Designer & Frontend Developer'
        }
    },
    
}
</script>

<style scoped>
div{
    padding-left: 80px;
    padding-top: 3px;
}
h3{
    color: white;
    font-size: 17px;
}
</style>