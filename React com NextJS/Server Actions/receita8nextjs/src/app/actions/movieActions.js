'use server'

export async function searchMovies(formData){
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey")
    const typeSearchKey = formData.get("typeSearchKey")
    if (!titleSearchKey || titleSearchKey=='') return {Search: []}
    try{
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=34de2e39&s=${titleSearchKey}&y=${yearSearchKey}&type=${typeSearchKey}`)
        const jsonRes = await httpRes.json()
        return jsonRes
    }catch(err){
        return {error: `Erro na requisição ${err}`}
    }
}