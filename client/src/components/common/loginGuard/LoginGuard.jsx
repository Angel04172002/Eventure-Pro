import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

export default function LoginGuard() {

    const { isAuthenticated } = useContext(AuthContext);


    return (

        isAuthenticated
            ? <Navigate to="/event/all" />
            : <Outlet />

    )

}