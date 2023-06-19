<template>
    <div class="main-right">
        <div class="left">{{ date }}</div>
        <div class="right">
            <h3>{{ role }}</h3>
            <p>{{ company }}</p>
            <p>{{ desc }}</p>
            <div>
                <v-list v-for="(item, index) in component" :key="index" > {{ item }}</v-list>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        'date', 'role', 'company', 'desc', 'skill'
    ],
    data() {
        return {
            component: this.skill
        
        }
    },
}
</script>

<style scoped>
.main-right{
    align-content: center;
    padding: 30px; 
    padding-right: 80px;
    border-radius: 20px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 0.70fr 1.30fr;
    
}
.main-right:hover{
    background-color: rgba(135, 228, 197, 0.358);
}
.left{
    color: rgb(236, 236, 236);
}
.right{
    color: rgb(239, 239, 239);
}
v-list{
    border-radius: 30px;
    background-color: rgba(67, 133, 111, 0.897);
    color: aquamarine;
    display: inline-flex;
    position: relative;
    gap: 5px;
    justify-content: space-around;
    margin-top: 10px;
    margin-right: 10px;
    align-items: center;
    align-content: center;
    padding: 5px;
}
</style>