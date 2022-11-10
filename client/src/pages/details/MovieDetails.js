import BackNavigation from "../../components/general/BackNavigation";
import Hero from "../../components/general/Hero";
import DetailsTab from "../../components/details/DetailsTab";
import Cast from "../../components/carousel/CastCarousel";
import MoreLikeThis from "../../components/carousel/Carousel";
import Footer from "../../components/general/Footer";
import { useParams } from "react-router-dom";
import { useGetMovieDetailsPageQuery } from "../../redux/tmdbApi";
import DetailsScreen from "../../loaders/screens/DetailsScreen";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieDetailsPageQuery(id);
  return (
    <div className="w-full overflow-x-hidden">
      {!isLoading && data ?
      <>
        {/* Back Navigation */}
        <BackNavigation />
        {/* Hero */}
        <Hero data={data} error={error}  />
        {/* Details Tab */}
        <DetailsTab data={data} mediaType="movie" />
        {/* Cast */}
        <Cast heading="Cast" data={data?.casts.cast} />
        {/* More Like This */}
        <MoreLikeThis heading="More Like This" data={data?.similar} mediaType="movie" />
        {/* Footer */}
        <Footer />
        </>
        :
        <DetailsScreen />
      }
    </div>
  )
}
export default MovieDetails