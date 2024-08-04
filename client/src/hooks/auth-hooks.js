import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import authApi from "../api/authApi";



export function useLogin() {

    const { updateAuthData } = useContext(AuthContext);

    const login = async (email, password) => {

        const authData = await authApi.login(email, password);
        updateAuthData(authData);
        localStorage.setItem('user', authData);

        return authData;
    }

    return login;

}


export function useRegister() {
    
    const { updateAuthData } = useContext(AuthContext);

    const register = async (email, password, rePassword) => {

        const authData = await authApi.register(email, password, rePassword);
        updateAuthData(authData);
        localStorage.setItem('user', authData);

        return authData;
    }

    return register;
}