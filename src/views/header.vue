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
import pat1 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 1.png';
import pat2 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 2.png';
import pat3 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 3.png';
import pat4 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 4.png';
import pat5 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 5.png';
import pat6 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 6.png';
import pat7 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 7.png';
import pat8 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 8.png';
import pat9 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 9.png';
import pat10 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 10.png';
import pat11 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 11.png';
import pat12 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 12.png';
import pat13 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 13.png';
import pat14 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 14.png';
import pat15 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 15.png';
import pat16 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 16.png';
import pat17 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 17.png';
import pat18 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 18.png';
import pat19 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 19.png';
import pat20 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 20.png';
import pat21 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 21.png';
import pat22 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 22.png';
import pat23 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 23.png';
import pat24 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 24.png';
import pat25 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 25.png';
import pat26 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 26.png';
import pat27 from '../assets/patrocinios/Imagem do WhatsApp de 2025-09-08 à(s) 14.45.17_aa142602 27.png';

export default {
  data() {
    return {
      patrocinadores: [
        pat1, pat2, pat3, pat4, pat5, pat6, pat7, pat8, pat9, pat10,
        pat11, pat12, pat13, pat14, pat15, pat16, pat17, pat18, pat19, pat20,
        pat21, pat22, pat23, pat24, pat25, pat26, pat27
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
  max-height: 80px;
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