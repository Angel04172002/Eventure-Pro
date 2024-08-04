import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import authApi from "../api/authApi";



export function useLogin() {

    const { updateAuthData } = useContext(AuthContext);

    const login = async ({email, password}) => {

        const result = await authApi.login(email, password);
        updateAuthData(result);

        return result;
    }

    return login;

}