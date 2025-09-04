<template>
  <div class="container py-5">
    <h2 class="mb-4 text-center">Painel de Administração</h2>

    <!-- Nav Tabs -->
    <ul class="nav nav-tabs" id="adminTabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link" :class="{ active: activeTab === 'artilheiros' }" @click="activeTab = 'artilheiros'">
          Artilheiros
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" :class="{ active: activeTab === 'jogos' }" @click="activeTab = 'jogos'">
          Próximos Jogos
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" :class="{ active: activeTab === 'grupos' }" @click="activeTab = 'grupos'">
          Grupos
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" :class="{ active: activeTab === 'times' }" @click="activeTab = 'times'">
          Times
        </button>
      </li>
    </ul>

    <!-- Conteúdo das Abas -->
    <div class="tab-content mt-3">

      <!-- Aba Artilheiros -->
      <div v-if="activeTab === 'artilheiros'">
        <ul class="nav nav-pills mb-3">
          <li class="nav-item">
            <button class="nav-link" :class="{ active: artilheiroTab === 'adicionar' }" @click="artilheiroTab = 'adicionar'">Adicionar</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" :class="{ active: artilheiroTab === 'editar' }" @click="artilheiroTab = 'editar'">Editar</button>
          </li>
        </ul>

        <!-- Adicionar Artilheiro -->
        <div v-if="artilheiroTab === 'adicionar'">
          <form @submit.prevent="criarArtilheiro">
            <div class="mb-3">
              <label class="form-label">Nome do Jogador</label>
              <input type="text" class="form-control" v-model="artilheiro.nome" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Time</label>
              <input type="text" class="form-control" v-model="artilheiro.time" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Gols</label>
              <input type="number" class="form-control" v-model="artilheiro.gols" required>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
            <button class="btn btn-secondary" @click="goHome" style="margin-left: 10px;">Voltar</button>
          </form>
        </div>

        <!-- Editar Artilheiro -->
        <div v-if="artilheiroTab === 'editar'">
          <div class="mb-3 position-relative">
            <label class="form-label">Pesquisar Jogador</label>
            <input
              type="text"
              class="form-control"
              v-model="artilheiroSearch"
              @focus="showDropdownArtilheiro = true"
              @input="filterArtilheiros"
              placeholder="Digite o nome do jogador"
            >
            <ul v-if="showDropdownArtilheiro && filteredArtilheiros.length" class="list-group position-absolute" style="z-index:1000; width:100%;">
              <li
                v-for="a in filteredArtilheiros"
                :key="a.id"
                class="list-group-item list-group-item-action"
                @click="selectArtilheiro(a)"
              >
                {{ a.nome }}
              </li>
            </ul>
          </div>

          <div v-if="selectedArtilheiro">
            <div class="mb-3">
              <label class="form-label">Nome do Jogador</label>
              <input type="text" class="form-control" v-model="selectedArtilheiro.nome">
            </div>
            <div class="mb-3">
              <label class="form-label">Time</label>
              <input type="text" class="form-control" v-model="selectedArtilheiro.time" disabled>
            </div>
            <div class="mb-3">
              <label class="form-label">Gols</label>
              <input type="number" class="form-control" v-model="selectedArtilheiro.gols">
            </div>
            <button class="btn btn-success" type="button" @click="salvarArtilheiro(selectedArtilheiro)">Salvar Alterações</button>
            <button class="btn btn-secondary" style="margin-left: 10px;" @click="goHome">Voltar</button>
          </div>
        </div>
      </div>

      <!-- Aba Próximos Jogos -->
      <div v-if="activeTab === 'jogos'">
        <form @submit.prevent="salvarJogo">
          <div class="mb-3">
            <label class="form-label">Time 1</label>
            <input type="text" class="form-control" v-model="jogo.time1" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Time 2</label>
            <input type="text" class="form-control" v-model="jogo.time2" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Data</label>
            <input type="date" class="form-control" v-model="jogo.data" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Horário</label>
            <input type="time" class="form-control" v-model="jogo.hora" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Local</label>
            <input type="text" class="form-control" v-model="jogo.local" required>
          </div>
          <button type="submit" class="btn btn-primary">Salvar</button>
          <button class="btn btn-secondary" @click="goHome" style="margin-left: 10px;">Voltar</button>
        </form>
      </div>

      <!-- Aba Grupos -->
      <div v-if="activeTab === 'grupos'">
        <form @submit.prevent="salvarGrupo">
          <div class="mb-3">
            <label class="form-label">Nome do Grupo</label>
            <input type="text" class="form-control" v-model="grupo.nome" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Times (separados por vírgula)</label>
            <input type="text" class="form-control" v-model="grupo.times" required>
          </div>
          <button type="submit" class="btn btn-primary">Salvar</button>
          <button class="btn btn-secondary" @click="goHome" style="margin-left: 10px;">Voltar</button>
        </form>
      </div>

      <!-- Aba Times permanece inalterada -->
      <div v-if="activeTab === 'times'">
        <ul class="nav nav-pills mb-3">
          <li class="nav-item">
            <button class="nav-link" :class="{ active: timeTab === 'adicionar' }" @click="timeTab = 'adicionar'">Adicionar</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" :class="{ active: timeTab === 'editar' }" @click="timeTab = 'editar'">Editar</button>
          </li>
        </ul>

        <!-- Formulários de times não alterados -->
        <div v-if="timeTab === 'adicionar'">
          <form @submit.prevent="criarTime">
            <div class="mb-3">
              <label class="form-label">Nome do time</label>
              <input type="text" class="form-control" v-model="time.nome" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Logo(url)</label>
              <input type="text" class="form-control" v-model="time.logo" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Pontos</label>
              <input type="text" class="form-control" v-model="time.pontos" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Partidas</label>
              <input type="text" class="form-control" v-model="time.partidas" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Vitórias</label>
              <input type="text" class="form-control" v-model="time.vitorias" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Derrotas</label>
              <input type="text" class="form-control" v-model="time.derrotas" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Gols feitos</label>
              <input type="text" class="form-control" v-model="time.gf" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Gols tomados</label>
              <input type="text" class="form-control" v-model="time.gt" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Grupo</label>
              <input type="text" class="form-control" v-model="time.grupo_name" required>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
            <button class="btn btn-secondary" @click="goHome" style="margin-left: 10px;">Voltar</button>
          </form>
        </div>

        <div v-if="timeTab === 'editar'">
          <div class="mb-3 position-relative">
            <label class="form-label">Pesquisar Time</label>
            <input type="text" class="form-control" v-model="timeSearch" @focus="showDropdown = true" @input="filterTimes" placeholder="Digite o nome do time">
            <ul v-if="showDropdown && filteredTimes.length" class="list-group position-absolute" style="z-index:1000; width:100%;">
              <li v-for="t in filteredTimes" :key="t.id" class="list-group-item list-group-item-action" @click="selectTime(t)">
                {{ t.nome }}
              </li>
            </ul>
          </div>

          <div v-if="selectedTime">
            <div class="mb-3">
              <label class="form-label">Nome do time</label>
              <input type="text" class="form-control" v-model="selectedTime.nome">
            </div>
            <div class="mb-3">
              <label class="form-label">Logo(url)</label>
              <input type="text" class="form-control" v-model="selectedTime.logo">
            </div>
            <div class="mb-3">
              <label class="form-label">Pontos</label>
              <input type="number" class="form-control" v-model="selectedTime.pontos">
            </div>
            <div class="mb-3">
              <label class="form-label">Vitórias</label>
              <input type="number" class="form-control" v-model="selectedTime.vitorias">
            </div>
            <div class="mb-3">
              <label class="form-label">Derrotas</label>
              <input type="number" class="form-control" v-model="selectedTime.derrotas">
            </div>
            <div class="mb-3">
              <label class="form-label">Gols feitos</label>
              <input type="number" class="form-control" v-model="selectedTime.gf">
            </div>
            <div class="mb-3">
              <label class="form-label">Gols tomados</label>
              <input type="number" class="form-control" v-model="selectedTime.gt">
            </div>
            <div class="mb-3">
              <label class="form-label">Partidas</label>
              <input type="number" class="form-control" v-model="selectedTime.partidas">
            </div>
            <div class="mb-3">
              <label class="form-label">Grupo</label>
              <input type="text" class="form-control" v-model="selectedTime.grupo_name" disabled>
            </div>
            <button class="btn btn-success" type="button" @click="salvarTime(selectedTime)">Salvar Alterações</button>
            <button class="btn btn-secondary" style="margin-left: 20px;" @click="goHome">Voltar ao menu</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { createTime, getAllTimes, updateTime, CreateArtilheiro, getAllArtilheiros, updateArtilheiro } from '../routes/api.js';

export default {
  name: "AdminPainel",
  data() {
    return {
      activeTab: "artilheiros",
      artilheiroTab: 'adicionar',
      timeTab: "adicionar",
      artilheiro: { nome: "", time: "", gols: "" },
      jogo: { time1: "", time2: "", data: "", hora: "", local: "" },
      time: { nome: "", logo: "", pontos: "", vitorias: "", partidas: "", derrotas: "", gt: "", gf: "", grupo_name: "" },
      grupo: { nome: "", times: "" },

      // Edição Times
      times: [],
      timeSearch: "",
      filteredTimes: [],
      showDropdown: false,
      selectedTime: null,

      // Edição Artilheiros
      artilheiros: [],
      artilheiroSearch: "",
      filteredArtilheiros: [],
      showDropdownArtilheiro: false,
      selectedArtilheiro: null
    };
  },
  mounted() {
    this.loadTimes();
    this.loadArtilheiros();
  },
  methods: {
    async criarArtilheiro() {
      try {
        await CreateArtilheiro(this.artilheiro);
        alert("Artilheiro criado com sucesso!");
        this.artilheiro = { nome: "", time: "", gols: "" };
        this.loadArtilheiros();
      } catch (e) { console.error(e); }
    },
    async loadArtilheiros() {
      this.artilheiros = await getAllArtilheiros();
    },
    async salvarArtilheiro(artilheiro) {
      try {
        await updateArtilheiro(artilheiro);
        alert("Artilheiro atualizado com sucesso!");
        this.selectedArtilheiro = null;
        this.artilheiroSearch = "";
        this.loadArtilheiros();
      } catch (e) { console.error(e); }
    },
    filterArtilheiros() {
      const search = this.artilheiroSearch.toLowerCase();
      this.filteredArtilheiros = this.artilheiros.filter(a => a.nome.toLowerCase().includes(search));
    },
    selectArtilheiro(jogador) {
      this.selectedArtilheiro = { ...jogador };
      this.artilheiroSearch = jogador.nome;
      this.showDropdownArtilheiro = false;
    },
    salvarJogo() { alert("Jogo salvo com sucesso!"); },
    salvarGrupo() { alert("Grupo salvo com sucesso!"); },
    goHome() { this.$router.push('/'); },
    async criarTime() {
      try { await createTime(this.time); alert("Time criado!"); this.loadTimes(); }
      catch (e) { console.error(e); }
    },
    async loadTimes() { this.times = await getAllTimes(); },
    filterTimes() {
      const search = this.timeSearch.toLowerCase();
      this.filteredTimes = this.times.filter(t => t.nome.toLowerCase().includes(search));
    },
    selectTime(time) {
      this.selectedTime = { ...time };
      this.timeSearch = time.nome;
      this.showDropdown = false;
    },
    async salvarTime(time) {
      try { await updateTime(time); alert("Time atualizado com sucesso!"); this.loadTimes(); }
      catch (e) { console.error(e); }
    }
  }
};
</script>

<style>
.container { max-width: 600px; }
.position-relative ul { max-height: 200px; overflow-y: auto; }
</style>
