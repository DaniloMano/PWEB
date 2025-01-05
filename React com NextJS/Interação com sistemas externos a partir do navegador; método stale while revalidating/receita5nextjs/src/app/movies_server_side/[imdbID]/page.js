import Link from 'next/link'

export default async function MovieDetails({ params }) {
    // Esperar a resolução do params
    const { imdbID } = await params

    const apiUrl = `http://www.omdbapi.com/?apikey=34de2e39&i=${imdbID}`
    
    // Realizando a requisição no servidor
    const res = await fetch(apiUrl)
    const movie = await res.json()

    if (!movie || movie.Response === 'False') {
        return <div>Erro ao carregar o filme...</div>
    }

    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <p><strong>Gênero:</strong> {movie.Genre}</p>
            <p><strong>Diretor:</strong> {movie.Director}</p>
            <p><strong>Ator(es):</strong> {movie.Actors}</p>
            <p><strong>Resumo:</strong> {movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <Link href="/movies_server_side">Voltar para a lista de filmes</Link>
        </div>
    )
}
