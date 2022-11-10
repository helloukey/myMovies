import { Link } from "react-router-dom";

const DirectingDepartment = ({ mediaFilter, data }) => {
  return (
    <>
      <h2 className="md:text-lg lg:text-xl font-medium mb-2">Directing</h2>
      <table className="text-left w-full border-collapse mb-8 md:mb-10">
        <thead>
          <tr className="text-left bg-nav grid grid-cols-2 md:grid-cols-3 items-center justify-start p-3">
            <th>YEAR</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data &&
            data.crew
              .filter(
                (item) =>
                  item.department === "Directing" &&
                  item.media_type.includes(mediaFilter)
              )
              .map((item) => (
                <tr
                  key={item.id}
                  className="bg-card border-b border-b-nav grid grid-cols-2 md:grid-cols-3 items-center justify-center p-3"
                >
                  {item.release_date || item.first_air_date ? (
                    <td className="md:mr-8">
                      {item.release_date
                        ? new Date(item.release_date).getFullYear()
                        : item.first_air_date
                        ? new Date(item.first_air_date).getFullYear()
                        : ""}
                    </td>
                  ) : (
                    <td>-</td>
                  )}

                  <td>
                    <Link
                      to={
                        item.media_type === "movie"
                          ? `/movies/${item.id}`
                          : item.media_type === "tv"
                          ? `/shows/${item.id}`
                          : item.media_type === "person"
                          ? `/person/${item.id}`
                          : ""
                      }
                    >
                      <span className="">
                        {item.title ||
                          item.original_title ||
                          item.name ||
                          item.original_name}{" "}
                      </span>
                      {item.job && (
                        <span className="font-medium">as {item.job}</span>
                      )}
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};
export default DirectingDepartment;
