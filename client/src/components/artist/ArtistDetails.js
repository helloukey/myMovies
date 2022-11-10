import { useState } from "react";
import ArtistCredits from "./ArtistCredits";
import ArtistPhotos from "./ArtistPhotos";
import ArtistSummary from "./ArtistSummary";
import CardListing from "../general/CardListing";

const ArtistDetails = ({data}) => {
  const [knownFor, setKnownFor] = useState(true);
  const [credits, setCredits] = useState(false);
  const [photos, setPhotos] = useState(false);

  const handleKnownFor = () => {
    setKnownFor(true);
    setCredits(false);
    setPhotos(false);
  };
  const handleCredits = () => {
    setCredits(true);
    setKnownFor(false);
    setPhotos(false);
  };
  const handlePhotos = () => {
    setPhotos(true);
    setKnownFor(false);
    setCredits(false);
  };
  return (
    <div className="w-full">
      <div className="p-4 md:p-10 lg:p-12">
      <ArtistSummary data={data} />
      </div>

      {/* Tab Header */}
      <div className="w-full grid grid-cols-3 justify-center mb-10 xl:mb-16 bg-card">
        <button
          onClick={handleKnownFor}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed py-5 md:py-5 ${
            knownFor ? "tab-active" : ""
          }`}
        >
          KNOWN FOR
        </button>
        <button
          onClick={handleCredits}
          className={`h-auto text-xs sm:text-base xl:text-lg xl:font-medium tab tab-lg tab-boxed py-5 md:py-5 ${
            credits ? "tab-active" : ""
          }`}
        >
          CREDITS
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

      <div className="px-4 md:px-10 lg:px-12">
      {/* Known For */}
      <div className={`${knownFor ? "" : "hidden"}`}>
        <CardListing data={data?.combined_credits.cast.concat(data?.combined_credits.crew)} />
      </div>

      {/* Credits */}
      <div className={`${credits ? "" : "hidden"}`}>
        <ArtistCredits data={data?.combined_credits}/>
      </div>

      {/* Photos */}
      <div className={`${photos ? "" : "hidden"}`}>
        <ArtistPhotos data={data?.images.profiles} />
      </div>
      </div>

    </div>
  );
};
export default ArtistDetails;
