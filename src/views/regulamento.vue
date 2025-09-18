<template>
  <div class="regulamento-page">
    <div class="regulamento-card">
      <h1 class="title">REGULAMENTO</h1>
      <h2 class="subtitle">Campeonato Viver Melhor</h2>
      <button id="voltar" class="btn btn-primary" @click="voltarMenu()">Voltar</button>

      <section>
        <h3>1. INTRODUÇÃO</h3>
        <p>Este evento é realizado por moradores da comunidade com o intuito de trazer harmonia e lazer para todos através do esporte.</p>
      </section>

      <section>
        <h3>2. INÍCIO E DÉBITOS</h3>
        <p><strong>Art. 01:</strong> Este evento será realizado nos meses de setembro a dezembro, sendo totalizado 3 meses com início no dia 26/09.</p>
        <p><strong>Art. 02:</strong> Para que as equipes participem da competição, terão como principal função pagar os débitos antes dos jogos e até o prazo de pagamento da inscrição.</p>
        <p><strong>Art. 03:</strong> Todas as equipes confirmadas neste evento terão que pagar a inscrição no valor de R$700,00, que poderá ser paga até a 4ª rodada, e as mesas estipuladas no valor de R$80,00 cada, sem exceção.</p>
        
        <h4>Taxas Adicionais:</h4>
        <ul>
          <li><strong>Cartão amarelo:</strong> R$10,00</li>
          <li><strong>Cartão vermelho:</strong> R$20,00</li>
          <li><strong>Jogador extra:</strong> R$20,00</li>
          <li><strong>Transferências:</strong> R$300,00 (Dividido 50/50 entre a organização e o time de origem). Transferências são permitidas até as quartas de final.</li>
        </ul>
        <p>Após a fase de grupos, o campeonato terá uma pausa de 1 a 2 semanas para os times quitarem todas as suas dívidas com a organização.</p>
      </section>

      <section>
        <h3>3. REGRAS DO JOGO</h3>
        <p>O campo tem capacidade para 6 jogadores, incluindo o goleiro.</p>
        <p>As partidas serão realizadas às sextas (19:00 às 22:20) e aos sábados (18:00 às 23:00).</p>
        <p><strong>ATRASO É PROIBIDO.</strong></p>
        
        <h4>W.O. (Walkover):</h4>
        <ul>
          <li>Todos os times terão direito a 2 W.O. Caso aconteça o terceiro, o time estará eliminado.</li>
          <li>Time que der W.O. paga sua mesa e a mesa do adversário como forma de multa.</li>
        </ul>

        <h4>Tempo de Jogo:</h4>
        <p>O tempo de cada partida será de 40 minutos, divididos em 2 tempos de 20 minutos.</p>
        
        <ul>
          <li><strong>Art. 01:</strong> O goleiro só poderá sair jogando o “tiro de meta” com as mãos. Colocando a bola ao chão, o jogo já estará valendo.</li>
          <li><strong>Art. 02:</strong> Lateral somente com as mãos.</li>
          <li><strong>Art. 03:</strong> No recuo para o goleiro, ele não poderá pegar a bola com as mãos, somente com os pés. Caso pegue com as mãos, será marcada uma falta para a equipe adversária (tiro livre indireto).</li>
          <li><strong>Art. 04 (Tiro Livre):</strong> Serão contabilizadas 7 faltas. A partir da 8ª falta, será cobrado um tiro livre direto sem barreira.</li>
          <li><strong>Art. 05:</strong> Não será permitido recuo ao goleiro com os pés se a bola veio diretamente de um arremesso lateral.</li>
          <li><strong>Art. 06:</strong> A mesa poderá intervir em algumas situações de jogo.</li>
          <li><strong>Art. 07 (Cartão Amarelo):</strong> O jogador que receber cartão amarelo deverá ser substituído imediatamente e aguardar 2 minutos fora para poder retornar ao jogo.</li>
          <li><strong>Art. 08 (Cartão Vermelho):</strong> Expulsão direta. A equipe ficará com um jogador a menos durante 3 minutos. O jogador expulso está fora da partida.</li>
          <li><strong>Art. 09 (Brigas e Conduta Inadequada):</strong> Qualquer tipo de violência, física ou verbal, será julgada pela organização. Dependendo da gravidade, poderá resultar na eliminação de um membro, suspensão ou multas.</li>
          <li><strong>Art. 10 (Reservas em Campo):</strong> Serão permitidas até 3 pessoas da comissão técnica dentro da área do campo.</li>
          <li><strong>Art. 11 (Limite de Faltas):</strong> O limite de faltas coletivas por tempo é 7. A partir da 8ª falta, a equipe adversária terá direito a um tiro livre direto.</li>
        </ul>
      </section>

      <section>
        <h3>4. FASE CLASSIFICATÓRIA</h3>
        <p>O campeonato seguirá com chaveamento na fase classificatória.</p>
        <ul>
          <li><strong>Com 20 times:</strong> Serão 4 chaves com 5 times cada. Os 2 primeiros de cada chave se classificam direto para as quartas de final. Os demais times jogarão as oitavas de final.</li>
          <li><strong>Com 24 times:</strong> Serão 4 chaves com 6 times cada. Os 2 melhores de cada chave se classificam para as oitavas de final. Os demais times jogarão a pré-oitavas.</li>
        </ul>
        <p>Todos os times irão se classificar, porém os "cabeças de chave" (melhores colocados) terão vantagem, passando automaticamente para fases mais avançadas.</p>
      </section>

      <section>
        <h3>5. PENALIDADES</h3>
        <p>Em caso de disputa de pênaltis, cada equipe terá 5 batidas iniciais. Se o empate persistir, as cobranças serão alternadas até que haja um vencedor, sem repetição de batedores até que todos tenham cobrado.</p>
      </section>

      <section>
        <h3>6. PROIBIÇÕES</h3>
        <ul>
          <li>É vetado o uso de qualquer tipo de fogos de artifício dentro do campo.</li>
          <li>É proibido o uso de drogas (desde cigarros até substâncias ilícitas) na área do campo, podendo resultar em multas.</li>
          <li>Não será permitido um número excessivo de pessoas na área do banco de reservas.</li>
          <li>Serão permitidas apenas 3 pessoas da comissão técnica por time.</li>
          <li>A mesa poderá interferir e tomar decisões sobre situações de jogo não previstas no regulamento.</li>
        </ul>
      </section>

      <section>
        <h3>7. PREMIAÇÃO</h3>
        <p><strong>R$ 15.000,00</strong> para o 1º colocado + Troféu.</p>
        <p>A premiação para o vice-colocado será divulgada em breve.</p>
      </section>

      <section>
        <h3>8. FASES FINAIS (MATA-MATA)</h3>
        <ul>
          <li>Oitavas de Final</li>
          <li>Quartas de Final</li>
          <li>Semifinal</li>
          <li>Final</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regulamento",
  methods:{
    voltarMenu(){
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.regulamento-page {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #081e6a, #0d3b9d, #4b6cb7);
  min-height: 100vh;
  font-family: "Ubuntu", sans-serif;
  color: #fff;
  overflow-y: auto; /* permite rolagem se a tela for pequena */
}

.regulamento-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  animation: fadeIn 1s ease;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

h3 {
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-decoration: underline;
}

p, ul {
  line-height: 1.6;
  margin-bottom: 0.8rem;
}

ul {
  padding-left: 1.2rem;
}

ul li {
  margin-bottom: 0.5rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
</style>
