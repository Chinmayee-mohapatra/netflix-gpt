import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //When the header component unloads, this will unsubscribe to this event.
    // unsubscribe, when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    // Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full absolute z-50 px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center justify-between gap-2 cursor-pointer">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white border-white border-[1px]"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white font-semibold tracking-wide "
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? (
              <div className="py-2 px-4 my-2">Home</div>
            ) : (
              <div className="py-2 px-4 mx-4 my-2 bg-purple-900 rounded-sm">
                GPT Search
              </div>
            )}
          </button>
          <img
            className="w-8 h-8 hidden md:block rounded-sm "
            src={user?.photoURL}
            alt="user-icon"
          />
          <div className=" text-white font-bold">{user.displayName}</div>
          <button
            className="py-2 px-4 mx-4 md:mx-0 my-2 border-2 border-purple-900 md:border-0 rounded-md font-bold text-white"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
