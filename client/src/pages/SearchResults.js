import SearchCategory from "../components/general/Category";
import Footer from "../components/general/Footer";
import { useGetSearchResultsQuery } from "../redux/tmdbApi";
import { resetPage } from "../redux/layoutSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import useUniqueData from "../hooks/useUniqueData";
import { useSearchParams } from "react-router-dom";
import ListingScreen from "../loaders/screens/ListingScreen";

const SearchResults = () => {
  const { isSearch, page } = useSelector((state) => state.layout);
  const [searchParam] = useSearchParams();
  const [waiting, setWaiting] = useState(true);

  const { data, isFetching, isLoading } = useGetSearchResultsQuery({
    query: searchParam.get("q"),
    page: page,
  }, {skip: waiting});
  const [final, setFinal] = useState([]);
  const dispatch = useDispatch();
  const { uniqueItems } = useUniqueData(final);

  // Debounce fetch
  useEffect(() => {
    setWaiting(true);
    const handler = setTimeout(() => {
      setWaiting(false);
    }, 500);

    return () => clearTimeout(handler);
  },[searchParam])

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

  // Reset Page && Clear data on searchQuery
  useEffect(() => {
    if (searchParam) {
      setFinal([]);
      dispatch(resetPage());
    }
  }, [searchParam, dispatch]);

  return (
    <div
      className={`w-full ${isSearch ? "pt-14 md:pt-14" : ""} transition-all`}
    >
      {!isLoading && data
      ?
      <>
      <SearchCategory
        data={uniqueItems}
        isFetching={isFetching}
        heading={`Results for: ${
          searchParam.get("q") ? searchParam.get("q") : ""
        }`}
        totalPages={data?.total_pages}
      />
      <Footer />
      </>
      :
      <ListingScreen />
      }
    </div>
  );
};
export default SearchResults;
