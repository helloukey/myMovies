import { useSelector } from "react-redux";
import LoadingCard from "../../assets/LoadingCard.svg";
import EmptyCard from "../../assets/EmptyCard.svg";
import LazyImage from "../../loaders/LazyImage";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaImdb } from "@react-icons/all-files/fa/FaImdb";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

const ArtistSummary = ({data}) => {
  const poster = useSelector(state => state.layout.poster);
  return (
    <div className="w-full mb-8 md:mb-10">
      {/* Mobile & Tablet View */}
      <div className="lg:hidden">
          <h2 className="text-2xl font-medium mb-2">{data?.name}</h2>
          <div className="aspect-[0.67/1] h-auto w-[40vw] float-left mr-4 md:mr-5 sm:mb-2">
          <LazyImage
              src={data && data.profile_path ? poster + data.profile_path : EmptyCard}
              placeholder={LoadingCard}
              type="card"
          />
          </div>
      </div>

      {/* Desktop View */}
      <div className="w-full lg:flex gap-4 md:gap-10 lg:gap-12">

        <div className="hidden aspect-[0.67/1] h-fit w-[40vw] xl:w-[30vw] 2xl:w-[20vw] lg:block">
        <LazyImage
            src={data && data.profile_path ? poster + data.profile_path : EmptyCard}
            placeholder={LoadingCard}
            type="card"
        />
        </div>

        <div className="w-full">
        <h2 className="hidden lg:block text-xl font-medium mb-4 md:mb-5">{data?.name}</h2>
        <p className="w-full text-justify lg:text-left mb-8 md:mb-10">
         {data?.biography}
        </p>

        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 2xl:grid-cols-1 mb-10">
          <div className="grid grid-cols-2">
            <p className="font-medium">Known for</p>
            <span className="">{data?.known_for_department}</span>
          </div>
          {data && data.birthday &&
          <div className="grid grid-cols-2">
            <p className="font-medium">Born</p>
            <span>{new Date(data.birthday).toLocaleDateString("en-us", {
                    day: "numeric",
                    year: "numeric",
                    month: "long",
                  })} (age {new Date().getFullYear() - new Date(data.birthday).getFullYear()})</span>
          </div>
          }
          <div className="grid grid-cols-2">
            <p className="font-medium">Place of Birth</p>
            <span>{data?.place_of_birth}</span>
          </div>
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
    </div>
  );
};
export default ArtistSummary;
