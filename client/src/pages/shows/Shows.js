import Hero from "../../components/general/Hero";
import ShowsAiringToday from "../../components/carousel/Carousel";
import PopularShows from "../../components/carousel/Carousel";
import TopRatedShows from "../../components/carousel/Carousel";
import ShowsOnAir from "../../components/carousel/Carousel";
import Footer from "../../components/general/Footer";
import {
  useGetSingleTrendingQuery,
  useGetShowListQuery,
} from "../../redux/tmdbApi";
import MainScreen from "../../loaders/screens/MainScreen";

const Shows = () => {
  const { data, isLoading, error } = useGetSingleTrendingQuery("tv");
  const {
    data: nowPlaying,
    isLoading: nowPlayingLoading,
    error: nowPlayingError,
  } = useGetShowListQuery("airing_today");
  const {
    data: popular,
    isLoading: popularLoading,
    error: popularError,
  } = useGetShowListQuery("popular");
  const {
    data: topRated,
    isLoading: topRatedLoading,
    error: topRatedError,
  } = useGetShowListQuery("top_rated");
  const {
    data: onAirShows,
    isLoading: onAirShowsLoading,
    error: onAirShowsError,
  } = useGetShowListQuery("on_the_air");
  return (
    <div className="w-full overflow-x-hidden">
      {!isLoading &&
      !nowPlayingLoading &&
      !popularLoading &&
      !topRatedLoading &&
      !onAirShowsLoading &&
      data &&
      nowPlaying &&
      popular &&
      topRated &&
      onAirShows ? (
        <>
          <Hero data={data} />
          <ShowsAiringToday
            heading="Shows Airing Today"
            mediaType="show"
            data={nowPlaying}
            explore="/shows/category/airing-today"
          />
          <PopularShows
            heading="Popular Shows"
            mediaType="show"
            data={popular}
            explore="/shows/category/popular"
          />
          <TopRatedShows
            heading="Top-Rated Shows"
            mediaType="show"
            data={topRated}
            explore="/shows/category/top-rated"
          />
          <ShowsOnAir
            heading="Shows On The Air"
            mediaType="show"
            data={onAirShows}
            explore="/shows/category/on-the-air"
          />
          <Footer />
        </>
      ) : (
        <MainScreen />
      )}
    </div>
  );
};
export default Shows;
