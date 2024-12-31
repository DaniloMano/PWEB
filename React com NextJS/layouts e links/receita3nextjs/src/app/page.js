import Link from 'next/link'

export default function Home(){
    return (
        <div>           
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Link href="/novarota">Rota1</Link> <br/><br/>
                <a href="/novarota">Rota 1, jeito antigo</a>
            </div>
        </div>       
    )
}
//interessante que ao clicar nos links percebemos que o Link não recarrega a página, mas a tag "a" sim
//o que podemos deduzir que o link navega internamente (dentro do projeto), já a tag "a" navega externamente (para fora)