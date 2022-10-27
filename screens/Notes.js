import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../UI/Input';
import SaveButton from '../UI/SaveButton';
import { COLORS } from '../components/constants';
import { useState } from 'react';


const Notes = () => {
    const [noteText,setNoteText] = useState('');

    const onDelete = () => {
        setNoteText('');
    };

    const onSave = () => {
        if (noteText !== '') {
            Alert.alert('Saved Your Note', 'Your new note was saved')
        }
        // setNoteText('');
    };
    
    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Notes to myself ...</Text>
                <Input 
                    color={'white'} 
                    style={styles.input} 
                    onChangeText={(text) => setNoteText(text)}
                    value={noteText}
                >
                </Input>
            </View>
            <View style={styles.buttonsContainer}>
                <SaveButton style={styles.save} onPress={onSave}>Save</SaveButton>
                <SaveButton style={styles.delete} onPress={onDelete}>Delete</SaveButton>
            </View>
            {noteText ? (
                <>
                    <View style={styles.notesContainer}>
                        <View style={styles.noteCard}>
                            <Text style={styles.noteText}>{noteText}</Text>
                        </View>
                    </View>
                </>
            ) : <Text style={styles.noNotes}>No Notes Here.</Text>

            }
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 50,
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        position: 'relative',
        left: 80
    },
    save: {
        padding: 10,
        backgroundColor: COLORS.primary_pink,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        width: 65,
        textAlign: 'center'
    },
    delete: {
        padding: 10,
        backgroundColor: COLORS.BLUE_500,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    notesContainer: {
        alignItems: 'center',
        marginTop: 70
    },
    noteCard: {
        borderWidth: 2,
        width: 250,
        padding: 15,
        elevation: 5,
        backgroundColor: 'pink',
        borderColor: 'pink'
    },
    noteText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    noNotes: {
        textAlign: 'center',
        marginTop: 150,
        fontSize: 18
    }

});

export default Notes;