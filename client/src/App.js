import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/general/Navbar";
import Search from "./components/general/Search";
import ScrollToTop from "./components/general/ScrollToTop";
import SearchResults from "./pages/SearchResults";
import Account from "./pages/Account";
// Loaders
import MainScreen from "./loaders/screens/MainScreen";
import DetailsScreen from "./loaders/screens/DetailsScreen";
import ListingScreen from "./loaders/screens/ListingScreen";


import UserDetailsScreen from "./loaders/screens/UserDetailsScreen";

// Lazy Components
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/movies/Movies"));
const Shows = lazy(() => import("./pages/shows/Shows"));
const MovieDetails = lazy(() => import("./pages/details/MovieDetails"));
const ShowDetails = lazy(() => import("./pages/details/ShowDetails"));
const TrendingMovies = lazy(() => import("./pages/movies/TrendingMovies"));
const NowPlayingMovies = lazy(() => import("./pages/movies/NowPlayingMovies"));
const PopularMovies = lazy(() => import("./pages/movies/PopularMovies"));
const TopRatedMovies = lazy(() => import("./pages/movies/TopRatedMovies"));
const UpcomingMovies = lazy(() => import("./pages/movies/UpcomingMovies"));
const TrendingShows = lazy(() => import("./pages/shows/TrendingShows"));
const AiringTodayShows = lazy(() => import("./pages/shows/AiringTodayShows"));
const PopularShows = lazy(() => import("./pages/shows/PopularShows"));
const TopRatedShows = lazy(() => import("./pages/shows/TopRatedShows"));
const OnTheAirShows = lazy(() => import("./pages/shows/OnTheAirShows"));
const PersonDetails = lazy(() => import("./pages/details/PersonDetails"));
const MovieGenre = lazy(() => import("./pages/movies/MovieGenre"));
const ShowGenre = lazy(() => import("./pages/shows/ShowGenre"));


function App() {
  return (
    <BrowserRouter>
      <div className="lg:flex w-full bg-background">
        {/* Search */}
        <Search />
        {/* Navbar */}
        <Navbar />
        {/* Scroll To Top */}
        <ScrollToTop />
        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Suspense fallback={<MainScreen />}>
                <Home />
              </Suspense>
            }
          />
          {/* Movies */}
          <Route 
            path="/movies" 
            element={
            <Suspense fallback={<MainScreen />}>
              <Movies />
            </Suspense>
            }
          />
          {/* Trending Movies */}
          <Route 
            path="/movies/category/trending" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <TrendingMovies />
            </Suspense>
            }
          />
          {/* Movies Now Playing */}
          <Route 
            path="/movies/category/now-playing" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <NowPlayingMovies />
            </Suspense>
            }
          />
          {/* Popular Movies */}
          <Route 
            path="/movies/category/popular" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <PopularMovies />
            </Suspense>
            }
          />
          {/* Top Rated Movies */}
          <Route 
            path="/movies/category/top-rated" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <TopRatedMovies />
            </Suspense>
            }
          />
          {/* Upcoming Movies */}
          <Route 
            path="/movies/category/upcoming" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <UpcomingMovies />
            </Suspense>
            }
          />
          {/* Trending Shows */}
          <Route 
            path="/shows/category/trending" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <TrendingShows />
            </Suspense>
            }
          />
          {/* Airing Today Shows */}
          <Route 
            path="/shows/category/airing-today" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <AiringTodayShows />
            </Suspense>
            }
          />
          {/* Popular Shows */}
          <Route 
            path="/shows/category/popular" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <PopularShows />
            </Suspense>
            }
          />
          {/* Top Rated Shows */}
          <Route 
            path="/shows/category/top-rated" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <TopRatedShows />
            </Suspense>
            }
          />
          {/* On The Air Shows */}
          <Route 
            path="/shows/category/on-the-air" 
            element={
            <Suspense fallback={<ListingScreen />}>
              <OnTheAirShows />
            </Suspense>
            }
          />
          {/* Shows */}
          <Route 
            path="/shows" 
            element={
            <Suspense fallback={<MainScreen />}>
              <Shows />
            </Suspense>
            }
          />
          {/* Movie Details */}
          <Route 
            path="/movies/:id"
            element={
            <Suspense fallback={<DetailsScreen />}>
              <MovieDetails />
            </Suspense>
            }
          />
          {/* Show Details */}
          <Route 
            path="/shows/:id"
            element={
            <Suspense fallback={<DetailsScreen />}>
              <ShowDetails />
            </Suspense>
            }
          />
          {/* Person Details */}
          <Route 
            path="/person/:id"
            element={
            <Suspense fallback={<UserDetailsScreen />}>
              <PersonDetails />
            </Suspense>
            }
          />
          {/* Movie Genre */}
          <Route 
            path="/movies/genre/:id"
            element={
            <Suspense fallback={<ListingScreen />}>
              <MovieGenre />
            </Suspense>
            }
          />
          {/* Show Genre */}
          <Route 
            path="/shows/genre/:id"
            element={
            <Suspense fallback={<ListingScreen />}>
              <ShowGenre />
            </Suspense>
            }
          />
          {/* Search Results */}
          <Route
            path="/search"
            element={
              <Suspense fallback={<ListingScreen />}>
                <SearchResults />
              </Suspense>
            }
          />
          {/* Account */}
          <Route
            path="/account"
            element={
              <Suspense fallback={<DetailsScreen />}>
                <Account />
              </Suspense>
          }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
