"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('')  // Estado para armazenar o termo de pesquisa
  const [data, setData] = useState(null)  // Estado para armazenar os filmes
  const [loading, setLoading] = useState(false)  // Estado para controlar o carregamento

  return (
    <div>
      {/* Campo de busca e botão de pesquisa */}
      <input
        type="text"
        value={searchQuery}  // Controla o valor do input com o estado
        onChange={(e) => handleSearchChange(e, setSearchQuery)}  // Chama a função de mudança
        placeholder="Digite um título"
      />
      <button onClick={() => handleSearch(searchQuery, setData, setLoading)}>Pesquisar</button>  {/* Botão para disparar a pesquisa */}

      {/* Exibe um aviso de carregamento */}
      {loading && <p>Carregando...</p>}

      {/* Exibe os filmes */}
      {data && data.Search && (
        <div>
          {data.Search.map((m) => (
            <div key={m.imdbID}>
              {m.Title} --- {m.Year}
              <Image 
                src={m.Poster}
                alt={`Poster de ${m.Title}`}
                width={200}  
                height={300}  
              />
            </div>
          ))}
        </div>
      )}

      {/* Mensagem de erro se não houver filmes ou algum erro */}
      {!loading && !data && <p>Nenhum filme encontrado.</p>}
    </div>
  )
}

// Função para buscar filmes
async function fetchMovies(query) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=34de2e39&s=${query}`, {
    cache: "no-store", // Para evitar cache e simular comportamento dinâmico
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados");
  }

  return response.json()
}

// Função para lidar com a mudança no campo de pesquisa
function handleSearchChange(event, setSearchQuery) {
  setSearchQuery(event.target.value);  // Atualiza o estado com o valor do input
}

// Função que dispara a pesquisa
async function handleSearch(searchQuery, setData, setLoading) {
  if (searchQuery.trim() !== '') {
    setLoading(true);  // Inicia o carregamento
    try {
      const data = await fetchMovies(searchQuery)  // Chama a função de busca diretamente
      setData(data);  // Atualiza o estado com os filmes retornados
    } catch (error) {
      console.error('Erro ao buscar filmes:', error)
    } finally {
      setLoading(false);  // Finaliza o carregamento
    }
  }
}
