import BackNavigation from "../../components/general/BackNavigation";
import ShowGenreCategory from "../../components/general/Category";
import Footer from "../../components/general/Footer";
import { useGetShowGenrePageQuery } from "../../redux/tmdbApi";
import { resetPage } from "../../redux/layoutSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useUniqueData from "../../hooks/useUniqueData";
import ListingScreen from "../../loaders/screens/ListingScreen";

const ShowGenre = () => {
  const { id } = useParams();
  const genreHeading = useSelector(
    (state) =>
      state.genre.genres.filter((genre) => genre.id === parseInt(id))[0]
  );
  const page = useSelector((state) => state.layout.page);
  const { data, isFetching, isLoading } = useGetShowGenrePageQuery({
    page: page,
    genre: id,
  });
  const [final, setFinal] = useState([]);
  const dispatch = useDispatch();
  const { uniqueItems } = useUniqueData(final);

  useEffect(() => {
    if (data && !isFetching) {
      setFinal((final) => final.concat(...data.results));
    }
  }, [data, isFetching]);

  // Reset to page 1 when unmounts
  useEffect(() => {
    return () => {
      dispatch(resetPage());
      setFinal([]);
    };
  }, [dispatch]);

  return (
    <div className="w-full">
      {!isLoading && data ?
      <>
      <BackNavigation />
      <ShowGenreCategory
        data={uniqueItems}
        isFetching={isFetching}
        heading={`Show Genre: ${genreHeading.name}`}
        totalPages={data?.total_pages}
      />
      <Footer />
      </>
      :
      <ListingScreen />
    }
    </div>
  );
}
export default ShowGenre