import axios from "axios";
import { DB_DATA_URL } from "../keys";



export const createNotes = async (req,res) => {
    const { token, id, noteText } = req;
    try {
       const response = await axios.post(
           `${DB_DATA_URL}/notes.json?auth=${token}`,
           { 
            userId: id,
            text: noteText
           }
        );
        return res.status(200).json(response);

    } catch (error) {
        console.log(error.response.data.error);
    }
};

export const getNotes = async (req,res) => {
    const { token, userId } = req;

    try {
        const response = await axios.get(`${DB_DATA_URL}/notes.json?auth=${token}`);
        const notes = [];
        for (const key in response.data) {
            const noteObj = {
                id: key,
                userId: response.data[key].userId,
                text: response.data[key].text
            };
            // if (noteObj.userId === userId) notes.push(noteObj);
            notes.push(noteObj);
        }
        console.log("notes in the back", notes);

        if (notes.length > 0 ) return res.status(200).json(notes);
     } catch (error) {
        console.log(error.message);
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