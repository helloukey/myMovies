import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { useNavigate } from "react-router-dom";

const BackNavigation = () => {
  const navigate = useNavigate();
  return (
      <div className="xl:hidden w-full flex items-center gap-2 px-4 md:px-10 lg:px-12 bg-card">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-circle btn-ghost">
            <FaChevronLeft className="text-xl md:text-2xl"/>
        </button>
        <span>Go back</span>
      </div>
  )
}
export default BackNavigation