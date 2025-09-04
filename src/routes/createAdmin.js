import { supabase } from '../lib/supabase.js'

async function criarUsuarioAdmin() {
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'admin@admin.com',
    password: 'admin1234',
    email_confirm: true,
    user_metadata: { role: 'admin' }
  })

  if (error) {
    console.error('Erro ao criar usuário:', error.message)
  } else {
    console.log('Usuário criado:', data.user)
  }
}

criarUsuarioAdmin()
