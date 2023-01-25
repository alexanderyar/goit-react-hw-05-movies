import axios from "axios";

// using baseURL gives 404. Need to figure out later why
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day/';

//example of a query string from the api readme
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>  

// later can try to use envormental variable.
// axios.defaults.headers.common['api_key'] = process.env.REACT_APP_API_KEY;

export const getTrending = async () => {
   
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2edd1b2e50721d5e2dd8039d52ba1397',
        {
            // params: {
            //     media_type: "movie",
            //     time_window: "day",
            
            // }
        })
   
    console.log(response.data)
    return response.data
}

// maybe will need to move this func INSIDE useEffect which is fetching movies
export const fetchMoviesByName = async (movieDescription) => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=2edd1b2e50721d5e2dd8039d52ba1397',
        {
            params: {
                query: movieDescription,
                
            }
        })
   
    console.log(response.data)
    return response.data
}


export const fetchMovieById = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2edd1b2e50721d5e2dd8039d52ba1397`)
    console.log(response.data)
    return response.data
}

export const getMovieCredits = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2edd1b2e50721d5e2dd8039d52ba1397`)
    console.log(response.data)
    return response.data
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2edd1b2e50721d5e2dd8039d52ba1397`)
    console.log(response.data)
    return response.data
}