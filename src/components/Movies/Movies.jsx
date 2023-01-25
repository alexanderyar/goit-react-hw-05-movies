import { SearchBar } from "components/SearchBar/SearchBar"
import { fetchMoviesByName } from "services/api"
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { LinkItem, ListItem, MovieList } from "./Movies.styled";



 const Movies = () => {

    //saving current location os we can pass it to the MovieDetails (so we can go back without losing all the searchparams)
    const location = useLocation()
    
    // declared state to save movies, fetched by name for render in return
    const [fetchedMoviesByName, setFetchedMoviesByName] = useState([]);
    
    // declared searchParams so value from input can be shown in the URL
    const [searchParams, setSearchParams] = useSearchParams()
    
    // saving searchParams string from the URL string to variable. This way no need to use useState for a query string.
    const movieQuery = searchParams.get('query');
    console.log(movieQuery)

    useEffect(() => {

        // fetchData is declared inside useEffect. It calls fetchMoviesByName function from the api file. ComponentDidMount fetchis skipped thanks to "if" check
        async function fetchData() {
            try {
            if (!movieQuery) {return}
            
            const response = await (fetchMoviesByName(movieQuery))
            setFetchedMoviesByName(response.results)
            console.log(response)
        
      } catch (error) {
        console.log(error)
      }
     
      
        }
        
    fetchData()
    
    }, [movieQuery])

  
    // reading SearchBar input value and sending to searchParams
    const onSearchBarValueSubmit = e => {
        e.preventDefault()
        console.log(e.target.movieString.value)
        const value = e.target.movieString.value

         // declared searchParams so value from input can be shown in the URL
        setSearchParams({query:value})
    }

    if (!fetchedMoviesByName) { return null }
    

    
    return (
        <>
            <SearchBar onSubmit={onSearchBarValueSubmit}/>
            <MovieList>{fetchedMoviesByName.map(result => <ListItem key={result.id}><LinkItem to={`/movies/${result.id}`} state={{from: location}}>{result.title}</LinkItem></ListItem>)}</MovieList>
        </>
        
    )
}

export default Movies
