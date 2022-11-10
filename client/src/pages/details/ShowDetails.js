import BackNavigation from "../../components/general/BackNavigation";
import Hero from "../../components/general/Hero";
import DetailsTab from "../../components/details/DetailsTab";
import Cast from "../../components/carousel/CastCarousel";
import MoreLikeThis from "../../components/carousel/Carousel";
import Footer from "../../components/general/Footer";
import { useParams } from "react-router-dom";
import { useGetShowDetailsPageQuery } from "../../redux/tmdbApi";
import DetailsScreen from "../../loaders/screens/DetailsScreen";

const ShowDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetShowDetailsPageQuery(id);

  return (
    <div className="w-full overflow-x-hidden">
      {!isLoading && data
      ?
      <>
        {/* Back Navigation */}
        <BackNavigation />
        {/* Hero */}
        <Hero data={data} error={error}  />
        {/* Details Tab */}
        <DetailsTab data={data} mediaType="show" />
        {/* Cast */}
        <Cast heading="Cast" data={data?.credits.cast} cast="cast" />
        {/* More Like This */}
        <MoreLikeThis heading="More Like This" data={data?.similar} mediaType="show" />
        {/* Footer */}
        <Footer />
        </>
        :
        <DetailsScreen />
      }
    </div>
  )
}
export default ShowDetails