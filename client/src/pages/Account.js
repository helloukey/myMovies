import Footer from "../components/general/Footer";
import UserForm from "../components/user/UserForm";
import UserProfile from "../components/user/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/userSlice";
import { useEffect } from "react";
import DetailsScreen from "../loaders/screens/DetailsScreen";

const Account = () => {
  const { user, userStatus } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  },[dispatch]);

  return (
    <div className="w-full">
        {userStatus && <DetailsScreen />}
        {!user && !userStatus && <UserForm />}
        {user && !userStatus && <UserProfile heading={user?.firstName} token={user.token} />}
        <Footer />
    </div>
  )
}
export default Account