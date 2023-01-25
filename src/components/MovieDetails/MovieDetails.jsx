import { fetchMovieById } from "services/api";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { AdditionalInfo, ButtonBack, Container, ContainerForGenres, GenresListItem, Header, HeaderBelow } from "./MovieDetails.styled";

export const MovieDetails = () => {
    
    // need to read movieId from the URL string so we can fetch object with details from the backend 
    const {movieId} = useParams();
  

    const [movie, setMovie] = useState(null);
    
    // reading location from prop "state" of this component "MovieDetails" which we have previously passed in Movies component
    const location = useLocation()


    useEffect(() => {
        
        // checking if there is any movieId read from the URL. if not - there is not need to launch useEffect, which would otherwise happen the first time
        if (!movieId) { return };
        
        // using fetchData so we can keep actual func body in api.jsx
         async function fetchData() {
      try {
          const response = await (fetchMovieById(movieId))
          
          // avoiding using movie variable so we don't need to put it in dependencies which would cause looping 
          setMovie(prevState => ({ ...prevState, ...response }))
         
       

        
      } catch (error) {
        console.log(error)
      }
     }
    
        fetchData()
    }, [movieId])
    
    
    if (!movie) { return null }
    
    const { poster_path, original_title, genres, vote_average, overview } = movie;
    
    //checking if location from the previous address comes through
    // console.log(location.state.from)

    // if URL is pasted, location will be empty, causing a crash. If location IS empty, we simply go  to /movies
    const backLinkHref = location.state?.from ?? "/movies";
    return (
        
        <div>
        <ButtonBack to={backLinkHref}>Back to the list of Movies</ButtonBack>
            <Container>
            <div> <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={original_title} height="400" /> </div>
            <div>
                <Header>{original_title}</Header>
                <p> User score: {vote_average}</p>
                <HeaderBelow> Overview</HeaderBelow>
                <p>{overview}</p>
                <HeaderBelow>Genres</HeaderBelow>
                <ContainerForGenres>{genres.map(genre => <GenresListItem key={genre.id} >| {genre.name} | </GenresListItem>)}</ContainerForGenres>
            </div>
        </Container>
            <AdditionalInfo>
                <p>Additional information</p>
                <ul>
                    <li><NavLink to="cast" state={{from: backLinkHref}}>Cast</NavLink></li>
                    <li> <NavLink to="reviews" state={{from: backLinkHref}}>Reviews</NavLink></li>
                </ul>
            </AdditionalInfo>
            <Suspense>
                <Outlet/>
            </Suspense>
       </div>
    )

}