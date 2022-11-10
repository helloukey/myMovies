import { useState } from "react";
import LoadingCard from "../../assets/LoadingCard.svg";
import EmptyCard from "../../assets/EmptyCard.svg";
import { useSelector } from "react-redux";
import LazyImage from "../../loaders/LazyImage";

import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const ArtistPhotos = ({ data }) => {
  const poster = useSelector((state) => state.layout.poster);
  const [slideNumber, setSlideNumber] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleLeft = () => {
    slideNumber === 0
      ? setSlideNumber(data.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const handleRight = () => {
    slideNumber + 1 === data.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleTouchStart = (e) => {
    const touchPosition = e.touches[0].clientX;
    setTouchPosition(touchPosition);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;

    const touchMove = e.touches[0].clientX;
    const difference = touchPosition - touchMove;

    if (difference > 5) {
      handleRight();
    }

    if (difference < -5) {
      handleLeft();
    }

    setTouchPosition(null);
  };

  const handleModal = (index) => {
    setSlideNumber(index);
  };
  return (
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
              src={data ? poster + data[slideNumber].file_path : EmptyCard}
              alt=""
            />
          </div>
        </label>
      </label>

      {/* Posters */}
      <h2 className="text-xl lg:text-2xl font-medium mb-4 md:mb-5">Photos</h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {data &&
          data.map((item, index) => (
            <label
              key={item.file_path}
              htmlFor="my-modal-4"
              className="w-auto h-auto rounded-md cursor-pointer transition-all hover:scale-105 ease-in"
              onClick={() => handleModal(index)}
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
  );
};
export default ArtistPhotos;
