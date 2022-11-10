const Tabs = () => {
  return (
    <div className="w-full flex justify-evenly items-center gap-5 bg-card py-4 px-4 md:px-10 lg:px-12">
      <div className="w-1/6 h-10 bg-tabs animate-pulse"></div>
      <div className="w-1/6 h-10 bg-tabs animate-pulse"></div>
      <div className="w-1/6 h-10 bg-tabs animate-pulse"></div>
    </div>
  );
};
export default Tabs;
