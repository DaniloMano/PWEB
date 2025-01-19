"use client"
import Form from "next/form"
import { useState } from "react"
//aqui é a logica inicial pré-gambiarra-do-desligamento-de-botão
export default function Home(){
    const [resultMovies, setResultMovies] = useState([])
    const [seachKey, setSeachKey] = useState("") //guardar a chave de pesquisa do formulario
    async function handleAction(formData){
        const titleSearchKey = formData.get("titleSearchKey")
        setSeachKey(titleSearchKey) //atualiza a chave de pesquisa
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=34de2e39&s=${titleSearchKey}`)
        const jsonRes = await httpRes.json()
        setResultMovies(jsonRes.Search || [])
    }
    return (
        <div>
            <MovieForm handleAction={handleAction} seachKey={seachKey} setSeachKey={setSeachKey}/>
            <MovieTable movies={ resultMovies }/>
        </div>
    )
}

export function MovieForm({handleAction, seachKey, setSeachKey}){
    return (
        <Form action={handleAction}>
            <label htmlFor="idTitleSearchKey">Título</label>            
            <input id="idTitleSearchKey" name="titleSearchKey" value={seachKey} onChange={(e) => setSeachKey(e.target.value)}/>
            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({movies}){
    return (
        <div>
            <div>
                {movies.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  )}               
            </div>
        </div>
    )
}