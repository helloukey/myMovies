import { useEffect, useRef } from "react";
import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";
import { Link, useLocation } from "react-router-dom";
import LoadingCard from "../../assets/LoadingCard.svg";
import EmptyCard from "../../assets/EmptyCard.svg";
import { setPage } from "../../redux/layoutSlice";
import { useDispatch, useSelector } from "react-redux";
import CardActions from "./CardActions";
import { setCardAction } from "../../redux/layoutSlice";
import { setUserInfo } from "../../redux/userSlice";
import LazyImage from "../../loaders/LazyImage";
import useUniqueData from "../../hooks/useUniqueData";
import CardRating from "../rating/CardRating";

const CardListing = ({data, isFetching, pages, mediaType}) => {
  const poster = useSelector(state => state.layout.poster);
  const page = useSelector(state => state.layout.page);
  const dispatch = useDispatch();
  const cardRef = useRef();
  const pathName = useLocation().pathname;
  const cardAction = useSelector((state) => state.layout.cardAction);
  const { uniqueItems } = useUniqueData(data)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isFetching && (page < pages)) {
        dispatch(setPage());
      }
      // unobserve on intersection
      if (entries[0].isIntersecting) observer.unobserve(entries[0].target)
    });
    
    // observe card
    if(cardRef.current) observer.observe(cardRef.current);

  }, [data, cardRef, isFetching, dispatch, pages, page, uniqueItems])

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3">

    {/* Card Actions Body */}
    {cardAction && <CardActions mediaType={mediaType} />}

      {uniqueItems &&
        uniqueItems.map((item) => (
          <div
            ref={cardRef}
            key={item.id}
            className="w-full aspect-[0.67/1] h-auto carousel-item flex flex-col rounded-md bg-nav cursor-pointer transition-all hover:scale-105 ease-in"
          >
            <Link
              aria-label="card"
              to={
                item.media_type === "movie" || pathName.includes("/movies/")
                  ? `/movies/${item.id}`
                  : item.media_type === "tv" || pathName.includes("/shows/")
                  ? `/shows/${item.id}`
                  : item.media_type === "person" ||
                    pathName.includes("/person/")
                  ? `/person/${item.id}`
                  : ""
              }
            >
              <LazyImage
                src={
                  item.poster_path
                    ? poster + item.poster_path
                    : item.profile_path
                    ? poster + item.profile_path
                    : EmptyCard
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
                  {item.original_title || item.original_name || item.name}
                </h2>
              </Link>
              {item.known_for_department && (
                  <h3 className="hidden sm:block sm:text-sm sm:font-light truncate">
                    {item.known_for_department}
                  </h3>
                )}
              <div className="hidden sm:flex items-center gap-2">
                {/* Card Rating Component */}
                {item.hasOwnProperty("vote_average") && <CardRating item={item} />}
                {item.vote_average > 0 ?
                <span className="hidden sm:inline-block">
                  {item.vote_average?.toFixed(1)}
                </span>
                :
                item.vote_average === 0 ?
                <span className="hidden sm:inline-block">
                  N.A
                </span>
                :
                null
                }
              </div>

            {/* Card Actions */}
            <div className="w-full flex justify-end items-center"
              onClick={() => {
                dispatch(setCardAction(true))
                dispatch(setUserInfo(item))
              } }>
            <FaEllipsisH className="text-lg" />
            </div>

            </div>
          </div>
        ))}
    </div>
  );
}
export default CardListing;