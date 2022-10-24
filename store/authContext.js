import { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
    const navigation = useNavigation();
    const [authToken,setAutoToken] = useState(null);

    const authenticate = (token) => {
        setAutoToken(token);
    };

    const logOut = () => {
        setAutoToken(null);
        navigation.navigate('SIGN-IN')
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logOut: logOut
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>


};

export default AuthContextProvider;