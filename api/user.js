import axios from "axios";
import { KEY_API } from "../keys";


const URL_USER_INFO = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${KEY_API}`;
const URL_UPDATE = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${KEY_API}`;


export const getUserInfo = async (id) => {
    try {
       const response = await axios.post(`${URL_USER_INFO}`,
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

export const updateUserProfile = async ({id, name, image}) => {
    try {
        const {data} = await axios.post(`${URL_UPDATE}`, 
            {
                idToken: id,
                displayName: name,
                photoUrl: image,
                returnSecureToken: true
            }
        );
        return data;
        
    } catch (error) {
        console.log(error);
    }
};


