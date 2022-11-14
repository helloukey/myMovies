import { useEffect, useState } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaRegPlayCircle } from "@react-icons/all-files/fa/FaRegPlayCircle";
import { useSelector } from "react-redux";
import LoadingHero from "../../assets/LoadingHero.svg";
import EmptyHero from "../../assets/EmptyHero.svg";
import { Link } from "react-router-dom";
import LazyImage from "../../loaders/LazyImage";
import ReactPlayer from "react-player/youtube";
import HeroRating from "../rating/HeroRating";

const Hero = ({ data, error }) => {
  const backdrop = useSelector((state) => state.layout.backdrop);
  const [certification, setCertification] = useState("");
  const [youtubeVideo, setYoutubeVideo] = useState(null);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    if (data && data.release_dates) {
      const releases = data.release_dates.results.find(
        (release) => release.iso_3166_1 === "US"
      );
      if (!releases) return setCertification("");
      const item = releases.release_dates.find(
        (date) => date.certification !== ""
      );
      if (item) return setCertification(item.certification);
      // shows
    } else if (data && data.content_ratings) {
      const releases = data.content_ratings.results.find(
        (release) => release.iso_3166_1 === "US"
      );
      if (!releases) return setCertification("");
      return setCertification(releases.rating);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.videos) {
      let videos = data.videos.results;
      if (!videos.length) return setYoutubeVideo(null);
      videos = videos.find((video) => video.type === "Trailer");
      if (videos)
        return setYoutubeVideo(`https://youtube.com/watch?v=${videos.key}`);
      if (!videos) return setYoutubeVideo(null);
    }
  }, [data]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    if (media.matches !== desktop) {
      setDesktop(media.matches);
    }
    const listener = () => setDesktop(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [desktop]);

  const handleTrailer = () => {
    setPlayTrailer(true);
  };

  return (
    // Container
    <>
      {data && (
        <div
          className="w-full relative flex flex-col items-center bg-nav overflow-hidden
      lg:flex-row-reverse"
        >
          {/* Hero Image */}
          <div className={`w-full aspect-video lg:w-3/4 ${playTrailer ? "mx-auto" : ""}`}>
            {!playTrailer && (
              <LazyImage
                src={
                  data && data.backdrop_path
                    ? backdrop + data.backdrop_path
                    : EmptyHero
                }
                placeholder={LoadingHero}
                type="hero"
              />
            )}

            {/* YouTube Player */}
            {playTrailer &&
            <div className={playTrailer ? "player-wrapper" : "player-wrapper-hidden"}>
              <ReactPlayer
                className="react-player"
                url={youtubeVideo}
                playing={playTrailer}
                controls={true}
                width="100%"
                height="100%"
                pip={true}
                onEnded={() => setPlayTrailer(false)}
              />

            {/* Close Video Button */}
            {youtubeVideo && playTrailer && (
              <button
                aria-label="Close"
                onClick={() => setPlayTrailer(false)}
                className="absolute bottom-1 left-2/4 -translate-x-2/4 z-50"
              >
                <FaTimes className="text-white text-4xl btn-ghost rounded-full p-1" />
              </button>
            )}
            </div>
            }

            {/* Mobile Play Button */}
            {youtubeVideo && !playTrailer && (
              <button
                aria-label="Play"
                onClick={handleTrailer}
                className="lg:hidden btn-ghost btn-active rounded-full absolute left-2/4 top-1/4 sm:top-1/3 -translate-x-2/4 -translate-y-1/4 sm:-translate-y-1/3"
              >
                <FaRegPlayCircle className="lg:hidden text-white text-5xl" />
              </button>
            )}

          </div>

          {/* Typography */}
          <div
            className={`relative font-medium w-full p-4 md:p-10 flex flex-col gap-2 md:gap-4 shadow-hero-top-small sm:shadow-hero-top
          lg:w-1/4 lg:h-full lg:p-0 lg:pl-12 lg:shadow-hero-right lg:absolute lg:left-0 lg:justify-center xl:gap-5 ${
            playTrailer ? "lg:hidden shadow-hero-top-super-small" : ""
          }`}
          >
            {/* Heading */}
            <h2 className="fadeHeroText text-white text-xl md:text-3xl 2xl:text-5xl lg:leading-tight 2xl:leading-tight lg:w-[225%] xl:w-[185%]">
              {data && data.mediaType ? (
                <Link
                  to={
                    data.mediaType === "movie"
                      ? `/movies/${data.id}`
                      : `/shows/${data.id}`
                  }
                >
                  {data?.original_title || data?.original_name}
                </Link>
              ) : (
                data?.original_title || data?.original_name
              )}
            </h2>

            {/* Rating & Certification */}
            <div className="fadeHeroText flex flex-col md:flex-row gap-2 md:gap-5 lg:w-[225%] xl:w-[185%]">
              {/* Rating */}
              <div className="flex items-center gap-2">
                {/* Hero Rating Component */}
                <HeroRating data={data} />
                <span className="2xl:text-lg">{data?.vote_count} Reviews</span>
              </div>
              {/* Season & Certification */}
              <div className="flex items-center gap-2 2xl:text-lg">
                {data && data.number_of_seasons && (
                  <span>Season {data.number_of_seasons}</span>
                )}
                {data && data.last_air_date && (
                  <span>{data.last_air_date.substring(0, 4)}</span>
                )}
                {data && data.release_date && (
                  <span>{data.release_date.substring(0, 4)}</span>
                )}
                {data && data.runtime ? (
                  <span>
                    {Math.floor(data.runtime / 60)}h {data.runtime % 60}min
                  </span>
                ) : null}
                {data && certification && <span>{certification}</span>}
              </div>
            </div>

            {/* Description */}
            <h3 className="fadeHeroText text-white font-normal hidden md:block lg:w-[225%] xl:text-lg xl:w-[185%]">
              {data && data?.overview.length > 300
                ? `${data.overview.substring(0, 300)}...`
                : data?.overview}
            </h3>

            {/* Watch Trailer */}
            {youtubeVideo && (
              <button
                aria-label="Play"
                onClick={handleTrailer}
                className="fadeHeroText btn gap-2 text-white hidden lg:flex lg:w-fit bg-card hover:bg-background"
              >
                Watch Trailer
                <FaRegPlayCircle />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Hero;
