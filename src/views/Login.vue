<template>
  <div class="login-card">
    <img src="../assets/logo-campeoanto.png" alt="Logo" class="logo" />
    <h2>Bem-vindo de volta</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import { supabase } from '../lib/supabase'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password
        })

        if (error) {
          alert('Erro ao fazer login: ' + error.message)
        } else {
          console.log('Login realizado:', data)
          this.$router.push('/admin')   
        }
      } catch (err) {
        console.error(err)
        alert('Erro inesperado, tente novamente.')
      }
    }
  },
  setup(){
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push('/login') // redireciona se não estiver logado
      }
    })
  }
  }
</script>

<style scoped>
.login-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 2rem;
  color: white;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-card input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
}

.login-card button {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  background: #4b6cb7;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.login-card button:hover {
  transform: scale(1.05);
}

.logo {
  height: 200px;
  margin-bottom: 1rem;
  animation: bounce 1.5s infinite;
}
</style>
