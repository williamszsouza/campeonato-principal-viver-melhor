<template>
  <div class="pagina-campeonato">
    <div class="tabelas">
      <div class="tabela-grupos">
        <h1 class="main-title">Campeonato Principal Viver melhor 2025</h1>
        <div class="table-nav">
          <button
            v-for="(table, key) in tables"
            :key="key"
            @click="changeTable(key)"
            :class="{ active: key === activeTableKey }"
          >
            {{ table.name }}
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <div class="table-wrapper" :key="activeTableKey">
            <h2 class="table-title">{{ activeTableData.name }}</h2>
            <table>
              <thead>
                <tr>
                  <th class="pos-col">#</th>
                  <th class="club-col">Clube</th>
                  <th>PJ</th><th>P</th> <th>J</th> <th>V</th><th>D</th> <th>SG</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(team,index) in activeTableData.teams" :key="team.nome">
                  <td class="pos-col">{{ index + 1}}</td>
                  <td class="club-col">
                    <div class="team-info">
                      <img :src="team.logo" :alt="team.nome" class="team-logo">
                      <span>{{ team.nome }}</span>
                    </div>
                  </td>
                  <td class="points-col">{{ team.partidas}}</td>
                  <td class="points-col">{{ team.pontos }}</td>
                  <td>{{ team.vitorias }}</td>
                  <td>{{ team.pontos }}</td>
                  <td>{{ team.derrotas }}</td>
                  <td>{{ calculateSG(team.gf,team.gt) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
      </div>
    </div>

    <div class="tabela-artilheiro">
      <h2 class="main-title">Artilharia</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th class="pos-col">#</th>
              <th class="player-col">Jogador</th>
              <th class="team-col">Time</th>
              <th>Gols</th>
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
              <td class="team-col">
                <div class="team-info">
                  <span>{{ player.time }}</span>
                </div>
              </td>
              <td>{{ player.gols }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="proximos-jogos">
      <h2 class="main-title">Próximos Jogos</h2>
      <div class="carousel-container">
        <button @click="prevSlide" :disabled="currentIndex === 0" class="carousel-arrow left">
          &#8249;
        </button>
        <div class="carousel-viewport">
          <div class="carousel-track" :style="trackStyle">
            <div v-for="jogo in proximosJogos" :key="jogo.id" class="match-card">
              <div class="match-header">
                <span>{{ jogo.data }}</span>
                <span>{{ jogo.estadio }}</span>
              </div>
              <div class="match-body">
                <div class="team">
                  <img :src="jogo.time_casa.logo_url" :alt="jogo.time_casa.nome" class="team-logo-large">
                </div>
                <span class="vs-text">VS</span>
                <div class="team">
                  <img :src="jogo.time_visitante.logo_url" :alt="jogo.time_visitante.nome" class="team-logo-large">
                  <span>{{ jogo.time_visitante.nome }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button @click="nextSlide" :disabled="currentIndex >= proximosJogos.length - 1" class="carousel-arrow right">
          &#8250;
        </button>
      </div>
    </div>
  </div>
  
</template>

<script>
import { getAllTimes } from '../routes/api';
import { getAllArtilheiros } from '../routes/api';

export default {
  data() {
    return {
      // --- Dados para Tabela de Classificação ---
      activeTableKey: 'geral',
      tables: {
        geral: {
          name: 'Tabela Geral',
          teams:[]
        },
        grupoA: { name: 'Grupo A', teams: [/* ... */] },
        grupoB: { name: 'Grupo B', teams: [/* ... */] },
        grupoC: { name: 'Grupo C', teams: [/* ... */] },
        grupoD: { name: 'Grupo D', teams: [/* ... */] },
      },
      teams: [],
      saldoDeGols:null,


      // --- Dados FALSOS para Tabela de Artilheiros ---
      artilheiros: [],

      // --- Dados FALSOS para Próximos Jogos ---
      proximosJogos: [
        { id: 1, data: '01/09/2025 - 19:00', estadio: 'Arena da Baixada', time_casa: { nome: 'Athletico-PR', logo_url: 'https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg' }, time_visitante: { nome: 'Maringá', logo_url: 'https://s.sde.globo.com/media/organizations/2022/01/21/maringa_2022.svg' }},
        { id: 2, data: '01/09/2025 - 21:00', estadio: 'Couto Pereira', time_casa: { nome: 'Coritiba', logo_url: 'https://s.sde.globo.com/media/organizations/2019/09/12/Coritiba.svg' }, time_visitante: { nome: 'Londrina', logo_url: 'https://s.sde.globo.com/media/organizations/2019/10/10/Londrina.svg' }},
        { id: 3, data: '02/09/2025 - 20:00', estadio: 'Germano Krüger', time_casa: { nome: 'Operário-PR', logo_url: 'https://s.sde.globo.com/media/organizations/2019/10/11/Operario-PR.svg' }, time_visitante: { nome: 'Paraná Clube', logo_url: 'https://s.sde.globo.com/media/organizations/2020/07/02/parana.svg' }},
        { id: 4, data: '07/09/2025 - 16:00', estadio: 'Arena da Baixada', time_casa: { nome: 'Athletico-PR', logo_url: 'https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg' }, time_visitante: { nome: 'Coritiba', logo_url: 'https://s.sde.globo.com/media/organizations/2019/09/12/Coritiba.svg' }},
      ],
      currentIndex: 0, // Controla a posição do carrossel
    };
  },
  computed: {
    activeTableData() {
      return this.tables[this.activeTableKey] || { name: '', teams: [] };
    },
    trackStyle() {
      const slideWidth = 320; // Largura do card (300px) + gap (20px)
      const offset = -this.currentIndex * slideWidth;
      return { transform: `translateX(${offset}px)` };
    },
  },
  mounted(){
      this.loadTimes()
      this.loadArtilheiros()

  },  
  methods: {
    changeTable(key) {
      this.activeTableKey = key;
    },
    calculateSG(gols,gols_tomados){
      this.saldoDeGols = gols - gols_tomados
      return this.saldoDeGols
    },
    async loadTimes(){
      const data = await getAllTimes();
      this.teams = data;
      this.tables.geral.teams = this.teams
      for (const team of this.teams){
        switch(team.grupo_name){
          case "a":
            this.tables.grupoA.teams.push(team) 
            break
          case "b":
            this.tables.grupoB.teams.push(team)
            break
          case "c":
            this.tables.grupoC.teams.push(team)
            break
          case "d":
            this.tables.grupoD.teams.push(team)
            break
        }
      
        
      }
        console.log(this.tables.grupoA)
      console.log(data)
  },
  async loadArtilheiros(){
    const data = await getAllArtilheiros();
    this.artilheiros = data
    console.log(this.artilheiros)
  },
    },
    nextSlide() {
      if (this.currentIndex < this.proximosJogos.length - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
</script>

<style scoped>
/* Estilos gerais para a página */
.pagina-campeonato {
  width: 100%;
  background-color: #f4f7fc;
  font-family: 'Roboto', sans-serif;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

/* Estilos para os containers de cada seção */
.tabela-grupos, .tabela-artilheiro, .proximos-jogos {
  max-width: 70vw;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Espaçamento entre as seções */
.tabela-artilheiro, .proximos-jogos {
  margin-top: 2rem;
}

.main-title {
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 1.5rem;
}


/* Estilos da Tabela de Classificação */
.table-nav { display: flex; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; gap: 10px; }
.table-nav button { padding: 10px 20px; font-size: 1rem; font-weight: 700; border: 2px solid transparent; border-radius: 8px; background-color: #e0e6f0; color: #4a5a70; cursor: pointer; transition: all 0.3s ease; }
.table-nav button:hover { background-color: #d1d9e6; }
.table-nav button.active { background-color: #0056b3; color: #ffffff; }

/* Estilos gerais para tabelas e carrossel */
.table-wrapper, .carousel-container { overflow-x: auto; }
.table-title { color: #333; margin-bottom: 1rem; text-align: center; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 12px 15px; text-align: center; border-bottom: 1px solid #ddd; vertical-align: middle; }
thead th { background-color: #1e3a5f; color: white; font-weight: 700; font-size: 0.85rem; text-align: center; }
tbody tr:hover { background-color: #c5c0c0; }
tbody tr { background-color: #e6e4e4; }

/* Colunas e Info de Times */
.pos-col { width: 5%; font-weight: 700; }
.club-col, .player-col, .team-col { text-align: left; }
.club-col { width: 50%; }
.player-col { width: 40%; }
.team-col { width: 30%; }
.points-col, .goals-col { font-weight: 700; color: #1e3a5f; }
.goals-col { font-size: 1.1rem; }
.team-info, .player-info { display: flex; align-items: center; gap: 15px; }
.team-logo { width: 30px; height: 30px; }
.player-photo { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #eee; }

/* Estilos do Carrossel */
.carousel-container { position: relative; display: flex; align-items: center; justify-content: center; }
.carousel-viewport { width: 100%; overflow: hidden; }
.carousel-track { display: flex; gap: 20px; transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1); }
.match-card { flex: 0 0 300px; background-color: #F59135; border-radius: 10px; border: 1px solid #e0e6f0; padding: 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.match-header { display: flex; justify-content: space-between; font-size: 0.8rem; color: #ffffff; border-bottom: 1px solid #ddd; padding-bottom: 0.5rem; margin-bottom: 1rem; }
.match-body { display: flex; align-items: center; justify-content: space-around; }
.team { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; width: 100px; text-align: center; font-weight: 700; }
.team-logo-large { width: 90px; height: 90px; }
.vs-text { font-size: 1.2rem; font-weight: 700; color: #fff; }
.carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); background-color: white; border: 1px solid #ddd; border-radius: 50%; width: 40px; height: 40px; font-size: 24px; cursor: pointer; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: all 0.2s ease; }
.carousel-arrow:hover:not(:disabled) { background-color: #1e3a5f; color: white; }
.carousel-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
.carousel-arrow.left { left: -20px; }
.carousel-arrow.right { right: -20px; }

/* Transição de Fade */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>