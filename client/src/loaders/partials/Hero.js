const Hero = () => {
  return (
    <div className="w-full h-[40vh] sm:h-[60vh] lg:h-[77.5vh] bg-nav flex flex-col justify-end lg:justify-center gap-3 p-4 md:p-10 lg:p-12">
      {/* Texts  */}
      <div className="h-8 lg:h-16 bg-tab-active w-3/4 lg:w-1/4 animate-pulse"></div>
      <div className="h-6 lg:h-12 bg-tab-active w-2/4 lg:w-2/4 animate-pulse"></div>
      <div className="h-6 lg:h-20 bg-tab-active w-3/5 lg:w-2/5 animate-pulse"></div>
      <div className="hidden lg:block h-6 lg:h-12 bg-tab-active w-1/6 animate-pulse"></div>
    </div>
  );
};
export default Hero;
