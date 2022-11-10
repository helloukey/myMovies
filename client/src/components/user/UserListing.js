import { Link } from "react-router-dom";

const UserListing = ({ data, saveType }) => {
  return (
    <div className="w-full mt-5">
      <table className="w-full border-collapse mb-8 md:mb-10">
        <thead>
          <tr className="text-left bg-nav grid grid-cols-2 md:grid-cols-3 items-center justify-center p-3">
            <th>ID</th>
            <th>NAME</th>
            <th className="hidden md:block">SAVE TYPE</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data &&
            data
              .filter((item) => item.saveType.includes(saveType))
              .map((item) => (
                <tr
                  key={item._id}
                  className="bg-card border-b border-b-nav grid grid-cols-2 md:grid-cols-3 items-center justify-center p-3"
                >
                  <td>{item.mediaId}</td>
                  <td className="md:mr-8">
                    <Link
                      to={
                        item.mediaType === "movie"
                          ? `/movies/${item.mediaId}`
                          : item.mediaType === ("tv" || "show")
                          ? `/shows/${item.mediaId}`
                          : item.mediaType === "person"
                          ? `/person/${item.mediaId}`
                          : ""
                      }
                      className="font-medium"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="hidden md:block capitalize">
                    {item.saveType}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserListing;
