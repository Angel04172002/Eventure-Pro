import requester from "./requester";


const baseUrl = 'http://localhost:3030/users';


export const login = (email, password) => requester.post(`${baseUrl}/login`, { email, password });

export const register = (email, password) => requester.post(`${baseUrl}/register`, { email, password });

