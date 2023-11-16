import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const Context = createContext(null);

// google
const googleProvider = new GoogleAuthProvider();
// github
const githubProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
  // useState
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    () => {
      return unsubscribe;
    };
  }, []);

  // logout
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  // authentication
  const authentication = {
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logout,
    user,
    loader,
  };

  return <Context.Provider value={authentication}>{children}</Context.Provider>;
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
