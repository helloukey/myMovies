const UserDetails = () => {
  return (
    <div className="w-full p-4 md:p-10 lg:p-12">
      {/* Mobile & Tablet Heading */}
      <div className="lg:hidden h-6 lg:h-8 w-2/4 md:w-1/4 mb-3 lg:mb-5 bg-tab-active animate-pulse"></div>

      <div className="w-full lg:flex flex-nowrap gap-4 md:gap-10">
        {/* Image */}
        {/* w-[45%] lg:w-full lg:max-h-[556px] lg:max-w-[370px] */}
        <div className="mr-2 mb-2 md:mr-4 float-left clear-both lg:float-none aspect-[0.67/1] h-auto w-[40vw] xl:w-[30vw] 2xl:w-[20vw] bg-nav animate-pulse"></div>
        {/* Texts */}
        <div className="w-full">
          {/* Desktop Heading */}
          <div className="hidden lg:block h-6 lg:h-8 w-2/4 md:w-1/4 mb-3 lg:mb-5 bg-tab-active animate-pulse"></div>
          <p className="blur-sm text-justify text-tab-active animate-pulse">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            ut, consequatur ipsam perspiciatis rerum molestiae incidunt
            repudiandae explicabo, culpa molestias, amet laboriosam nam
            temporibus. Similique odio perspiciatis quos eos pariatur?
          </p>
          <p className="blur-sm text-justify text-tab-active animate-pulse">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            ut, consequatur ipsam perspiciatis rerum molestiae incidunt
            repudiandae explicabo, culpa molestias, amet laboriosam nam
            temporibus. Similique odio perspiciatis quos eos pariatur?
          </p>
          <p className="blur-sm text-justify text-tab-active animate-pulse">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            ut, consequatur ipsam perspiciatis rerum molestiae incidunt
            repudiandae explicabo, culpa molestias, amet laboriosam nam
            temporibus. Similique odio perspiciatis quos eos pariatur?
          </p>

          <div className="grid grid-cols-2 mt-8">
            <p className="font-semibold blur-sm text-justify text-tab-active animate-pulse">
              Known For
            </p>
            <p className="blur-sm text-justify text-tab-active animate-pulse">
              Acting
            </p>
          </div>
          <div className="grid grid-cols-2 mt-2">
            <p className="font-semibold blur-sm text-justify text-tab-active animate-pulse">
              Born
            </p>
            <p className="blur-sm text-justify text-tab-active animate-pulse">
              July 13, 1999 (age 23)
            </p>
          </div>
          <div className="grid grid-cols-2 mt-2">
            <p className="font-semibold blur-sm text-justify text-tab-active animate-pulse">
              Place of Birth
            </p>
            <p className="blur-sm text-justify text-tab-active animate-pulse">
              India
            </p>
          </div>
          <div className="flex gap-5 mt-8">
            <p className="font-semibold text-3xl blur-sm text-justify text-tab-active animate-pulse">
              ⚫
            </p>
            <p className="font-semibold text-3xl blur-sm text-justify text-tab-active animate-pulse">
              ⚫
            </p>
            <p className="font-semibold text-3xl blur-sm text-justify text-tab-active animate-pulse">
              ⚫
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
