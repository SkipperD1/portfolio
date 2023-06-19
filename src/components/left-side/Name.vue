<template>
    <div>
        <img src="../image/DSC_0705.jpg" alt="Daniel">
        <h1 >{{ Name }}</h1>
    </div>
</template>

<script>
export default {
    name: 'App',
    component: 'Name',

    data() {
        return {
            Name: 'Daniel Kofi Tetteh'
        }
    },
}
</script>

<style scoped>
div{
    padding-left: 80px;
    padding-top: 50px;
}
h1{
    color: white;
    font-size: 40px;
}
img{
    width: 70px;
    height: 70px;
    border-radius: 50px;
}
</style>