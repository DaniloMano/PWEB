export default async function Home({searchParams}){  
  const {titleSearchKey = 'bagdad'} = await searchParams  
  const {yearSearchKey = 1949} = await searchParams  
  const {typeSearchKey = "movie"} = await searchParams  
  const res = await fetch(`http://www.omdbapi.com/?apikey=34de2e39&s=${titleSearchKey}&y=${yearSearchKey}&type=${typeSearchKey}`)
  const data = await res.json()
  return (
      <div>
          <div>
          {data.Search.map( (m) => 
          <div key={m.imdbID}>
            {m.Title} --- {m.Year}
            <img src={m.Poster} alt={m.Title} />
          </div>  )}               
          </div>
      </div>
  )
}