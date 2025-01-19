"use client"
import Form from "next/form"
import { useState } from "react"

/*
Danilo: Mudamos o parâmetro de handleAction de 'formData' para 'event' para lidar com o desligamento do botao.
Danilo: Agora, 'seachKey' é manipulado diretamente pelo estado do componente, segundo o gpt:
 gpt:eliminando a necessidade de acessar o formulário explicitamente.
 gpt:Isso torna o código mais direto, com o valor de 'seachKey' sempre sincronizado com o input do usuário.
Danilo: resumindo, a gambiarra serve para lidar com o desligamento do botão, e funcionou deixar o forms atualizar-
Danilo: a seachkey dentro do proprio MovieForm, pois se trata de uma só pagina funcionando, mas ia dar uma merda gran-
Danilo: de se fossemos fazer essa mesma prezepada com varias pages, então para o fim dos exercicios vou considerar
Danilo: essa gambiarra como uma tentativa de resposta válida, já os corretores vão decidir se tá certo ou nãokkkk
*/

export default function Home() {
    const [resultMovies, setResultMovies] = useState([]) // Armazena os resultados da pesquisa
    const [seachKey, setSeachKey] = useState("") // Guarda a chave de pesquisa do formulário
    const [isLoading, setIsLoading] = useState(false) // Estado de carregamento

    async function handleAction(event) {
        event.preventDefault() // Previne o comportamento padrão do formulário

        const titleSearchKey = seachKey
        setSeachKey(titleSearchKey) // Atualiza a chave de pesquisa
        setIsLoading(true) // Define o estado de carregamento como verdadeiro antes de fazer a requisição

        const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${titleSearchKey}`)
        const jsonRes = await httpRes.json()
        setResultMovies(jsonRes.Search || [])
        setIsLoading(false) // Define o estado de carregamento como falso quando os resultados chegarem
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <MovieForm handleAction={handleAction} seachKey={seachKey} setSeachKey={setSeachKey} isLoading={isLoading} />
            <MovieTable movies={resultMovies} />
        </div>
    )
}

export function MovieForm({ handleAction, seachKey, setSeachKey, isLoading }) {
    /*
    danilo: por algum motivo (Forms ser um componente nextjs), enquanto a caixa de texto tiver selecionada,
            dar enter por padrão já dá submit no formulario, tendo o mesmo efeito que clicar no botão
            então não vejo necessidade de alterar o codigo, mas se eu tiver errado eu gostaria de 
            receber um comentario explicativo, pois essa informação pode ser útil num futuro breve
    */
    return (
        <Form onSubmit={handleAction} className="space-y-4">
            <label htmlFor="idTitleSearchKey" className="block text-lg font-semibold">Título</label>
            <input 
                id="idTitleSearchKey" 
                name="titleSearchKey" 
                value={seachKey} 
                onChange={(e) => setSeachKey(e.target.value)} 
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800" // Altere aqui
                placeholder="Digite o título do filme"
            />
            <button 
                type="submit" 
                disabled={isLoading} 
                className="w-full bg-blue-500 text-white p-3 rounded-md disabled:bg-gray-300 hover:bg-blue-600 transition-colors duration-300"
            >
                {isLoading ? "Pesquisando..." : "Pesquisar"} {/* Mostra o texto adequado dependendo do estado de carregamento */}
            </button>
        </Form>
    )
}

export function MovieTable({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="flex items-center space-x-4 mb-4 hover:bg-gray-700 hover:cursor-pointer p-2 rounded-md"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-24 h-36 object-cover"
          />
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
