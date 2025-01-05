"use client"
import useSWR from 'swr'
import { use } from 'react'; // Importando o hook use

export default function MovieDetails({ params }) {
    // Desembrulhando a Promise de params com React.use()
    const { imdbID } = use(params); 

    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=34de2e39&i=${imdbID}`, fetcher);

    if (error) return <div>Falha na requisição...</div>;
    if (!data) return <div>Carregando...</div>;

    return (
        <div>
            <h1>{data.Title}</h1>
            <p>{data.Year}</p>
            <img src={data.Poster} alt={data.Title} />
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
