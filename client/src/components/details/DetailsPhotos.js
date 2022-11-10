import LoadingCard from "../../assets/LoadingCard.svg";
import EmptyCard from "../../assets/EmptyCard.svg";
import LoadingHero from "../../assets/LoadingHero.svg";
import EmptyHero from "../../assets/EmptyHero.svg";
import LazyImage from "../../loaders/LazyImage";
import { useSelector } from "react-redux";
import { useState } from "react";

import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const DetailsPhotos = ({ data }) => {
  const { backdrop, poster } = useSelector((state) => state.layout);
  const [slideNumber, setSlideNumber] = useState(0);
  const [mediaType, setMediaType] = useState("");
  const [touchPosition, setTouchPosition] = useState(null);

  const handleLeft = () => {
    slideNumber === 0
      ? setSlideNumber(
          mediaType === "backdrops"
            ? data.backdrops.length - 1
            : data.posters.length - 1
        )
      : setSlideNumber(slideNumber - 1);
  };
  const handleRight = () => {
    slideNumber + 1 ===
    (mediaType === "backdrops" ? data.backdrops.length : data.posters.length)
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  const handleModal = (index, type) => {
    if (type === "backdrops") setMediaType("backdrops");
    if (type === "posters") setMediaType("posters");
    setSlideNumber(index);
  };

  const handleTouchStart = (e) => {
    const touchPosition = e.touches[0].clientX;
    setTouchPosition(touchPosition);
  }

  const handleTouchMove = (e) => {
    if(touchPosition === null) return;

    const touchMove = e.touches[0].clientX;
    const difference = touchPosition - touchMove;

    if(difference > 5) {
      handleRight();
    }

    if(difference < -5) {
      handleLeft();
    }

    setTouchPosition(null);
  }

  return (
    <>
      {data && (
        <div className="w-full">
          {/* Modal */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label
            htmlFor="my-modal-4"
            className="modal cursor-pointer bg-[rgba(0,0,0,0.5)] backdrop-blur p-4 md:p-10 lg:p-12"
          >
            {/* Actions */}
            <label
              className="absolute top-0 right-0 lg:top-1 lg:right-1 btn btn-ghost btn-circle z-50"
              htmlFor="my-modal-4"
            >
              <FaTimes className="text-white text-2xl mg:text-4xl cursor-pointer" />
            </label>
            <button
              onClick={handleLeft}
              className="absolute left-0 lg:left-1 btn btn-ghost btn-circle z-50"
            >
              <FaChevronLeft className="text-white text-2xl mg:text-4xl cursor-pointer" />
            </button>
            <button
              onClick={handleRight}
              className="absolute right-0 lg:right-1 btn btn-ghost btn-circle z-50"
            >
              <FaChevronRight className="text-white text-2xl mg:text-4xl cursor-pointer" />
            </button>

            <label
              className="w-full lg:w-4/5 h-4/5 relative flex justify-center items-center"
              htmlFor=""
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <div className="flex justify-center items-center w-fit h-fit relative">
                <img
                  src={
                    mediaType === "backdrops" && data.backdrops.length
                      ? backdrop + data.backdrops[slideNumber].file_path
                      : mediaType === "posters" && data.posters.length
                      ? poster + data.posters[slideNumber].file_path
                      : LoadingCard
                  }
                  alt=""
                />
              </div>
            </label>
          </label>

          {/* Backdrops */}
          <h2 className="text-xl lg:text-2xl font-medium mb-4 md:mb-5">
            Backdrops
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mb-8 md:mb-10 lg:mb-12">
            {data &&
              data.backdrops.map((item, index) => (
                <label
                  key={item.file_path}
                  htmlFor="my-modal-4"
                  className="w-auto h-auto rounded-md cursor-pointer transition-all hover:scale-105 ease-in"
                  onClick={() => handleModal(index, "backdrops")}
                >
                <LazyImage
                  src={item.file_path ? backdrop + item.file_path : EmptyHero}
                  placeholder={LoadingHero}
                  type="backdrop"
                />
                </label>
              ))}
          </div>

          {/* Posters */}
          <h2 className="text-xl lg:text-2xl font-medium mb-4 md:mb-5">
            Posters
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
            {data &&
              data.posters.map((item, index) => (
                <label
                  key={item.file_path}
                  htmlFor="my-modal-4"
                  className="w-auto h-auto rounded-md cursor-pointer transition-all hover:scale-105 ease-in"
                  onClick={() => handleModal(index, "posters")}
                >
                <LazyImage
                  src={item.file_path ? poster + item.file_path : EmptyCard}
                  placeholder={LoadingCard}
                  type="card"
                />
                </label>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
export default DetailsPhotos;
