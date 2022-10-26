import { Text, View, StyleSheet, Alert, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../components/constants';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/authContext';
import { useNavigation } from "@react-navigation/native";
import { getUserInfo, updateUserProfile } from '../api/user';
import ImagePicker from '../components/ImagePicker';
import SaveButton from '../UI/SaveButton';



const Profile = () => {
    const navigation = useNavigation();
    const [editProfile, setEditProfile] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("******");
    const [profileImage, setProfileImage] = useState(null)
    const [saveInfo, setSaveInfo] = useState(false);
    const [user,setUser] = useState([]);
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    const image = authCtx.imageUri;

    useEffect(() => {
        const userInfo = async () => {
            try {
                const data = await getUserInfo(token);
                setUser(data)
                setEmail(data[0].email)
                setName(data[0].displayName)
                setProfileImage(data[0].photoUrl)
                
            } catch (error) {
                console.log("could not fetch the user info",error);
            }
        };
        userInfo();
    }, [])

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

    // TO DO: function not working when pressing Save
    const updateUser = async () => {
        try {
            const data = await updateUserProfile({
                id: token,
                name: name,
                image: image,
            });
            setProfileImage(data.photoUrl);
            setName(data.displayName)
            setEditProfile(false);
            saveInfo(false)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!!image) {
            updateUser();
        }
        if (saveInfo) updateUser();
    }, [image, saveInfo])

 
    const logOutHandler = () => {
        authCtx.logOut();
        navigation.navigate('SIGN-IN')
    };



    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                { profileImage 
                    ? <Image source={{ uri: profileImage }} style={styles.img}/> 
                    : <Ionicons name='person-circle-outline' size={90} color={'grey'}/>
                }
                <ImagePicker title={profileImage ? 'change image': 'add image'} />
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
                        <SaveButton style={styles.edit} onPress={() => setSaveInfo(true)}>Save</SaveButton>
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
        marginTop: 20
    },
    settings: {
        borderWidth: 1,
        borderColor: "grey",
        height: 320,
        width: 250,
        marginTop: 10,
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
        paddingLeft: 7
    },
    cancel:{
        position: 'relative',
        bottom: 2, 
        left: 100,
        color: COLORS.red_error,
        fontWeight: 'bold',
        fontSize: 16
    },
    imgContainer: {
        alignItems: 'center',
    },
    img: {
        width: 120, 
        height: 120,
        borderRadius: 70,
        position: 'relative',
        bottom: 7,
        borderWidth: 2,
        borderColor: COLORS.primary_pink

    }
    
})

export default Profile;