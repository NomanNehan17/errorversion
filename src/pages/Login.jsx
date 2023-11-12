import React from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
import { githubLogo, googleLogo, facebookLogo } from "../assets";

const Login = () => {
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();

  // Google
  const googleProvider = new GoogleAuthProvider();

  // GitHub
  const githubProvider = new GithubAuthProvider();

  // Facebook
  const facebookProvider = new FacebookAuthProvider();

  // ============== Google Login Start here =====================
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider.setCustomParameters({ prompt: "select_account" }))
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // ============== Google Login End here =======================
  // ============== Google Logout Start here ====================
  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // ============== Google Logout End here ======================

  // ============== GitHub Login Start here =====================
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // ============== GitHub Login End here =======================
  // ============== GitHub Logout Start here ====================
  const handleGithubLogout = () => {
    // Implement GitHub logout logic here if applicable.
    // This may involve clearing any GitHub session or state in your app.
    // For GitHub OAuth, you would typically revoke any access token or session.
  }
  // ============== GitHub Logout End here ======================

  // ============== Facebook Login Start here ===================
  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // ============== Facebook Login End here ===================
  // ============== Facebook Logout Start here =================
  const handleFacebookLogout = () => {
   
  }
  // ============== Facebook Logout End here ====================

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] 
          border-gray-400 rounded-md 
          flex items-center justify-center gap-2 
          hover:bg-blue-600 hover:border-blue-600 hover:text-white cursor-pointer duration-300">
          <img className="w-8" src={googleLogo} alt="googleLogo" />
          <span className="text-sm text-gray-900"> Sign in Google</span>
        </div>
        {userInfo && (
          <button
            onClick={handleGoogleLogout}
            className="bg-black text-white text-base py-3 
            px-8 tracking-wide rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-800
            duration-300">
            Sign Out
          </button>
        )}
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGithubLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white cursor-pointer duration-300"
        >
          <img className="w-8" src={githubLogo} alt="githubLogo" />
          <span className="text-sm text-gray-900"> Sign in with GitHub</span>
        </div>
        {userInfo && (
          <button
            onClick={handleGithubLogout}
            className="bg-black text-white text-base py-3 
            px-8 tracking-wide rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-800
            duration-300">
            Sign Out
          </button>
        )}
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleFacebookLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white cursor-pointer duration-300"
        >
          <img className="w-8" src={facebookLogo} alt="facebookLogo" />
          <span className="text-sm text-gray-900"> Sign in with Facebook</span>
        </div>
        {userInfo && (
          <button
            onClick={handleFacebookLogout}
            className="bg-black text-white text-base py-3 
            px-8 tracking-wide rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-800
            duration-300">
            Sign Out
          </button>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
