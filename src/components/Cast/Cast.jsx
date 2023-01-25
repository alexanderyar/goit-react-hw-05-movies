import { useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieCredits } from "services/api"
import { CharacterDescr, ListItem, ProfileName } from "./Cast.styled"



const Cast = () => {

    const {movieId} = useParams()
    console.log(movieId)

    const [movieCredits, setMovieCredits] = useState([])

    // const location = useLocation();

   useEffect(() => {
        
        // checking if there is any movieId read from the URL. if not - there is not need to launch useEffect, which would otherwise happen the first time
        if (!movieId) { return };
        
        // using fetchData so we can keep actual func body in api.jsx
         async function fetchData() {
      try {
          const response = await (getMovieCredits(movieId))
          
          // avoiding using movie variable so we don't need to put it in dependencies which would cause looping 
          setMovieCredits(prevState => ([...response.cast ]))
         
       

        
      } catch (error) {
        console.log(error)
      }
     }
    
        fetchData()
    }, [movieId])
    
    if (!movieCredits)
    { return null }
  
    if (movieCredits.length === 0) {
        return (
            <div>Oops, no cast info available</div>
        )
    }
    
    return (
        <ul>
            {movieCredits.map(cast => <ListItem key={cast.credit_id}>
                <div>
                     <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} height="150" />
               </div>
                <div>
                    <ProfileName>{cast.name}</ProfileName>
                <CharacterDescr>Character: {cast.character}</CharacterDescr>
                </div>
               
            </ListItem>)}
        </ul>
    )
}

export default Cast;