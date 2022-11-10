import { useEffect, useState } from "react";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import Dog from "../../assets/account.svg";
import { useRegisterMutation, useLoginMutation } from "../../redux/userApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const UserForm = () => {
  const [page, setPage] = useState("login");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // mutation
  const [register, {error: registerError, isLoading: registerLoading, data:registerData}] = useRegisterMutation();
  const [login, {error: loginError, isLoading: loginLoading, data:loginData}] = useLoginMutation();

  useEffect(() => {
    if(registerData) dispatch(setUser(registerData));
    if(loginData) dispatch(setUser(loginData));

    // reset form
    if(registerData || loginData) {
      setFirstName("");
      setEmail("");
      setPassword("");
    }
  },[loginData, registerData, dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password) return;

    if (page === "login") {
      await login({ email, password });
    } 
    if (page === "register") {
      await register({ firstName, email, password });
    }
  };

  const handlePage = () => {
    page === "login" ? setPage("register") : setPage("login")
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center  p-4 md:p-10 lg:p-12">
      {/* Card Wrapper */}
      <div className="w-full max-w-md md:max-w-4xl flex justify-center items-center">
        {/* Card Container */}
        <div className="w-full px-4 pt-4 pb-8 mb-24 bg-nav flex justify-center items-center gap-10 md:pb-24 md:mb-24 md:px-10 md:py-12 lg:px-12 lg:py-16 rounded-md">
          {/* Form  */}
          <div className="form-control w-full">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium mb-4">
              {page === "login" ? "Login" : "Register"}
            </h1>
            {page === "register" && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  className="input input-bordered focus:outline-none bg-background"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered focus:outline-none bg-background"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered focus:outline-none bg-background"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className="label">
                <button
                  onClick={handlePage}
                  className="label-text-alt link link-hover"
                >
                  {page === "login"
                    ? "Don't have an account? Register Here"
                    : "Already have an account? Login Here"}
                </button>
              </label>
            </div>
            {/* Error Message */}
            {registerError && page === "register" && (
              <div className="alert alert-error shadow-lg p-1 text-sm rounded-md">
                <div>
                  <FaInfoCircle />
                  <span>{registerError?.data?.error}</span>
                </div>
              </div>
            )}
            {loginError && page === "login" && (
              <div className="alert alert-error shadow-lg p-1 text-sm rounded-md">
                <div>
                  <FaInfoCircle />
                  <span>{loginError?.data?.error}</span>
                </div>
              </div>
            )}

            <div className="form-control mt-6">
              {!registerLoading && page === "register" && (
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Register
                </button>
              )}
              {registerLoading && page === "register" && (
                <button className="btn btn-active btn-primary loading btn-disabled">
                  Registering
                </button>
              )}
              {!loginLoading && page === "login" && (
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Login
                </button>
              )}
              {loginLoading && page === "login" && (
                <button className="btn btn-active btn-primary loading btn-disabled">
                  Logging
                </button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <img
              src={Dog}
              alt="account"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
