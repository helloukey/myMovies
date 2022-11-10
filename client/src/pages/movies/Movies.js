import Hero from "../../components/general/Hero";
import MoviesNowPlaying from "../../components/carousel/Carousel";
import PopularMovies from "../../components/carousel/Carousel";
import TopRatedMovies from "../../components/carousel/Carousel";
import UpcomingMovies from "../../components/carousel/Carousel";
import Footer from "../../components/general/Footer";
import {
  useGetSingleTrendingQuery,
  useGetMovieListQuery,
} from "../../redux/tmdbApi";
import MainScreen from "../../loaders/screens/MainScreen";

const Movies = () => {
  const { data, isLoading, error } = useGetSingleTrendingQuery("movie");
  const {
    data: nowPlaying,
    isLoading: nowPlayingLoading,
    error: nowPlayingError,
  } = useGetMovieListQuery("now_playing");
  const {
    data: popular,
    isLoading: popularLoading,
    error: popularError,
  } = useGetMovieListQuery("popular");
  const {
    data: topRated,
    isLoading: topRatedLoading,
    error: topRatedError,
  } = useGetMovieListQuery("top_rated");
  const {
    data: upcoming,
    isLoading: upcomingLoading,
    error: upcomingError,
  } = useGetMovieListQuery("upcoming");
  return (
    <div className="w-full overflow-x-hidden">
      {!isLoading &&
      !nowPlayingLoading &&
      !popularLoading &&
      !topRatedLoading &&
      !upcomingLoading &&
      data &&
      nowPlaying &&
      popular &&
      topRated &&
      upcoming ? (
        <>
          <Hero data={data} error={error} />
          <MoviesNowPlaying
            heading="Movies Now Playing"
            mediaType="movie"
            data={nowPlaying}
            explore="/movies/category/now-playing"
          />
          <PopularMovies
            heading="Popular Movies"
            mediaType="movie"
            data={popular}
            explore="/movies/category/popular"
          />
          <TopRatedMovies
            heading="Top-Rated Movies"
            mediaType="movie"
            data={topRated}
            explore="/movies/category/top-rated"
          />
          <UpcomingMovies
            heading="Upcoming Movies"
            mediaType="movie"
            data={upcoming}
            explore="/movies/category/upcoming"
          />
          <Footer />
        </>
      ) : (
        <MainScreen />
      )}
    </div>
  );
};
export default Movies;
