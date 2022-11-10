import { useState, useEffect } from "react";
import LazyImage from "../../loaders/LazyImage";
import EmptyHero from "../../assets/EmptyHero.svg";
import LoadingHero from "../../assets/LoadingHero.svg";
import { useSelector } from "react-redux";
import { useGetShowEpisodesQuery } from "../../redux/tmdbApi";

const DetailsEpisodes = ({seasons}) => {
  const [seasonFilter, setSeasonFilter] = useState(1);
  const { data } = useGetShowEpisodesQuery({show_id: seasons?.id, seasonNumber: seasonFilter});
  const backdrop = useSelector(state => state.layout.backdrop);

  const handleFilter = (e) => {
    setSeasonFilter(e.target.value)
  }

  useEffect(() => {
    if(seasons && seasons.seasons[0].season_number === 0) {
      setSeasonFilter(0)
    }
  },[seasons])

  return (
    <div className="w-full">

      {/* Heading */}
      <h2 className="text-xl lg:text-2xl font-medium mb-4 md:mb-5">Episodes</h2>

      {seasons && seasons.seasons &&
        <select className="select focus:outline-none bg-nav mb-8" onChange={handleFilter}>
          {seasons.seasons.map((option, index) => (
            <option key={option.id} className="focus:outline-none" value={option.season_number}>{option.name}</option>
          ))}
        </select>
      }

        {/* Container */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          
        {data && data.episodes &&
          data.episodes.map((item) => (
            <div
              key={item.id}
              className="w-full aspect-video h-auto carousel-item flex flex-col rounded-md bg-nav cursor-pointer transition-all hover:scale-105 ease-in"
            >
              <LazyImage
                src={item.still_path ? backdrop + item.still_path : EmptyHero}
                placeholder={LoadingHero}
                type="card"
              />
                <div className="grid grid-cols-1 gap-1 p-2">
                <h2 className="text-sm font-medium text-gray-500">E{item.episode_number}</h2>
                <h3 className="text-base font-medium">{item.name}</h3>
                <h4 className="text-xs">{item.overview}</h4>
              </div>
            </div>
          ))}

      </div>

    </div>
  );
};
export default DetailsEpisodes;
