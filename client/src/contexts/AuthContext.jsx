import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider(props) {

    const [authData, setAuthData] = useState({});

    const updateAuthData = (obj) => {
      setAuthData(obj);
    };
  
    const logout = () => {
      setAuthData(null);
    };
  
    const dataObj = {
      userId: authData?._id,
      email: authData?.email,
      isAuthenticated: !!authData?.email,
      accessToken: authData?.accessToken,
      updateAuthData,
      logout
    };


    return (
        <AuthContext.Provider value={dataObj}>
            {props.children}
        </AuthContext.Provider>
    )
}