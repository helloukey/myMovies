import LazyImage from "../../loaders/LazyImage";
import LoadingHero from "../../assets/LoadingHero.svg";
import UserTabs from "./UserTabs";
import { removeUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import userHero from "../../assets/userHero.svg";

const UserProfile = ({ heading, token }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div
        className="relative flex flex-col items-center bg-black overflow-hidden
      lg:flex-row-reverse">
        {/* Hero Image */}
        <div className="w-full lg:w-3/4">
          <LazyImage src={userHero} placeholder={LoadingHero} />
        </div>

        {/* Typography */}
        <div
          className="relative font-medium w-full p-4 md:p-10 flex flex-col gap-2 md:gap-4 shadow-hero-top-small sm:shadow-hero-top
          lg:w-1/4 lg:h-full lg:p-0 lg:pl-12 lg:shadow-hero-right lg:absolute lg:left-0 lg:justify-center xl:gap-5"
        >
          {/* Heading */}
          <h2 className="fadeHeroText text-white text-xl md:text-3xl 2xl:text-5xl lg:leading-tight 2xl:leading-tight lg:w-[225%] xl:w-[185%]">
            Hi, {heading}
          </h2>

          {/* Description */}
          <h3 className="fadeHeroText text-white font-normal lg:w-[225%] xl:text-lg xl:w-[185%]">
            Welcome to <span className="font-medium">my-Movies!</span><br/>
            Your own personal collection store.
          </h3>
          {/* Logout */}
          <button 
            className={`fadeHeroText bg-card hover:bg-background btn btn-sm md:btn-md max-w-fit`}
            onClick={() => dispatch(removeUser())}
            >
              Logout
          </button>
        </div>
        
      </div>

      {/* UserTabs */}
      <UserTabs token={token} />
    </div>
  );
};
export default UserProfile;
