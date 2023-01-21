import { lazy } from "react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Layout } from "./SharedLayout/SharedLayout";
// import { Movies } from "./Movies/Movies";
// import Cast  from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

// lazy component's load. Also need to wrap Outlets in <Suspense> </Suspense> component so lazy component can render later. 
const Movies = lazy(() => import('../components/Movies/Movies'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
     
    </>
   
  );
};
