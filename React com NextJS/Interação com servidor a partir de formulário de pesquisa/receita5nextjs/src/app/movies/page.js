export default async function Home({searchParams}){  
  const {titleSearchKey = 'bagdad'} = await searchParams  
  const {yearSearchKey = ''} = await searchParams  
  const {typeSearchKey = ''} = await searchParams  
  const res = await fetch(`http://www.omdbapi.com/?apikey=34de2e39&s=${titleSearchKey}&y=${yearSearchKey}&type=${typeSearchKey}`)
  const data = await res.json()
  return (
      <div>
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