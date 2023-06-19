<template>
    <div>
        <v-list v-for="(item, index) in component" :key="index" ><span class="line"></span> {{item.name}}</v-list>
    </div>
</template>

<script>
export default {
    name: 'App',
   

    data() {
        return {
             component: [
                {name:'About',link:'#'}, {name:'Experiences',link:''}, {name:'Resume',link:''}
            ]
        }
    },
    
}
</script>

<style scoped>
div{
    padding-top: 50px;
}

v-list{
    display: flex;
    position: relative;
    color: rgb(188, 188, 188);
    gap: 10px;
    align-items: center;
}
v-list:hover{
    color: white;
    transition: 0.2s ease-in-out;
}
.line{
    background-color: white;
    margin-left: 80px;
    display: inline-flex;
    position: relative;
    width: 80px;
    height: 3px; 
}
.line:hover{
    background-color: aquamarine;
    width: 100px;
    height: 5px;
    transition: 0.2s ease-in-out;
}

</style>