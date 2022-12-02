import { useRef, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/layoutSlice";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const Search = () => {
  const { isSearch } = useSelector((state) => state.layout);
  const searchBarRef = useRef();
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();
  const [lastPage, setLastPage] = useState("");

  // Get last path excluding search page
  useEffect(() => {
    if (location && !location.pathname.includes("/search")) {
      setLastPage(location.pathname);
      dispatch(setSearch(false));
    }
  }, [location, dispatch]);

  // Handle search bar open & close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target) &&
        !location.pathname.includes("/search") &&
        e.target.id !== "searchButton" &&
        e.target.id !== "searchIcon"
      ) {
        dispatch(setSearch(false));
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [dispatch, location]);

  // Handle Search Params
  const handleSearchParam = (e) => {
    const term = e.target.value;
    if (term) {
      navigate({
        pathname: "/search",
        search: `?q=${term}`,
      });
    }
    // Go back to previous page
    if (!term) {
      navigate(lastPage);
      setSearch(false);
    }
  };

  // Handle Search Clear
  const handleSearchClear = () => {
    navigate(lastPage);
    setSearch(false);
  };

  return (
    <>
      {isSearch && (
        <div
          ref={searchBarRef}
          className={`w-full flex justify-between items-center px-4 md:px-10 lg:px-12 xl:pl-[160px] py-2 md:py-4 bg-card fixed z-50 searchBar`}
        >
          {/* Search Field */}
          <div className="form-control w-full mx-auto">
            <div className="input-group">
              <input
                autoFocus
                type="text"
                placeholder="Search for a movie, show or person..."
                className="placeholder:text-gray-500 text-gray-200 input md:text-lg px-0 input-bordered bg-transparent border-none focus:outline-none w-full"
                ref={searchInputRef}
                value={searchParam.get("q") ? searchParam.get("q") : ""}
                onChange={handleSearchParam}
              />
            </div>
          </div>

          {/* Cancel Button */}
          {searchParam.get("q") && (
            <button onClick={handleSearchClear}>
              <FaTimes className="text-2xl mg:text-4xl" />
            </button>
          )}
        </div>
      )}
    </>
  );
};
export default Search;
