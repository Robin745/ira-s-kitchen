import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user1, loading, signUpError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/home";
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('')
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      setError("Both Password Didn't match")
      return
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <div className="w-10/12 mx-auto my-8">
        <h2 className="text-3xl text-green-600 my-8">Please Sign Up</h2>
        <div>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleFormSubmit}
          >
            <input
              className="w-80 text-lg border-black rounded-lg "
              type="text"
              name="name"
              id="3"
              placeholder="Your Name"
            />
            <input
              className="w-80 text-lg border-black rounded-lg  my-2"
              type="email"
              name="email"
              id="1"
              placeholder="Email"
              required
            />
            <input
              className="w-80 text-lg border-black rounded-lg  mb-2"
              type="password"
              name="password"
              id="2"
              placeholder="New Password"
              required
            />
            <input
              className="w-80 text-lg border-black rounded-lg "
              type="password"
              name="confirmPassword"
              id="4"
              placeholder="Confirm Password"
              required
            />
            {loading && <Loading></Loading>}
            {signUpError && <p className="text-red-500">{signUpError?.message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <input
              className="w-72 bg-green-600 hover:bg-lime-900 py-2 text-lg rounded-lg my-2 text-white font-semibold"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="text-indigo-600">
              Login
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

export default SignUp;
