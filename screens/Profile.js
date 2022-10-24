import { Text, View, StyleSheet, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../components/constants';
import { useContext, useState } from 'react';
import { AuthContext } from '../store/authContext';

const Profile = () => {
    const [editProfile, setEditProfile] = useState(false);
    const [name, setName] = useState("Adise");
    const [email, setEmail] = useState("adisemamo211@gmail.com");
    const [password, setPassword] = useState("******");
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    console.log("my token =>",token);

    const onEditProfile = () => {
        Alert.alert(
            'Change Your Details', 
            'Are you sure you want to change your details?', 
            [
                { text: 'NO', onPress: () => console.log("Cancel"), style: 'cancel' },
                { text: 'Pretty Sure', onPress: () => setEditProfile(true), style: 'destructive' }
            ]
            )
    };

 


    const logOutHandler = () => {
        authCtx.logOut();
    };

    return (
        <View style={styles.container}>
            <View>
                <Ionicons name='person-circle-outline' size={90} color={'grey'}/>
            </View>
            <View style={styles.settings}> 
                { !editProfile ? (
                    <>
                        <Text style={styles.edit} onPress={onEditProfile}>Edit</Text>
                        <Text style={[styles.settingsTitle, {marginTop: 40}]}>Full Name</Text>                    
                        <Text style={styles.details}>{name}</Text>                

                        <Text style={[styles.settingsTitle, {marginTop: 40}]}>Email </Text>
                        <Text style={styles.details}>{email}</Text>
                        {/* <Text style={styles.edit}>Edit</Text> */}

                        <Text style={[styles.settingsTitle, {marginTop: 40}]}>Password </Text>
                        <Text style={styles.details}>{password}</Text>
                        {/* <Text style={styles.edit}>Edit</Text> */}
                    </>
                ) : (
                    <>
                        <Text style={styles.edit} onPress={onEditProfile}>Save</Text>
                        <Text style={styles.cancel} onPress={() => setEditProfile(false)}>Cancel</Text>

                        <Text style={styles.settingsTitle}>Full Name</Text>                    
                        <TextInput style={styles.input} value={name} onChangeText={(enterdValue) => setName(enterdValue)}/>             

                        <Text style={styles.settingsTitle}>Email </Text>
                        <TextInput style={styles.input} value={email} onChangeText={(enterdValue) => setEmail(enterdValue)}/> 

                        <Text style={styles.settingsTitle}>Password </Text>
                        <TextInput style={styles.input} value={password} onChangeText={(enterdValue) => setPassword(enterdValue)}/> 
                    </>
                  )
                }
            </View>
            <Text style={styles.logout} onPress={logOutHandler}>Log Out</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    settings: {
        borderWidth: 1,
        borderColor: "grey",
        height: 330,
        width: 250,
        marginTop: 8,
        backgroundColor: COLORS.white,
        elevation: 5,
    },
    settingsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 25
    },
    details: {
        marginLeft: 20,
        position: 'relative',
        top: 10,
        fontSize: 16
    },
    edit: {
        position: 'relative',
        bottom: -20, // was 40 
        left: 180,
        color: COLORS.BLUE_500,
        fontWeight: 'bold',
        fontSize: 16
    },
    logout: {
        marginTop: 15,
        fontWeight: 'bold',
        color: COLORS.primary_pink,
        fontSize: 16
    },
    input: {
        height: 35,
        backgroundColor: '#eee',
        borderWidth: 1,
        width: 200,
        borderRadius: 8,
        marginLeft: 20,
        paddingLeft: 5
    },
    cancel:{
        position: 'relative',
        bottom: 2, 
        left: 100,
        color: COLORS.red_error,
        fontWeight: 'bold',
        fontSize: 16
    }
    
})

export default Profile;