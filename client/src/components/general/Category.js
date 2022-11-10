import CardListing from "./CardListing";

const Category = ({ data, isFetching, heading, totalPages, mediaType }) => {
  return (
    // Wrapper
    <div className="min-h-screen w-full p-4 md:p-10 lg:p-12">
      {/* Heading */}
      <div className="font-medium mb-3 md:mb-6 mt-2 xl:mt-0">
        <h2 className="text-lg sm:text-2xl text-white">{heading}</h2>
      </div>
      {/* Container */}
      <CardListing data={data} isFetching={isFetching} pages={totalPages} mediaType={mediaType} />
    </div>
  );
};
export default Category;
