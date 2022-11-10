import { useDispatch, useSelector } from "react-redux";
import { setCardAction } from "../../redux/layoutSlice";
import { checkUser } from "../../redux/userSlice";

import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";
import { FaRegGrinHearts } from "@react-icons/all-files/fa/FaRegGrinHearts";
import { FaRegBookmark } from "@react-icons/all-files/fa/FaRegBookmark";
import { FaRegTired } from "@react-icons/all-files/fa/FaRegTired";

import { useEffect } from "react";
import {
  useAddLikeMutation,
  useAddWatchLaterMutation,
  useGetCollectionQuery,
  useRemoveLikeMutation,
  useRemoveWatchLaterMutation,
} from "../../redux/userApi";
import { Link } from "react-router-dom";

const CardActions = ({ mediaType }) => {
  const dispatch = useDispatch();
  const { user, userInfo } = useSelector((state) => state.user);

  // mutations
  const [
    addLike,
    { data: likeData, isLoading: likeLoading, error: likeError },
  ] = useAddLikeMutation();
  const [
    addWatchLater,
    { data: watchData, isLoading: watchLoading, error: watchError },
  ] = useAddWatchLaterMutation();
  const { data: collection } = useGetCollectionQuery(user?.token, {
    skip: !user,
  });
  const [removeLike, { isLoading: removeLikeLoading, error: removeLikeError }] =
    useRemoveLikeMutation();
  const [
    removeWatchLater,
    { isLoading: removeWatchLaterLoading, error: removeWatchLaterError },
  ] = useRemoveWatchLaterMutation();

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  useEffect(() => {}, [collection]);

  //   handle Like
  const handleLike = async () => {
    if (!user || !userInfo) return;
    if (user && userInfo) {
      await addLike({
        data: {
          mediaId: userInfo.id,
          title:
            userInfo.original_title || userInfo.original_name || userInfo.name,
          mediaType: userInfo.media_type || mediaType,
          saveType: "like",
          userId: user.userId,
        },
        token: user.token,
      });
    }
  };

  //   handle Watch Later
  const handleWatchLater = async () => {
    if (!user || !userInfo) return;
    if (user && userInfo) {
      await addWatchLater({
        data: {
          mediaId: userInfo.id,
          title:
            userInfo.original_title || userInfo.original_name || userInfo.name,
          mediaType: userInfo.media_type || mediaType,
          saveType: "watch later",
          userId: user.userId,
        },
        token: user.token,
      });
    }
  };

  //   handle Remove Like
  const handleRemoveLike = async (e) => {
    if (!user || !userInfo) return;
    if (user && userInfo) {
      await removeLike({
        id: e.target.id,
        token: user.token,
      });
    }
  };

  //   handle Remove Watch Later
  const handleRemoveWatchLater = async (e) => {
    if (!user || !userInfo) return;
    if (user && userInfo) {
      await removeWatchLater({
        id: e.target.id,
        token: user.token,
      });
    }
  };

  return (
    <>
      {/* Modal */}
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] backdrop-blur z-50 flex justify-center items-center p-4 md:p-10 lg:p-12">
        {/* body */}
        <div className="w-full max-w-sm h-fit px-4 py-10 md:px-10 lg:px-12 bg-background relative rounded-md">
          {/* Close Button */}
          <div
            className="absolute top-1 right-1 cursor-pointer"
            onClick={() => dispatch(setCardAction(false))}
          >
            <FaRegTimesCircle className="text-xl md:text-2xl" />
          </div>

        {user ?
        <>
          {/* Like and Watch Later  */}
          {collection &&
          userInfo &&
          Object.values(collection)[0].filter(
            (item) =>
              item.mediaId === userInfo.id &&
              item.mediaType === (userInfo.media_type || mediaType) &&
              item.saveType === "like"
          ).length ? (
            <button
              id={
                collection &&
                Object.values(collection)[0].filter(
                  (item) =>
                    item.mediaId === userInfo.id &&
                    item.mediaType === (userInfo.media_type || mediaType) &&
                    item.saveType === "like"
                )[0]._id
              }
              onClick={handleRemoveLike}
              className={`bg-tab-active hover:bg-tabs btn btn-block justify-start gap-2 mb-2 ${
                removeLikeLoading ? "btn-active loading btn-disabled" : ""
              }`}
            >
              <FaRegGrinHearts />
              Remove from Liked
            </button>
          ) : (
            <button
              onClick={handleLike}
              className={`bg-tab-active hover:bg-tabs btn btn-block justify-start gap-2 mb-2 ${
                likeLoading ? "btn-active loading btn-disabled" : ""
              }`}
            >
              <FaRegGrinHearts />
              Add to Liked
            </button>
          )}

          {collection &&
          userInfo &&
          Object.values(collection)[0].filter(
            (item) =>
              item.mediaId === userInfo.id &&
              item.mediaType === (userInfo.media_type || mediaType) &&
              item.saveType === "watch later"
          ).length ? (
            <button
              id={
                collection &&
                Object.values(collection)[0].filter(
                  (item) =>
                    item.mediaId === userInfo.id &&
                    item.mediaType === (userInfo.media_type || mediaType) &&
                    item.saveType === "watch later"
                )[0]._id
              }
              onClick={handleRemoveWatchLater}
              className={`bg-tab-active hover:bg-tabs btn btn-block justify-start gap-2 mb-2 ${
                removeWatchLaterLoading ? "btn-active loading btn-disabled" : ""
              }`}
            >
              <FaRegBookmark />
              Remove from Watch Later
            </button>
          ) : (
            <button
              onClick={handleWatchLater}
              className={`bg-tab-active hover:bg-tabs btn btn-block justify-start gap-2 mb-2 ${
                watchLoading ? "btn-active loading btn-disabled" : ""
              }`}
            >
              <FaRegBookmark />
              Add to Watch Later
            </button>
          )}

          {/* Error */}
          {(likeError ||
            watchError ||
            removeLikeError ||
            removeWatchLaterError) && (
            <div className="alert alert-error shadow-lg p-1 text-sm rounded-md mt-2">
              <div>
                <FaRegTired className="text-xl md:text-2xl" />
                <span>
                  {likeError?.data?.error ||
                    watchError?.data?.error ||
                    removeLikeError?.data?.error ||
                    removeWatchLaterError?.data?.error}
                </span>
              </div>
            </div>
          )}
          </>
          :

          // Goto login page
          <>
            <p className="text-center">Please Login/Register to add items to your collection.</p>
            <Link
              to="/account"
              className="bg-tab-active hover:bg-tabs btn btn-block gap-2 mt-3 mb-2"
            >
              Login / Register
            </Link>
          </>
        }

        </div>
      </div>
    </>
  );
};
export default CardActions;
