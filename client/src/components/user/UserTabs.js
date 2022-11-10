import { useState } from "react";
import { useGetCollectionQuery } from "../../redux/userApi";
import UserMovies from "./UserMovies";
import UserPerson from "./UserPerson";
import UserShows from "./UserShows";

const UserTabs = ({ token }) => {
  const [movies, setMovies] = useState(true);
  const [shows, setShows] = useState(false);
  const [person, setPerson] = useState(false);
  const { data } = useGetCollectionQuery(token);

  const handleMovies = () => {
    setMovies(true);
    setShows(false);
    setPerson(false);
  };
  const handleShows = () => {
    setShows(true);
    setMovies(false);
    setPerson(false);
  };
  const handlePerson = () => {
    setPerson(true);
    setMovies(false);
    setShows(false);
  };
  return (
    <div className="w-full pb-4 md:pb-10 lg:pb-12">
      {/* Tab Header */}
      <div className="grid grid-cols-3 justify-center mb-10 xl:mb-16 bg-card">
        <button
          onClick={handleMovies}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed py-5 md:py-5 ${
            movies ? "tab-active" : ""
          }`}
        >
          MOVIES
        </button>
        <button
          onClick={handleShows}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed md:py-5 ${
            shows ? "tab-active" : ""
          }`}
        >
          SHOWS
        </button>
        <button
          onClick={handlePerson}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed md:py-5 ${
            person ? "tab-active" : ""
          }`}
        >
          PERSON
        </button>
      </div>

      <div className="p-4 md:p-10 lg:p-12">
        {/* Known For */}
        <div className={`${movies ? "" : "hidden"}`}>
          <UserMovies
            data={data?.collection.filter((item) => item.mediaType === "movie")}
          />
        </div>

        {/* Credits */}
        <div className={`${shows ? "" : "hidden"}`}>
          <UserShows
            data={data?.collection.filter(
              (item) => item.mediaType === "show" || item.mediaType === "tv"
            )}
          />
        </div>

        {/* Photos */}
        <div className={`${person ? "" : "hidden"}`}>
          <UserPerson
            data={data?.collection.filter(
              (item) => item.mediaType === "person"
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default UserTabs;
