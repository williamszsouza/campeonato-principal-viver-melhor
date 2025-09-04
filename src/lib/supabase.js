// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

// Pegue essas infos no painel do Supabase (Project Settings > API)
const supabaseUrl = import.meta.env.VITE_supabaseUrl
const supabaseAnonKey = import.meta.env.VITE_supabaseAnonKey

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
