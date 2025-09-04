<template>
  <div class="regulamento-page">
    <div class="regulamento-card">
      <h1 class="title">REGULAMENTO</h1>
      <h2 class="subtitle">Campeonato Viver Melhor 2</h2>
        <button id="voltar" class="btn btn-primary" @click="voltarMenu()">Voltar</button>
      <section>
        <h3>1. INTRODUÇÃO</h3>
        <p>Este evento é realizado por moradores da comunidade com o intuito de trazer harmonia e lazer para todos através do esporte.</p>
      </section>

      <section>
        <h3>2. INÍCIO E DÉBITOS</h3>
        <p><strong>Art. 01:</strong> Este evento será realizado nos meses de setembro a dezembro, totalizando 3 meses, com início em 20/09.</p>
        <p><strong>Art. 02:</strong> Para que as equipes participem da competição, é necessário quitar os débitos antes dos jogos e dentro do prazo de pagamento da inscrição.</p>
        <p><strong>Art. 03:</strong> Todas as equipes confirmadas neste evento devem pagar a inscrição no valor de R$700,00, que poderá ser paga até a 3ª rodada, e as mesas estipuladas no valor de R$80,00 cada, sem exceção.</p>
      </section>

      <section>
        <h3>3. REGRAS DO JOGO</h3>
        <p>O campo tem capacidade para 6 jogadores, incluindo o goleiro.</p>
        <ul>
          <li><strong>Art. 01:</strong> O goleiro só poderá sair jogando o “tiro de meta” com as mãos. Colocando a bola ao chão, o jogo já estará valendo.</li>
          <li><strong>Art. 02:</strong> Lateral somente com as mãos.</li>
          <li><strong>Art. 03:</strong> O lateral não pode ser devolvido ao goleiro; só poderá ser passado aos demais jogadores de linha.</li>
          <li><strong>Art. 04:</strong> Tiro livre: serão contabilizadas 7 faltas; a 8ª falta será tiro livre direto.</li>
          <li><strong>Art. 05:</strong> Não será permitido recuo ao goleiro.</li>
          <li><strong>Art. 06:</strong> A mesa poderá intervir em algumas situações de jogo.</li>
          <li><strong>Art. 07:</strong> Cartão amarelo: o jogador que receber cartão amarelo deverá ser substituído imediatamente.</li>
          <li><strong>Art. 08:</strong> Cartão vermelho: expulsão direta.</li>
          <li><strong>Art. 09:</strong> Brigas e condutas inadequadas: qualquer tipo de violência, física ou verbal, será julgada antes de qualquer decisão. Dependendo do ocorrido, poderá resultar na eliminação de um membro do time ou suspensão com multas.</li>
          <li><strong>Art. 10:</strong> Reservas em campo: serão permitidas até 3 pessoas da comissão dentro do campo.</li>
        </ul>
        <p>O campeonato seguirá com chaveamento na fase classificatória.</p>
      </section>

      <section>
        <h3>4. PROIBIÇÕES</h3>
        <ul>
          <li>É vetado o uso de fogos dentro do campo.</li>
          <li>É proibido o uso de drogas dentro do campo, desde cigarros até substâncias ilícitas, podendo resultar em multas.</li>
          <li>Não será permitido número excessivo de pessoas na área do banco de reservas.</li>
          <li>Serão permitidas apenas 3 pessoas da comissão técnica.</li>
          <li>A mesa poderá interferir em algumas decisões de jogo.</li>
        </ul>
      </section>

      <section>
        <h3>5. PREMIAÇÃO</h3>
        <p>R$ 14.000,00 para o 1º colocado.</p>
      </section>

      <section>
        <h3>6. PENALIDADES</h3>
        <p>Caso haja penalidades, cada equipe terá 3 batidas iniciais. Após isso, será alternado sem repetição de batedores, seguindo a sequência de jogadores.</p>
      </section>

      <section>
        <h3>7. MESA PERDE-SAI</h3>
        <ul>
          <li>Oitavas</li>
          <li>Quartas</li>
          <li>Semi</li>
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
