import Link from 'next/link'

export default async function MoviesServerSide() {
    const apiUrl = `http://www.omdbapi.com/?apikey=34de2e39&s=bagdad`
    const res = await fetch(apiUrl)
    const data = await res.json()

    if (!data || data.Response === 'False') {
        return <div>Erro ao carregar os filmes...</div>
    }

    return (
        <div>
            {data.Search.map((m) => (
                <div key={m.imdbID}>
                    {/* Link para a página de detalhes do filme */}
                    <Link href={`/movies_server_side/${m.imdbID}`}>
                        <div>{m.Title} --- {m.Year}</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
