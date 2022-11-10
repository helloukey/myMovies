import Hero from "../components/general/Hero";
import MoviesCarousel from "../components/carousel/Carousel";
import ShowsCarousel from "../components/carousel/Carousel";
import Footer from "../components/general/Footer";
import { useGetSingleTrendingQuery, useGetTrendingQuery } from "../redux/tmdbApi";
import MainScreen from "../loaders/screens/MainScreen";

const Home = () => {
  const { data, isLoading: heroLoading, error } = useGetSingleTrendingQuery("all");
  const { data: list, isLoading: moviesLoading } = useGetTrendingQuery("movie");
  const { data: shows, isLoading: showsLoading } = useGetTrendingQuery("tv");

  return (
    <div className="w-full overflow-x-hidden">
      {!heroLoading && !moviesLoading && !showsLoading && data && list && shows ?
      <>
      <Hero data={data} error={error} />
      <MoviesCarousel
        data={list}
        heading="Trending Movies"
        explore="/movies/category/trending"
      />
      <ShowsCarousel
        data={shows}
        heading="Trending Shows"
        explore="/shows/category/trending"
         />
      <Footer />
      </>
      :
      <MainScreen />
      }
    </div>
  );
};
export default Home;
