import { createContext, useState } from "react";



// pass states trough different components
export const AuthContext = createContext({
    // default
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logOut: () => {},
    userImage: () => {},
    imageUri: '',
    createUserInfo: () => {},
    userInfo: []
});


    // will wrapp the child comonents
const AuthContextProvider = ({children}) => {
    const [authToken,setAutoToken] = useState('');
    const [image,setImage] = useState('');
    const [user,setUser] = useState([]);

    const authenticate = (token) => {
        setAutoToken(token);
    };

    const logOut = () => {
        setAutoToken(null);
    };

    const userImage = (uri) => {
       setImage(uri) 
    };

    const createUserInfo = (data) => {
        setUser(data);
    };


    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logOut: logOut,
        userImage: userImage,
        imageUri: image,
        createUserInfo: createUserInfo,
        userInfo: user
    };


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};



export default AuthContextProvider;