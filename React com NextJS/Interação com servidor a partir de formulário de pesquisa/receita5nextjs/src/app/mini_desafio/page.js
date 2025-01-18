import Form from "next/form";

export default async function Home({searchParams}){ 
    //alguns valores base para a primeira tela ficar enfeitadinha
    const {titleSearchKey = 'bagdad'} = await searchParams  
    const {yearSearchKey = ''} = await searchParams  
    const {typeSearchKey = ''} = await searchParams  
    const res = await fetch(`http://www.omdbapi.com/?apikey=34de2e39&s=${titleSearchKey}&y=${yearSearchKey}&type=${typeSearchKey}`)
    const data = await res.json()
    return (
        <div>
            <div>
                <MovieForm/>
            </div>
            <div>
            {data.Search.map( (m) => 
            <div key={m.imdbID}>
              {m.Title} --- {m.Year} --- {m.Type}
              <img src={m.Poster} alt={m.Title} />
            </div>  )}               
            </div>
        </div>
    )
}

export async function MovieForm() {
    return (
        <Form action="">
            <div>
                <label htmlFor="idTitleSearchKey">Título</label>
                <input id="idTitleSearchKey" name="titleSearchKey" />
            </div>
            <div>
                <label htmlFor="idYearSearchKey">Ano</label>
                <input id="idYearSearchKey" name="yearSearchKey" />
            </div>
            <div>
                <label htmlFor="idTypeSearchKey">Tipo</label>
                <input id="idTypeSearchKey" name="typeSearchKey" />
            </div>
            <div>
                <button type="submit">Pesquisar</button>
            </div>
        </Form>
    );
}
