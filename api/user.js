import axios from "axios";
// import { KEY_API } from "./auth";


const KEY_API = process.env.KEY_API;

const DB_URL_USER_INFO = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${KEY_API}`;


export const getUserInfo = async (id) => {
    try {
       const response = await axios.post(`${DB_URL_USER_INFO}`,
            {
                idToken: id
            }
        );
        console.log(response.data);
        return response;

    } catch (error) {
        console.log(error.response.data.error.message);
        
    }
};


