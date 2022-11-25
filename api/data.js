import axios from "axios";
import { DB_DATA_URL } from "../keys";



export const createNotes = async (token,text) => {
    try {
       const response = await axios.post(
           `${DB_DATA_URL}/notes.json?auth=${token}`,
           {text: text}
        );
        return response;

    } catch (error) {
        console.log(error.response.data.error);
    }
};

export const getNotes = async (token) => {
    try {
        const response = await axios.get(`${DB_DATA_URL}/notes.json?auth=${token}`);
        const notes = [];
        for (const key in response.data) {
            const noteObj = {
                id: key,
                text: response.data[key].text
            };
            notes.push(noteObj);
        }

        return notes;
 
     } catch (error) {
        console.log(error.response.data.error);
     }
};

export const deleteNote = async (token, noteId) => {
    try {
        const result = await axios.delete(`${DB_DATA_URL}/notes/${noteId}.json?auth=${token}`);
        if (result) return { message: 'Deleted Note Successfully!' }
    } catch (error) {
        console.log(error.response.data.error);
    }
}