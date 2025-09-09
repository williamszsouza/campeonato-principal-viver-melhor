<template>
  <div class="header-menu">
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

  <div class="patrocinadores">
    <h4 class="text-center mt-5">Patrocinadores</h4>
    <div class="carousel-viewport">
      <div class="carousel-track" :style="{ transform: `translateX(${offset}px)` }">
        <div v-for="(patro, index) in patrocinadores" :key="index" class="patro-card">
          <img :src="patro" alt="patrocinador">
        </div>
        <div v-for="(patro, index) in patrocinadores" :key="'dup-'+index" class="patro-card">
          <img :src="patro" alt="patrocinador">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pat100 from '../assets/patrocinios/pat100.png';
import pat101 from '../assets/patrocinios/pat101.png';
import pat102 from '../assets/patrocinios/pat102.png';
import pat103 from '../assets/patrocinios/pat103.png';
import pat104 from '../assets/patrocinios/pat104.png';
import pat105 from '../assets/patrocinios/pat105.png';
import pat106 from '../assets/patrocinios/pat106.png';
import pat107 from '../assets/patrocinios/pat107.png';
import pat108 from '../assets/patrocinios/pat108.png';
import pat109 from '../assets/patrocinios/pat109.png';
import pat110 from '../assets/patrocinios/pat110.png';
import pat111 from '../assets/patrocinios/pat111.png';
import pat112 from '../assets/patrocinios/pat112.png';
import pat113 from '../assets/patrocinios/pat113.png';
import pat114 from '../assets/patrocinios/pat114.png';
import pat115 from '../assets/patrocinios/pat115.png';
import pat116 from '../assets/patrocinios/pat116.png';
import pat117 from '../assets/patrocinios/pat117.png';
import pat118 from '../assets/patrocinios/pat118.png';
import pat119 from '../assets/patrocinios/pat119.png';
import pat120 from '../assets/patrocinios/pat120.png';
import pat121 from '../assets/patrocinios/pat121.png';
import pat122 from '../assets/patrocinios/pat122.png';
import pat123 from '../assets/patrocinios/pat123.png';
import pat124 from '../assets/patrocinios/pat124.png';
import pat125 from '../assets/patrocinios/pat125.png';
import pat126 from '../assets/patrocinios/pat126.png';
import pat127 from '../assets/patrocinios/pat127.png';
import pat128 from '../assets/patrocinios/pat128.png';
import pat129 from '../assets/patrocinios/pat129.png';
import pat130 from '../assets/patrocinios/pat130.png';
import pat131 from '../assets/patrocinios/pat131.png';
import pat132 from '../assets/patrocinios/pat132.png';
import pat133 from '../assets/patrocinios/pat133.png';
import pat134 from '../assets/patrocinios/pat134.png';
import pat135 from '../assets/patrocinios/pat135.png';
import pat136 from '../assets/patrocinios/pat136.png';
import pat137 from '../assets/patrocinios/pat137.png';
import pat138 from '../assets/patrocinios/pat138.png';
import pat139 from '../assets/patrocinios/pat139.png';
import pat140 from '../assets/patrocinios/pat140.png';
import pat141 from '../assets/patrocinios/pat141.png';
import pat142 from '../assets/patrocinios/pat142.png';

export default {
  data() {
    return {
      patrocinadores: [
        pat100, pat101, pat102, pat103, pat104, pat105, pat106, pat107, pat108, pat109,
        pat110, pat111, pat112, pat113, pat114, pat115, pat116, pat117, pat118, pat119,
        pat120, pat121, pat122, pat123, pat124, pat125, pat126, pat127, pat128, pat129,
        pat130, pat131, pat132, pat133, pat134, pat135, pat136, pat137, pat138, pat139,
        pat140, pat141, pat142
      ],
      offset: 0,
      speed: 1
    };
  },
  methods: {
    tabelas() { this.$router.push('/') },
    logar() { this.$router.push('/login') },
    regulamento() { this.$router.push('/regulamento') },
    startCarrousel() {
      const totalWidth = this.patrocinadores.length * 160; 
      const step = () => {
        this.offset -= this.speed;
        if (Math.abs(this.offset) >= totalWidth) {
          this.offset = 0;
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  },
  mounted() {
    this.startCarrousel();
  }
};
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
/* Apenas estilos novos para o carrossel, sem alterar nada existente */
.carousel-viewport {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 10px;
}

.patro-card {
  flex: 0 0 auto;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.patro-card img {
  max-width: 100%;
  max-height: 150px;
  image-rendering: optimizeQuality;
  object-fit: cover;
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