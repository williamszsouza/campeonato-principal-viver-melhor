import { supabase } from "../lib/supabase";

//get todos times
export async function getAllTimes() {
    const{data,error} = await supabase
    .from('times')
    .select('*')
     .order('pontos', { ascending: false });
    if(error){
        console.log(error)
    }
    return data
}

//criar time
export async function createTime(time){
    const {data,error} = await supabase
    .from('times')
    .insert([time])
    if(error){
        console.log(error)
    }
    return data
}

//atualiza time
export async function updateTime(time){
    const {data,error} = await supabase
    .from('times')
    .update([time])
    .eq('id',time.id)
    if(error){
        console.log(error)
        throw error
    }
    return data
}


//criar artilheiro
export async function CreateArtilheiro(jogador){
    const {data,error} = await supabase
    .from('artilheiros')
    .insert([jogador])
    if(error){
        console.log(error)
        throw error
    }
    return data
}

//atualiza artilheiro
export async function updateArtilheiro(jogador){
    const {data,error} = await supabase
    .from('artilheiros')
    .update([jogador])
    .eq('id',jogador.id)
    if(error){
        console.log(error)
        throw error
    }
    return data
}

//get todos artilheiros
export async function getAllArtilheiros() {
    const {data,error} = await supabase
    .from('artilheiros')
    .select('*')
    .order('gols', {ascending: false})
    if(error){
        console.log(error)
        throw error
    }
    return data
}