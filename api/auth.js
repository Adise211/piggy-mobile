import axios from "axios";

const DB_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-M1L0NerRVl0yUTHx4zPz5ZKwXWGBmSQ';
export const createUser = async (email, password, fullName) => {
    console.log("from axios", email,password, fullName);
    try {
       const response = await axios.post(`${DB_URL}`,
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