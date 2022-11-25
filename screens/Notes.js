import { View, Text, StyleSheet, Alert, Vibration, FlatList, TouchableOpacity } from 'react-native';
import Input from '../UI/Input';
import SaveButton from '../UI/SaveButton';
import { COLORS } from '../components/constants';
import { useState, useContext, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createNotes, getNotes } from '../api/data';
import { AuthContext } from '../store/authContext';
import * as Haptics from 'expo-haptics';



const Notes = () => {
    const [noteText,setNoteText] = useState('');
    const [saved,setSaved] = useState(false);
    const [notes,setNotes] = useState([]);
    const [newNote,setNewNote] = useState(null);
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;

    const onDelete = () => {
        setNoteText('');
    };

    const onSave = async () => {
        try {
            const data  = await createNotes(token,noteText);
            setNewNote(data.config.data)
            setNotes([...notes,newNote]);

        } catch (error) {
            console.log(error);
        }
        if (newNote !== '') {
            Alert.alert('Saved Your Note', 'Your new note was saved')
        }
        setSaved(true);
        setNoteText('');
    };

    const onDeleteNote = async () => {
        console.log("deleted note");
    };

    const test = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        Alert.alert(
            'Delete Note', 'Do you want do delete this note?',
                [
                  { text: 'No' },  
                  { text: 'Yes', onPress: () => console.log("deleted note") }
                ]
            )
    };

    const renderNotes = ({ item }) => {
       return ( 
        <View style={styles.noteCard}>
            <TouchableOpacity key={item.id} onLongPress={test} activeOpacity={0.8} >
                <Text style={styles.noteText}>{item.text}</Text>
            </TouchableOpacity>
        </View>
       )
    }

    useEffect(() => {
        const fetchTheNotes = async () => {
            try {
                const result = await getNotes(token);
                setNotes(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTheNotes();
    },[token,notes])

    
    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Notes To Myself ...</Text>
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
            <View style={styles.notesContainer}>
                <FlatList 
                    data={notes}
                    renderItem={renderNotes}
                />
                {/* <SafeAreaView>
                <ScrollView style={{marginBottom: 50 }}>
                    {notes.length > 0 ? notes.map((item, id) => {
                        return (
                            <>
                                <Pressable key={item ? item.id : id}>
                                    <View style={styles.noteCard}>
                                        <Text style={styles.noteText}>{item ? item.text : " "}</Text>
                                    </View>
                                </Pressable>
                                <Ionicons name='close-outline' style={styles.icon} onPress={onDeleteNote}/>
                            </>
                        )}) : <Text style={styles.noNotes}>No Notes Here.</Text>
                    }
                </ScrollView>
                </SafeAreaView> */}
            </View>
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
        marginTop: 50,
        marginBottom: 400,
    },
    noteCard: {
        borderWidth: 2,
        marginBottom: 20,
        width: 280,
        minHeight: 20,
        padding: 15,
        elevation: 2,
        backgroundColor: 'pink',
        borderColor: 'pink',
        borderRadius: 10
    },
    noteText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    noNotes: {
        textAlign: 'center',
        marginTop: 150,
        fontSize: 18
    },
    icon: {
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 300,
        position: 'relative',
        bottom: 40
    }

});

export default Notes;