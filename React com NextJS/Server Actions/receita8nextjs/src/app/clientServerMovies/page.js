"use client"
import Form from "next/form"
import {useState} from "react" 
import { searchMovies } from "../actions/movieActions"

export default function Home(){
    const [data, setData] = useState({})
    async function handleAction(formData){
        const res = await searchMovies(formData)
        setData(res)
    }
    return (
        <div>
            <MovieForm actionHandler={handleAction}/>
            {data.Search && <MovieTable movies={data.Search}/>}
        </div>        
    )
}

export function MovieForm({actionHandler}){
    return (
        <Form action={actionHandler}>
            <div>
            <div>
                    <label htmlFor="idTitleSearchKey">Título</label>            
                    <input id="idTitleSearchKey" name="titleSearchKey"/>
                </div>
                <div>
                    <label htmlFor="idYearSearchKey">Ano</label>            
                    <input id="idYearSearchKey" name="yearSearchKey"/>
                </div>
                <div>
                    <label htmlFor="idTypeSearchKey">Tipo</label>            
                    <input id="idTypeSearchKey" name="typeSearchKey"/>
                </div>
            </div>
            
            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({ movies }) {
    return (
      <div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}/>
            <div>
              <div><strong>{movie.Title}</strong></div>
              <div>{movie.Year}</div>
              <div>{movie.Type}</div>
            </div>
          </div>
        ))}
      </div>
    );
}