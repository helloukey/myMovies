const Details = () => {
  return (
    <div className="w-full flex justify-between gap-10 p-4 md:p-10 lg:p-12 mt-5">
      {/* Image */}
      <div className="hidden lg:block aspect-[0.67/1] h-auto w-full max-w-[20vw] bg-nav animate-pulse"></div>
      {/* Texts */}
      <div className="w-full flex flex-col gap-2">
        <div className="h-8 w-1/5 bg-tab-active animate-pulse mb-3"></div>
        <div className="h-3 w-full bg-tab-active animate-pulse mt-1"></div>
        <div className="h-3 w-full bg-tab-active animate-pulse mt-1"></div>
        <div className="h-3 w-full bg-tab-active animate-pulse mt-1"></div>

        <div className="w-full flex flex-col gap-2 mt-8">
          <div className="h-3 w-full bg-tab-active animate-pulse mt-1"></div>
          <div className="h-3 w-full bg-tab-active animate-pulse mt-1"></div>
          <div className="h-3 w-full bg-tab-active animate-pulse mt-1"></div>
        </div>

        <div className="flex gap-3 mt-12">
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
          <div className="h-6 w-1/12 rounded-full bg-tab-active animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
export default Details;
