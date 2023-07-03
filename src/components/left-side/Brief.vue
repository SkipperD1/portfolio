<template>
    <div>
        {{ brief }}
        <p>{{ contact }}</p>
        <p>{{ email }}</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    component: '',

    data() {
        return {
            brief: 'I design creative and highly interractive ux/ui designs and build robust website which helps businesses to thrive.',
            contact: '(+233) 55 432 2449',
            email: 'kofidaniell4@gmail.com'
        }
    },
    
}
</script>

<style scoped>
div{
    padding-left: 80px;
    padding-top: 10px;
    padding-right: 150px;
    color: rgb(188, 188, 188);
}
p{
    padding-top: 10px;
    color: white;
}
</style>