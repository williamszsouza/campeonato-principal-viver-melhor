<template>
<div class="header-menu" >
    <div class="header-main">
        <img src="../assets/logo-campeoanto.png" alt="" srcset="" id="logoCamp">
    </div>
</div>
<div class="menu-options">
    <ul>
            <li class="options" @click="tabelas()">Tabelas</li>
            <li class="options" @click="regulamento()">Regulamento</li>
            <li class="options" @click="logar()">Entrar</li>
        </ul>
</div>

</template>


<script>
export default{
    methods:{
        tabelas(){
            this.$router.push('/')
        },
        logar(){
            this.$router.push('/login')
        },
        regulamento(){
            this.$router.push('/regulamento')
        }
        }
}
</script>

<style scoped>
*{
    font-family: "Ubuntu",sans-serif;
}

.header-menu{
    width: 100vw;
    height: 20vw;
    display: flex;
    background-color: #081E6A;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header-main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
}
#logoCamp{
    height: 300px;
}

.menu-options>ul{
    list-style-type: none;
    display: flex;
    gap:50px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.menu-options{
    border-radius: 20px;
}

.options{
    margin-top: 10px;
}

.options:hover{
    transition: all ease-in-out 0.1s;
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 20px;

}
</style>