import { Link } from "react-router-dom";

import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";

import { useEffect, useRef, useState } from "react";
import LoadingCard from "../../assets/LoadingCard.svg";
import EmptyCard from "../../assets/EmptyCard.svg";
import LazyImage from "../../loaders/LazyImage";
import ExploreMore from "../../assets/ExploreMore.svg";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "../general/CardActions";
import { setCardAction } from "../../redux/layoutSlice";
import { setUserInfo } from "../../redux/userSlice";
import CardRating from "../rating/CardRating";

const Carousel = ({ data, heading, explore, mediaType }) => {
  const [dynamicWidth, setDynamicWidth] = useState(null);
  const itemsContainerRef = useRef();
  const carouselContainerRef = useRef();
  const rightButtonRef = useRef();
  const leftButtonRef = useRef();
  const poster = useSelector((state) => state.layout.poster);
  const cardAction = useSelector((state) => state.layout.cardAction);
  const dispatch = useDispatch();

  useEffect(() => {
    // setDynamicWidth on first mount
    setDynamicWidth(itemsContainerRef.current.offsetWidth);

    const setSizer = () => {
      setDynamicWidth(itemsContainerRef.current.offsetWidth);
    };
    window.addEventListener("resize", setSizer);

    // cleanup function
    return () => window.removeEventListener("resize", setSizer);
  }, [dynamicWidth]);

  // handle scroll
  const handleSlider = (direction) => {
    if (direction === "left") {
      itemsContainerRef.current.scrollBy(-dynamicWidth - 15, 0);
    }
    if (direction === "right") {
      itemsContainerRef.current.scrollBy(dynamicWidth - 15, 0);
    }
  };

  const handleScroll = (e) => {
    // last child visibility check
    if (
      carouselContainerRef.current.lastElementChild.getBoundingClientRect()
        .right < window.innerWidth
    ) {
      rightButtonRef.current.style.display = "none";
    }
    if (
      carouselContainerRef.current.lastElementChild.getBoundingClientRect()
        .right > window.innerWidth
    ) {
      rightButtonRef.current.style.display = "block";
    }

    // first child visibility check
    if (
      carouselContainerRef.current.firstElementChild.getBoundingClientRect()
        .left > 0
    ) {
      leftButtonRef.current.style.display = "none";
    }
    if (
      carouselContainerRef.current.firstElementChild.getBoundingClientRect()
        .left < 0
    ) {
      leftButtonRef.current.style.display = "block";
    }
  };

  return (
    <div className="w-full pl-4 md:pl-10 lg:pl-12">
      {/* Card Actions Body */}
      {cardAction && <CardActions mediaType={mediaType} />}

      {/* Heading */}
      <div className="flex items-center font-medium mt-10 mb-2 sm:mb-3 md:mb-4 gap-4">
        <h2 className="text-lg sm:text-2xl text-white">{heading}</h2>
        {explore && (
          <Link
            to={explore}
            className="btn btn-xs sm:btn-sm bg-card hover:bg-nav"
          >
            Explore All
          </Link>
        )}
      </div>

      {/* Carousel Wrapper */}
      <div className="relative h-fit w-full">
        {/* Carousel */}
        <div
          className="carousel w-full lg:py-4 py-2 pr-2 space-x-4 rounded-box"
          ref={itemsContainerRef}
          onScroll={dynamicWidth > 768 ? handleScroll : () => null}
          onLoad={dynamicWidth > 768 ? handleScroll : () => null}
        >
          {/* Left Cursor */}
          {dynamicWidth > 768 && (
            <div
              ref={leftButtonRef}
              className="hidden absolute top-[35%] -left-6 carousel-item z-10"
            >
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => handleSlider("left")}
              >
                <FaChevronLeft className="text-white text-4xl cursor-pointer" />
              </button>
            </div>
          )}

          {/* Items Container */}
          <div
            className="flex gap-3 transition-all ease-in"
            ref={carouselContainerRef}
          >
            {/* Item */}
            {data &&
              data.results.map((item) => (
                <div
                  key={item.id}
                  className={`last:mr-4 last:md:mr-10 last:lg:mr-12 aspect-[0.67/1] w-[26vw] xs:w-[28vw] sm:w-[22vw] md:w-[17vw] lg:w-[14.5vw] xl:w-[13.5vw] 2xl:w-[12vw] h-auto carousel-item flex flex-col rounded-md bg-nav cursor-pointer transition-all hover:scale-105 ease-in`}
                >
                  <Link
                    aria-label="card"
                    to={
                      item.media_type === "movie" || mediaType === "movie"
                        ? `/movies/${item.id}`
                        : item.media_type === "tv" || mediaType === "show"
                        ? `/shows/${item.id}`
                        : item.media_type === "person"
                        ? `/person/${item.id}`
                        : ""
                    }
                  >
                    <LazyImage
                      src={
                        item.poster_path ? poster + item.poster_path : EmptyCard
                      }
                      placeholder={LoadingCard}
                      type="card"
                    />
                  </Link>
                  <div className="flex flex-col gap-1 px-2 py-1 sm:py-2">
                    <Link
                      aria-label="card"
                      to={
                        item.media_type === "movie"
                          ? `/movies/${item.id}`
                          : item.media_type === "tv"
                          ? `/shows/${item.id}`
                          : item.media_type === "person"
                          ? `/person/${item.id}`
                          : ""
                      }
                    >
                      <h2 className="hidden sm:block sm:text-sm sm:font-medium truncate">
                        {item.original_title || item.original_name}
                      </h2>
                    </Link>
                    <div className="hidden sm:flex items-center gap-2">
                      {/* Card Rating Component */}
                      <CardRating item={item} />
                      <span className="hidden sm:inline-block">
                        {item.vote_average.toFixed(1)}
                      </span>
                    </div>

                    {/* Card Actions */}
                    <div
                      className="w-full flex justify-end items-center"
                      onClick={() => {
                        dispatch(setCardAction(true));
                        dispatch(setUserInfo(item));
                      }}
                    >
                      <FaEllipsisH className="text-lg" />
                    </div>
                    
                  </div>
                </div>
              ))}

            {/* Explore More */}
            {explore && (
              <Link
                aria-label="card"
                className={`last:mr-4 last:md:mr-10 last:lg:mr-12 aspect-[0.67/1] w-[26vw] xs:w-[28vw] sm:w-[22vw] md:w-[17vw] lg:w-[14.5vw] xl:w-[13.5vw] 2xl:w-[12vw] h-auto flex flex-col rounded-md bg-nav cursor-pointer transition-all hover:scale-105 ease-in`}
                to={explore}
              >
                <img
                  src={ExploreMore}
                  alt=""
                  className="rounded-t-md h-full w-full object-cover"
                />
              </Link>
            )}
          </div>
        </div>

        {/* Right Cursor */}
        {dynamicWidth > 768 && (
          <div
            ref={rightButtonRef}
            className="hidden md:block absolute top-[35%] right-0 carousel-item z-10"
          >
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => handleSlider("right")}
            >
              <FaChevronRight className="text-white text-4xl cursor-pointer" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
