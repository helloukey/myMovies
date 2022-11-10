import { Link } from "react-router-dom";

import { BiHomeSmile } from "@react-icons/all-files/bi/BiHomeSmile";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { BiCameraMovie } from "@react-icons/all-files/bi/BiCameraMovie";
import { BiTv } from "@react-icons/all-files/bi/BiTv";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";

import { setSearch } from "../../redux/layoutSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isSearch = useSelector(state => state.layout.isSearch);
  
  return (
    <div className="z-50 fixed bottom-0 left-0 right-0 xl:h-screen xl:sticky xl:top-0 bg-nav xl:px-8 py-2 border-r border-card">
      <div className="xl:menu xl:h-full w-full menu-horizontal justify-evenly xl:justify-center items-center bg-nav gap-4 xl:gap-10">
        {/* Home */}
        <button
          aria-label="Home"
          className="btn bg-transparent hover:bg-transparent focus:bg-transparent m-0 p-0 border-none hover:text-white">
          <Link to="/" aria-label="Home">
            <BiHomeSmile className="bg-nav text-3xl lg:text-5xl" />
          </Link>
        </button>
        {/* Search */}
        <button
          aria-label="Search"
          id="searchButton"
          onClick={() => dispatch(setSearch(!isSearch))}
          className="btn bg-transparent hover:bg-transparent focus:bg-transparent m-0 p-0 border-none hover:text-white"
        >
          <BiSearch id="searchIcon" className="bg-nav text-3xl lg:text-5xl" />
        </button>
        {/* Movies */}
        <button
          aria-label="Movies"
          className="btn bg-transparent hover:bg-transparent focus:bg-transparent m-0 p-0 border-none hover:text-white">
          <Link to="/movies" aria-label="Movies">
            <BiCameraMovie className="bg-nav text-3xl lg:text-5xl" />
          </Link>
        </button>
        {/* Shows */}
        <button
          aria-label="Shows"
          className="btn bg-transparent hover:bg-transparent focus:bg-transparent m-0 p-0 border-none hover:text-white">
          <Link to="/shows" aria-label="Shows">
            <BiTv className="bg-nav text-3xl lg:text-5xl" />
          </Link>
        </button>
        {/* Account */}
        <button
          aria-label="Account"
          className="btn bg-transparent hover:bg-transparent focus:bg-transparent m-0 p-0 border-none hover:text-white">
          <Link to="/account" aria-label="Account">
            <BiUserCircle className="bg-nav text-3xl lg:text-5xl" />
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
