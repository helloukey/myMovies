const Carousel = () => {
  return (
    <div className="w-full p-4 md:p-10 lg:p-12">
      <div className="mt-6 h-6 w-1/4 bg-tab-active animate-pulse mb-2 sm:mb-3 md:mb-4"></div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7 gap-3 pt-2">
        <div className="w-full aspect-[0.67/1] h-[20vh] sm:h-[30vh] bg-nav animate-pulse"></div>
        <div className="w-full aspect-[0.67/1] h-[20vh] sm:h-[30vh] bg-nav animate-pulse"></div>
        <div className="w-full aspect-[0.67/1] h-[20vh] sm:h-[30vh] bg-nav animate-pulse"></div>
        <div className="hidden sm:block w-full aspect-[0.67/1] h-[20vh] sm:h-[30vh] bg-nav animate-pulse"></div>
        <div className="hidden md:block w-full aspect-[0.67/1] h-[20vh] sm:h-[30vh] bg-nav animate-pulse"></div>
        <div className="hidden lg:block w-full aspect-[0.67/1] h-[20vh] sm:h-[30vh] bg-nav animate-pulse"></div>
        <div className="hidden 2xl:block w-full aspect-[0.67/1] h-[20vh] sm:h-[30vh] bg-nav animate-pulse"></div>
      </div>
    </div>
  );
};
export default Carousel;
