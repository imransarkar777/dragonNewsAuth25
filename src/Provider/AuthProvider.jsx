import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser =(email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    user,
    setUser,
    createNewUser
  };

  useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })
    return()=>{
        unSubscribe();
    }


    // setUser(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
