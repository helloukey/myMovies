import { useState } from "react";
import ActingDepartment from "./department/ActingDepartment";
import DirectingDepartment from "./department/DirectingDepartment";
import ProductionDepartment from "./department/ProductionDepartment";
import WritingDepartment from "./department/WritingDepartment";

const ArtistCredits = ({ data }) => {
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [mediaFilter, setMediaFilter] = useState("");
  const handleDepartmentFilter = (e) => {
    setDepartmentFilter(e.target.value);
  };

  const handleMediaFilter = (e) => {
    setMediaFilter(e.target.value);
  };
  return (
    <div className="w-full">
      {/* Filter */}
      <div className="grid grid-cols-2 sm:flex gap-5 sm:gap-10 mb-8">
        <div className="grid grid-cols-1 gap-1 sm:flex sm:items-center sm:gap-2">
          <span className="text-sm sm:text-base font-medium">Department</span>
          <select
            className="select select-sm sm:select-md focus:outline-none bg-nav"
            onChange={handleDepartmentFilter}
          >
            <option className="focus:outline-none" value="">
              All
            </option>
            <option className="focus:outline-none" value="acting">
              Acting
            </option>
            <option className="focus:outline-none" value="directing">
              Directing
            </option>
            <option className="focus:outline-none" value="production">
              Production
            </option>
            <option className="focus:outline-none" value="writing">
              Writing
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-1 sm:flex sm:items-center sm:gap-2">
          <span className="text-sm sm:text-base font-medium">Media</span>
          <select
            className="select select-sm sm:select-md focus:outline-none bg-nav"
            onChange={handleMediaFilter}
          >
            <option defaultValue className="focus:outline-none" value="">
              All
            </option>
            <option className="focus:outline-none" value="movie">
              Movies
            </option>
            <option className="focus:outline-none" value="tv">
              Shows
            </option>
          </select>
        </div>
      </div>

      {/* Container */}
      {/* Acting */}
      {(departmentFilter === "" || departmentFilter === "acting") && (
        <ActingDepartment mediaFilter={mediaFilter} data={data} />
      )}

      {/* Directing */}
      {(departmentFilter === "" || departmentFilter === "directing") && (
        <DirectingDepartment mediaFilter={mediaFilter} data={data} />
      )}

      {/* Production */}
      {(departmentFilter === "" || departmentFilter === "production") && (
        <ProductionDepartment mediaFilter={mediaFilter} data={data} />
      )}

      {/* Writing */}
      {(departmentFilter === "" || departmentFilter === "writing") && (
        <WritingDepartment mediaFilter={mediaFilter} data={data} />
      )}
    </div>
  );
};
export default ArtistCredits;
