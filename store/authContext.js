import { createContext, useState } from "react";



// pass states trough different components
export const AuthContext = createContext({
    // default
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logOut: () => {}
});


    // will wrapp the child comonents
const AuthContextProvider = ({children}) => {
    const [authToken,setAutoToken] = useState('');

    const authenticate = (token) => {
        setAutoToken(token);
    };

    const logOut = () => {
        setAutoToken(null);
    };

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logOut: logOut
    };


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};



export default AuthContextProvider;