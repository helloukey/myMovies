import { useParams } from "react-router-dom";
import ArtistDetails from "../../components/artist/ArtistDetails";
import BackNavigation from "../../components/general/BackNavigation";
import Footer from "../../components/general/Footer";
import { useGetPersonDetailsPageQuery } from "../../redux/tmdbApi";
import PersonDetailsScreen from "../../loaders/screens/UserDetailsScreen";

const PersonDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPersonDetailsPageQuery(id);
  return (
    <div className="w-full">
      {!isLoading && data ? (
        <>
          {/* Back Navigation */}
          <BackNavigation />
          {/* Artist Details */}
          <ArtistDetails data={data} />
          {/* Footer */}
          <Footer />
        </>
      ) : (
        <PersonDetailsScreen />
      )}
    </div>
  );
};
export default PersonDetails;
