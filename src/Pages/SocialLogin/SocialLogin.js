import React from "react";
import {
  useAuthState,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const from = location?.state?.from?.pathname || "/home";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleFacebookSignIn = () => {
    signInWithFacebook();
  };
  const handleGithubSignIn = () => {
    signInWithGithub();
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <div className="w-80 mx-auto my-4">
        {googleLoading || fbLoading || gitLoading ? (
          <Loading></Loading>
        ) : (
          <div>
            {googleError || fbError || gitError ? (
              <p className="text-red-500">
                {googleError?.message || fbError?.message || gitError?.message}
              </p>
            ) : (
              ""
            )}
            <button
              onClick={handleGoogleSignIn}
              className="flex mx-auto items-center justify-center bg-indigo-600 hover:bg-indigo-800 text-white p-2 w-80 my-2 rounded-md"
            >
              <img
                className="w-6 mx-2"
                src="https://i.ibb.co/VSWjCtT/google.png"
                alt=""
              />
              Sign in with Google
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="flex mx-auto items-center justify-center bg-indigo-600 hover:bg-indigo-800 text-white p-2 w-80 my-2 rounded-md"
            >
              <img
                className="w-6 mx-2"
                src="https://i.ibb.co/FVrCJzk/Facebook.png"
                alt=""
              />
              Sign in with Facebook
            </button>
            <button
              onClick={handleGithubSignIn}
              className="flex mx-auto items-center justify-center bg-indigo-600 hover:bg-indigo-800 text-white p-2 w-80 my-2 rounded-md"
            >
              <img
                className="w-6 mx-2"
                src="https://i.ibb.co/ZBRTJTH/github.png"
                alt=""
              />
              Sign in with Github
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SocialLogin;
