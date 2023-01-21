import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieReviews } from "components/api"
import { ProfileName } from "components/Cast/Cast.styled"

const Reviews = () => {

const {movieId} = useParams()
    console.log(movieId)

    const [movieReviews, setMovieReviews] = useState(null)

   useEffect(() => {
        
        // checking if there is any movieId read from the URL. if not - there is not need to launch useEffect, which would otherwise happen the first time
        if (!movieId) { return };
        
        // using fetchData so we can keep actual func body in api.jsx
         async function fetchData() {
             try {
                 const response = await (getMovieReviews(movieId))
          
                 // avoiding using movie variable so we don't need to put it in dependencies which would cause looping 
                 setMovieReviews(prevState => ([...response.results]))
         
       

        
      } catch (error) {
        console.log(error)
      }
     }
    
        fetchData()
    }, [movieId])
    
    if (!movieReviews)
    { return null }
    console.log(movieReviews)

    if (movieReviews.length === 0) {
        return (
            <div>Oops, no reviews</div>
        )
    }



    return (
        <ul>
            {movieReviews.map(review =>
                <li key={review.id}>
                    <ProfileName>Author: {review.author}</ProfileName>
                    <p>{review.content}</p>
                </li>)}
        </ul>
    )
}

export default Reviews