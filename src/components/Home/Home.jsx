import { getTrending } from "components/api"
import { useState, useEffect } from "react"
import { TrendingMoviesList } from "./Home.styled"
import { ListItem } from "./Home.styled"
import { Link } from "react-router-dom"

export const Home = () => {

    const [trendingMoviesFetched, setTrendingMoviesFetched] = useState([])

    useEffect(() => {

        async function fetchData() {
      try {
          const response = await (getTrending())
          setTrendingMoviesFetched(response)
        
      } catch (error) {
        console.log(error)
      }
     
      
    }
    fetchData()
    
    }, [])
   
    // secured that render will happen only after fetch
    if (trendingMoviesFetched.length === 0) { return null }
    
    const { results } = trendingMoviesFetched;

    return (
        <TrendingMoviesList>
            {results.map(result => <ListItem  key={result.title}><Link to={`/movies/${result.id}`}>{result.title}</Link></ListItem>)}
        </TrendingMoviesList>
    )
}