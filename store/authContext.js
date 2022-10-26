import { createContext, useState } from "react";



// pass states trough different components
export const AuthContext = createContext({
    // default
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logOut: () => {},
    userImage: () => {},
    imageUri: ''
});


    // will wrapp the child comonents
const AuthContextProvider = ({children}) => {
    const [authToken,setAutoToken] = useState('');
    const [image,setImage] = useState('');

    const authenticate = (token) => {
        setAutoToken(token);
    };

    const logOut = () => {
        setAutoToken(null);
    };

    const userImage = (uri) => {
       setImage(uri) 
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logOut: logOut,
        userImage: userImage,
        imageUri: image
    };


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};



export default AuthContextProvider;