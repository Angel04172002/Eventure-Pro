import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useLogout } from '../../hooks/auth-hooks'

export default function Logout() {

    const logout = useLogout();

    logout();

    return <Navigate to="/" />
}