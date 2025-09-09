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
* {
  font-family: "Ubuntu", sans-serif;
  box-sizing: border-box;
}

.header-menu {
  width: 100vw;
  min-height: 200px;
  display: flex;
  background-color: #081E6A;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.header-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

#logoCamp {
  height: 150px;
  max-width: 90%;
  object-fit: contain;
}

.menu-options > ul {
  list-style-type: none;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0 0 0;
}

.menu-options {
  border-radius: 20px;
}

.options {
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
}

.options:hover {
  cursor: pointer;
  transform: scale(1.1);
  border-radius: 20px;
}

/* ================= Media Queries ================= */
@media (max-width: 1024px) {
  #logoCamp {
    height: 120px;
  }
  .menu-options > ul {
    gap: 30px;
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  #logoCamp {
    height: 20  0px;
  }
  .menu-options > ul {
    gap: 20px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  #logoCamp {
    height: 150px;
  }
  .menu-options > ul {
    flex-direction: column;
    gap: 15px;
    font-size: 14px;
  }
  .options {
    margin-top: 5px;
  }
}

</style>