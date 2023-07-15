const useGenre = (selectedGenres)=>{
    
    if(selectedGenres.length <1) return ''

    const genresIDs = selectedGenres.map((g)=>{
        return g.id
    })

    return genresIDs.reduce((acc, curr)=>{
        return acc +' , ' + curr
    })
}

export default useGenre
