<template>
  <div class="pagina-campeonato">
    <div class="tabela-grupos">
      <h1 class="main-title">Campeonato Principal Viver melhor 2025</h1>
      <div class="table-nav">
        <button v-for="(table, key) in tables" :key="key" @click="changeTable(key)" :class="{ active: key === activeTableKey }">
          {{ table.name }}
        </button>
      </div>
      <transition name="fade" mode="out-in">
        <div class="table-wrapper" :key="activeTableKey">
          <h2 class="table-title">{{ activeTableData.name }}</h2>
          <table>
            <thead>
              <tr>
                <th class="pos-col">#</th><th class="club-col">Clube</th><th>P</th><th>J</th><th>V</th><th>D</th><th>SG</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(team, index) in activeTableData.teams" :key="team.nome">
                <td class="pos-col">{{ index + 1 }}</td>
                <td class="club-col">
                  <div class="team-info">
                    <img :src="team.logo" :alt="team.nome" class="team-logo">
                    <span style="text-transform: capitalize;">{{ team.nome }}</span>
                  </div>
                </td>
                <td class="points-col">{{ team.pontos }}</td><td>{{ team.partidas }}</td><td>{{ team.vitorias }}</td><td>{{ team.derrotas }}</td><td>{{ calculateSG(team.gf, team.gt) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
    </div>

    <div class="tabela-artilheiro">
      <h2 class="main-title">Artilharia</h2>
      <h2 class="main-title" v-if="artilheiros.length == 0" style="color: red;">Sem informações sobre os artilheiros</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th class="pos-col">#</th><th class="player-col">Jogador</th><th class="team-col">Time</th><th>Gols</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in artilheiros" :key="player.id">
              <td class="pos-col">{{ index + 1 }}</td>
              <td class="player-col">
                <div class="player-info">
                  <img src="../assets/user-solid-full.svg" class="player-photo">
                  <span>{{ player.nome }}</span>
                </div>
              </td>
              <td class="team-col"><span>{{ player.time }}</span></td>
              <td>{{ player.gols }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="proximos-jogos">
      <h2 class="main-title">Próximos Jogos</h2>
      <div class="carousel-container">
        <button @click="prevSlide" :disabled="currentIndex === 0" class="carousel-arrow left">&#8249;</button>
        <div class="carousel-viewport">
          <div class="carousel-track" :style="trackStyle">
            <div class="carousel-slide" v-for="(imagem, index) in imagensDosJogos" :key="index">
              <img :src="imagem.src" :alt="imagem.alt">
            </div>
          </div>
        </div>
        <button @click="nextSlide" :disabled="currentIndex >= imagensDosJogos.length - 1" class="carousel-arrow right">&#8250;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllTimes, getAllArtilheiros } from '../routes/api';
import jogoImg1 from '../assets/jogos 1 rodada/IMG-20250922-WA0001.jpg';
import jogoImg2 from '../assets/jogos 1 rodada/IMG-20250922-WA0002.jpg';
import jogoImg3 from '../assets/jogos 1 rodada/IMG-20250922-WA0003.jpg';
import jogoImg4 from '../assets/jogos 1 rodada/IMG-20250922-WA0004.jpg';
import jogoImg5 from '../assets/jogos 1 rodada/IMG-20250922-WA0005.jpg';
import jogoImg6 from '../assets/jogos 1 rodada sab/IMG-20250922-WA0006.jpg';
import jogoImg7 from '../assets/jogos 1 rodada sab/IMG-20250922-WA0007.jpg';
import jogoImg8 from '../assets/jogos 1 rodada sab/IMG-20250922-WA0008.jpg';
import jogoImg9 from '../assets/jogos 1 rodada sab/IMG-20250922-WA0009.jpg';
import jogoImg10 from '../assets/jogos 1 rodada sab/IMG-20250922-WA0010.jpg';
import jogoImg11 from '../assets/jogos 1 rodada sab/IMG-20250922-WA0011.jpg';
import jogoImg12 from '../assets/jogos 1 rodada sab/Imagem do WhatsApp de 2025-09-22 à(s) 16.20.55_0ac22719.jpg';


export default {
  data() {
    return {
      activeTableKey: 'geral',
      tables: {
        geral: { name: 'Tabela Geral', teams: [] },
        grupoA: { name: 'Grupo A', teams: [] },
        grupoB: { name: 'Grupo B', teams: [] },
        grupoC: { name: 'Grupo C', teams: [] },
        grupoD: { name: 'Grupo D', teams: [] },
      },
      teams: [],
      artilheiros: [],
      imagensDosJogos: [
         { src: jogoImg1, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg2, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg3, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg4, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg5, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg6, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg7, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg8, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg9, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg10, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg11, alt: 'Jogo da 1ª Rodada' },
        { src: jogoImg12, alt: 'Jogo da 1ª Rodada' },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    activeTableData() {
      return this.tables[this.activeTableKey] || { name: '', teams: [] };
    },
    trackStyle() {
      return { transform: `translateX(-${this.currentIndex * 100}%)` };
    },
  },
  mounted() {
    this.loadTimes();
    this.loadArtilheiros();
  },
  methods: {
    changeTable(key) { this.activeTableKey = key; },
    calculateSG(gols, gols_tomados) { return gols - gols_tomados; },
    async loadTimes() {
      const data = await getAllTimes();
      this.teams = data;
      this.tables.geral.teams = this.teams;
      this.tables.grupoA.teams = [];
      this.tables.grupoB.teams = [];
      this.tables.grupoC.teams = [];
      this.tables.grupoD.teams = [];
      for (const team of this.teams) {
        switch (team.grupo_name) {
          case "a": this.tables.grupoA.teams.push(team); break;
          case "b": this.tables.grupoB.teams.push(team); break;
          case "c": this.tables.grupoC.teams.push(team); break;
          case "d": this.tables.grupoD.teams.push(team); break;
        }
      }
    },
    async loadArtilheiros() {
      const data = await getAllArtilheiros();
      this.artilheiros = data;
    },
    nextSlide() {
      if (this.currentIndex < this.imagensDosJogos.length - 1) { this.currentIndex++; }
    },
    prevSlide() {
      if (this.currentIndex > 0) { this.currentIndex--; }
    }
  }
}
</script>

<style scoped>
/* Estilos gerais ... */
.pagina-campeonato { width: 100%; background-color: #f4f7fc; font-family: 'Roboto', sans-serif; padding: 2rem 1rem; box-sizing: border-box; }
.tabela-grupos, .tabela-artilheiro, .proximos-jogos { max-width: 90vw; margin: 0 auto; padding: 1.5rem; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); }
.tabela-artilheiro, .proximos-jogos { margin-top: 2rem; }
.main-title { text-align: center; color: #1e3a5f; margin-bottom: 1.5rem; font-size: 1.6rem; }
.table-nav { display: flex; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; gap: 8px; }
.table-nav button { padding: 8px 14px; font-size: 0.9rem; font-weight: 700; border: 2px solid transparent; border-radius: 8px; background-color: #e0e6f0; color: #4a5a70; cursor: pointer; transition: all 0.3s ease; }
.table-nav button:hover { background-color: #d1d9e6; }
.table-nav button.active { background-color: #0056b3; color: #ffffff; }
.table-wrapper { overflow-x: auto; }
.table-title { color: #333; margin-bottom: 1rem; text-align: center; font-size: 1.2rem; }
table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
th, td { padding: 10px; text-align: center; border-bottom: 1px solid #ddd; vertical-align: middle; }
thead th { background-color: #1e3a5f; color: white; font-weight: 700; font-size: 0.8rem; text-align: center; }
tbody tr:hover { background-color: #e1dddd; }
.pos-col { width: 5%; font-weight: 700; }
.club-col, .player-col, .team-col { text-align: left; }
.club-col { width: 50%; }
.player-col { width: 40%; }
.team-col { width: 30%; }
.points-col { font-weight: 700; color: #333; }
.team-info, .player-info { display: flex; align-items: center; gap: 10px; }
.team-logo { width: 30px; height: 30px; }
.player-photo { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #eee; }

/* Estilos do Carrossel */
.carousel-container { position: relative; display: flex; align-items: center; justify-content: center; }
.carousel-viewport {
  width: 100%;
  overflow: hidden;
  max-height: 280px; /* Define uma altura máxima para a área do carrossel */
}
.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.carousel-slide {
  flex: 0 0 100%; /* Cada slide ocupa 100% da largura */
  box-sizing: border-box;
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  height: 280px; /* Altura fixa para controlar o tamanho */
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-slide img {
  width: 300px;
  height: 300px; /* Altura automática para manter a proporção */
  object-fit: contain; /* Garante que a imagem inteira apareça sem esticar */
  display: block;
}
.carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); background-color: white; border: 1px solid #ddd; border-radius: 50%; width: 35px; height: 35px; font-size: 20px; cursor: pointer; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: all 0.2s ease; }
.carousel-arrow:hover:not(:disabled) { background-color: #1e3a5f; color: white; }
.carousel-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
.carousel-arrow.left { left: -15px; }
.carousel-arrow.right { right: -15px; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@media (max-width: 768px) {
  .team-logo { width: 25px; height: 25px; }
  .carousel-viewport, .carousel-slide {
    max-height: 350px; /* Altura para telas menores */
    height: 350px;
  }
}
</style>