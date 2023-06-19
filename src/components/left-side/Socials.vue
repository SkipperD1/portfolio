<template>
    <div>
        <a href="https://github.com/SkipperD1" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon class="social" icon="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/danielkofitetteh/" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon class="social" icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://twitter.com/Tsopioto" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon class="social" icon="fa-brands fa-twitter" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon class="social" icon="fa-brands fa-instagram" />
        </a>
    </div>

</template>

<script>



export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    
}
</script>

<style scoped>
.social {
    color: rgb(215, 215, 215);
    font-size: 30px;
    padding-left: 80px;
    display: inline-flex;
    position: relative;
    padding-top: 80px;
}
.social:hover{
    color: aquamarine;
    transition: 0.3s ease-in;
}
</style>