import { useState } from "react";
import UserListing from "./UserListing";
import { FaRegTired } from "@react-icons/all-files/fa/FaRegTired";

const UserShows = ({data}) => {
  const [saveType, setSaveType] = useState("");

  const handleSaveType = (e) => {
    setSaveType(e.target.value);
  }

  return (
    <div className="w-full">

    {data && data.length ?
        <>
        {/* Filter */}
        <div className="flex items-center">
          <select className="select select-sm sm:select-md focus:outline-none bg-nav"
            onChange={handleSaveType}
          >
            <option className="focus:outline-none" value="">
              All
            </option>
            <option className="focus:outline-none" value="like">Liked</option>
            <option className="focus:outline-none" value="watch later">Watch Later</option>
          </select>
        </div>

        {/* User Listing */}
        <UserListing data={data} saveType={saveType} />
        </>
        :
        // No result to show
        <div className="w-full grid grid-cols-1 text-center gap-2 md:gap-5">
          <FaRegTired className="text-3xl md:text-5xl mx-auto" />
          <p className="md:text-xl">Sorry, No Result to Show!</p>
        </div>
      }
    </div>
  )
}
export default UserShows