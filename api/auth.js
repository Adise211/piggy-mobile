import axios from "axios";
import { KEY_API } from '../keys';

const DB_URL_SU = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + KEY_API;
const DB_URL_SI = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + KEY_API;

export const createUser = async (email, password, fullName) => {
    try {
       const response = await axios.post(`${DB_URL_SU}`,
            {
                email: email,
                password: password,
                fullName: fullName,
                returnSecureToken: true
            }
        );

        // const token = response.data.idToken;
        return response;

    } catch (error) {
        console.log(error.response.data.error.message);
        
    }
};


export const signInUser = async(email, password) => {
    try {
        const response = await axios.post(`${DB_URL_SI}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
        // const token = response.data.idToken;
        return response;
        
    } catch (error) {
        const errorMessage = error.response.data.error.message;
        console.log("The sign-in request:",errorMessage);
        return {message: errorMessage};
    }
};
