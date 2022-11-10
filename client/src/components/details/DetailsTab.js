import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingCard from "../../assets/LoadingCard.svg";
import EmptyCard from "../../assets/EmptyCard.svg";
import LazyImage from "../../loaders/LazyImage";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaImdb } from "@react-icons/all-files/fa/FaImdb";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

import { useSelector } from "react-redux";
import DetailsVideos from "./DetailsVideos";
import DetailsPhotos from "./DetailsPhotos";
import DetailsEpisodes from "./DetailsEpisodes";

const DetailsTab = ({ data, mediaType }) => {
  const poster = useSelector((state) => state.layout.poster);
  const [overview, setOverview] = useState(true);
  const [episodes, setEpisodes] = useState(false);
  const [videos, setVideos] = useState(false);
  const [photos, setPhotos] = useState(false);

  const handleOverview = () => {
    setOverview(true);
    setEpisodes(false);
    setVideos(false);
    setPhotos(false);
  };
  const handleEpisodes = () => {
    setEpisodes(true);
    setOverview(false);
    setVideos(false);
    setPhotos(false);
  };
  const handleVideos = () => {
    setVideos(true);
    setOverview(false);
    setEpisodes(false);
    setPhotos(false);
  };
  const handlePhotos = () => {
    setPhotos(true);
    setOverview(false);
    setEpisodes(false);
    setVideos(false);
  };

  return (
    <div className="w-full">
      {/* Tab Header */}
      <div
        className={`grid ${
          mediaType === "movie" ? "grid-cols-3" : "grid-cols-4"
        } justify-center mb-10 xl:mb-16 bg-card`}
      >
        <button
          onClick={handleOverview}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed py-5 md:py-5 ${
            overview ? "tab-active" : ""
          }`}
        >
          OVERVIEW
        </button>
        {mediaType !== "movie" && (
          <button
            onClick={handleEpisodes}
            className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed py-5 md:py-5 ${
              episodes ? "tab-active" : ""
            }`}
          >
            EPISODES
          </button>
        )}
        <button
          onClick={handleVideos}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed py-5 md:py-5 ${
            videos ? "tab-active" : ""
          }`}
        >
          VIDEOS
        </button>
        <button
          onClick={handlePhotos}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed py-5 md:py-5 ${
            photos ? "tab-active" : ""
          }`}
        >
          PHOTOS
        </button>
      </div>

      {/* Screen Wrapper */}
      <div className="px-4 md:px-10 lg:px-12">
        {/* Overview Screen */}
        <div
          className={`flex gap-4 md:gap-10 lg:gap-12 ${
            overview ? "" : "hidden"
          }`}
        >
          <div className="w-full max-w-[20vw] h-fit aspect-[0.67/1] hidden lg:block bg-nav">
            <LazyImage
              src={data && data.poster_path ? poster + data.poster_path : EmptyCard}
              placeholder={LoadingCard}  
            />
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium mb-4 md:mb-5">Summary</h2>
            <p className="mb-8 md:mb-10">{data?.overview}</p>
            <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 2xl:grid-cols-1 mb-10">

              {data && data.release_date &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Released</p>
                <span className="">
                  {new Date(data.release_date).toLocaleDateString("en-us", {
                    day: "numeric",
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
              }

              {data && data.first_air_date &&
              <div className="grid grid-cols-2">
                <p className="font-medium">First Aired</p>
                <span>
                  {new Date(data.first_air_date).toLocaleDateString("en-US", {
                    day: "numeric",
                    year: "numeric",
                    month: "long"
                  })}
                </span>
              </div>
              }

              {data && data.last_air_date &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Last Aired</p>
                <span>
                  {new Date(data.last_air_date).toLocaleDateString("en-US", {
                    day: "numeric",
                    year: "numeric",
                    month: "long"
                  })}
                </span>
              </div>
              }

              {data && data.runtime &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Runtime</p>
                <span>
                  {Math.floor(data.runtime / 60)}h {data.runtime % 60}min
                </span>
              </div>
              }

              {data && data.casts &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Director</p>
                <span>
                  {data.casts.crew.filter((i) => i.job === "Director").map(d => (
                    <Link className="bg-card hover:bg-nav btn btn-xs mr-1 my-1 md:my-0" to={`/person/${d.id}`} key={d.id}>{d.name}</Link>
                  ))}
                </span>
              </div>
              }

              {data && data.created_by &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Created by</p>
                <span>
                  {data.created_by.map(d => (
                    <Link className="bg-card hover:bg-nav btn btn-xs mr-1 my-1 md:my-0" to={`/person/${d.id}`} key={d.id}>{d.name}</Link>
                  ))}
                </span>
              </div>
              }

              {data && data.budget &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Budget</p>
                <span>${data.budget.toLocaleString()}</span>
              </div>
              }

              {data && data.revenue &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Revenue</p>
                <span>${data.revenue.toLocaleString()}</span>
              </div>
              }

              <div className="grid grid-cols-2">
                <p className="font-medium">Genre</p>
                <span>
                  {data?.genres.map((d) => (
                    <Link
                      className="bg-card hover:bg-nav btn btn-xs mr-1 my-1 md:my-0"
                      to={
                        mediaType === "movie"
                          ? `/movies/genre/${d.id}`
                          : `/shows/genre/${d.id}`
                      }
                      key={d.id}
                    >
                      {d.name}
                    </Link>
                  ))}
                </span>
              </div>

              {data && data.number_of_seasons &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Seasons</p>
                <span>{data.number_of_seasons}</span>
              </div>
              }

              {data && data.number_of_episodes &&
              <div className="grid grid-cols-2">
                <p className="font-medium">Episodes</p>
                <span>{data.number_of_episodes}</span>
              </div>
              }

              <div className="grid grid-cols-2">
                <p className="font-medium">Status</p>
                <span>{data?.status}</span>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-medium">Language</p>
                <span>{data?.spoken_languages.map(d => d.name).join(", ")}</span>
              </div>

              <div className="grid grid-cols-2">
                <p className="font-medium">Production</p>
                <span>
                  {data?.production_companies.map((d) => d.name).join(", ")}
                </span>
              </div>

              {data && data.networks &&
              <div className="grid grid-cols-2">
              <p className="font-medium">Network</p>
              <span>
                {data?.networks.map((d) => d.name).join(", ")}
              </span>
              </div>
              }

            </div>
            <div className="flex gap-5">
              {data?.external_ids.instagram_id &&
              <a href={`https://instagram.com/${data?.external_ids.instagram_id}`} target="_blank" rel="noreferrer">
              <FaInstagram className="text-xl lg:2xl hover:text-white" />
              </a>
              }
              {data?.external_ids.twitter_id && 
              <a href={`https://twitter.com/${data?.external_ids.twitter_id}`} target="_blank" rel="noreferrer">
              <FaTwitter className="text-xl lg:2xl hover:text-white" />
              </a>
              }
              {data?.external_ids.facebook_id && 
              <a href={`https://facebook.com/${data?.external_ids.facebook_id}`} target="_blank" rel="noreferrer">
              <FaFacebookF className="text-xl lg:2xl hover:text-white" />
              </a>
              }
              {data?.external_ids.imdb_id && 
              <a href={`https://imdb.com/title/${data?.external_ids.imdb_id}`} target="_blank" rel="noreferrer">
              <FaImdb className="text-xl lg:2xl hover:text-white" />
              </a>
              }
              {data?.homepage && 
              <a href={data.homepage} target="_blank" rel="noreferrer">
              <FaGlobe className="text-xl lg:2xl hover:text-white" />
              </a>
              }            

            </div>
          </div>
        </div>

        {/* Episodes Screen */}
        {data && data.seasons &&
        <div className={`${episodes ? "" : "hidden"}`}>
              <DetailsEpisodes seasons={data} />
        </div>
        }

        {/* Videos Screen */}
        <div className={`${videos ? "" : "hidden"}`}>
            <DetailsVideos data={data?.videos.results}/>
        </div>

        {/* Photos Screen */}
        <div className={`${photos ? "" : "hidden"}`}>
          <DetailsPhotos data={data?.images}/>
        </div>
      </div>
    </div>
  );
};
export default DetailsTab;
