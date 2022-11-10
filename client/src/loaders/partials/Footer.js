const Footer = () => {
  return (
    <div className="w-full p-4 md:p-10 lg:p-12">
      <div className="w-full flex flex-col gap-10 sm:gap-5 sm:flex-row items-center justify-between mb-16 mt-16 xl:mb-0">
        {/* Copyright and Logo */}
        <div className="w-full flex justify-evenly items-center sm:flex-col sm:items-start sm:justify-center gap-5">
          <div className="h-10 w-1/4 bg-tab-active animate-pulse"></div>
          <div className="flex flex-col gap-2 h-auto w-full">
            <div className="h-3 w-full md:w-1/2 bg-tab-active animate-pulse"></div>
            <div className="h-3 w-full md:w-1/3 bg-tab-active animate-pulse"></div>
            <div className="h-3 w-full md:w-1/4 bg-tab-active animate-pulse"></div>
          </div>
        </div>
        {/* Social Logos */}
        <div className="w-full flex items-center justify-center sm:justify-end gap-4 pb-10 sm:p-0">
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
