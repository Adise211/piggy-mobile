import axios from "axios";
import { KEY_API } from "../keys";


const DB_URL_USER_INFO = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${KEY_API}`;


export const getUserInfo = async (id) => {
    try {
       const response = await axios.post(`${DB_URL_USER_INFO}`,
            {
                idToken: id
            }
        );
        const data = response.data.users
        return data;

    } catch (error) {
        console.log(error.response.data.error.message);
        
    }
};


