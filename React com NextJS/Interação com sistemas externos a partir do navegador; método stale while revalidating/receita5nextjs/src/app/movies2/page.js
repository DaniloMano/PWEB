"use client"
import useSWR from 'swr'
import Link from 'next/link' // Importando o Link do Next.js

export default function Movies2() {
    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=34de2e39&s=bagdad`, fetcher)

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <div>
            {data.Search.map((m) => (
                <div key={m.imdbID}>
                    {/* Link para a página de detalhes do filme */}
                    <Link href={`/movies2/${m.imdbID}`}>
                        <div>{m.Title} --- {m.Year}</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

async function fetcher(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
