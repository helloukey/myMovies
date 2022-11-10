import { useRef, useState } from "react";
import ReactPlayer from 'react-player/youtube'
import { FaRegPlayCircle } from "@react-icons/all-files/fa/FaRegPlayCircle";

const DetailsVideos = ({data}) => {
  const [videoFilter, setVideoFilter] = useState("");
  const videoRef = useRef();

  const handleFilter = (e) => {
    setVideoFilter(e.target.value)
  }
  return (
    <div className="w-full">

      {/* Filter */}
      <select className="select focus:outline-none bg-nav mb-8" onChange={handleFilter}>
        <option defaultValue className="focus:outline-none" value="">All</option>
        <option className="focus:outline-none" value="Behind the Scenes">Behind the Scenes</option>
        <option className="focus:outline-none" value="Teaser">Teaser</option>
        <option className="focus:outline-none" value="Bloopers">Bloopers</option>
        <option className="focus:outline-none" value="Clip">Clip</option>
        <option className="focus:outline-none" value="Featurette">Featurette</option>
        <option className="focus:outline-none" value="Trailer">Trailer</option>
      </select>

        {/* Container */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {data &&
          data.filter(item => item.type.includes(videoFilter)).map((item) => (
            <div
              key={item.id}
              className="w-full h-auto carousel-item flex flex-col rounded-md bg-nav cursor-pointer transition-all hover:scale-105 ease-in"
            >
              <div className="aspect-video w-full h-full">
               <ReactPlayer
                ref={videoRef}
                url={`https://www.youtube.com/watch?v=${item.key}`}
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                playIcon={<FaRegPlayCircle className="fill-white text-5xl shadow-lg" />}
                light={true}
                onEnded={() => videoRef.current.showPreview()}
                />
              </div>
                <div className="flex flex-col gap-1 p-2">
                <h2 className="text-base font-medium truncate">{item.name}</h2>
                <h3 className="text-xs">{item.type}</h3>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
};
export default DetailsVideos;
