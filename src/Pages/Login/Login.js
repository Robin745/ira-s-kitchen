import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/home";
  const [signInWithEmailAndPassword, user1, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <div className="w-10/12 mx-auto my-8">
        <h2 className="text-3xl text-green-600 my-4">Please Login</h2>
        <div>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleFormSubmit}
          >
            <input
              className="w-80 text-lg  rounded-lg border-black my-4"
              type="email"
              name="email"
              id="1"
              placeholder="Your Email"
              required
            />
            <input
              className="w-80 text-lg  rounded-lg border-black"
              type="password"
              name="password"
              id="2"
              placeholder="Your Password"
              required
            />
            {signInLoading && <Loading></Loading>}
            {signInError && (
              <p className="text-red-500">{signInError.message}</p>
            )}
            <input
              className="w-72 bg-green-600 hover:bg-lime-900 py-2 text-lg rounded-lg my-4 text-white font-semibold"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            New to Ira's kitchen ?{" "}
            <Link to="/signup" className="text-indigo-600">
              Create a new Account
            </Link>
          </p>
          <div className="flex items-center justify-center my-4">
            <span className="bg-gray-500 h-[1px] w-32"></span>
            <p className="mx-2 text-gray-500">or</p>
            <span className="bg-gray-500 h-[1px] w-32"></span>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;
