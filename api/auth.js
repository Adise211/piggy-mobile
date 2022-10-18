import axios from "axios";


const DB_URL_SU = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-M1L0NerRVl0yUTHx4zPz5ZKwXWGBmSQ';
const DB_URL_SI = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-M1L0NerRVl0yUTHx4zPz5ZKwXWGBmSQ';

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
        console.log(response.data);
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
                password: password
            }
        );
        console.log(response.data);
        return response;
        
    } catch (error) {
        const errorMessage = error.response.data.error.message;
        console.log("The sign-in request:",error.response.data.error.message);
        return {message: errorMessage};
    }
};
