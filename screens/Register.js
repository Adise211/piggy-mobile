import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { COLORS } from '../components/constants';
import PrimaryButton from '../UI/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { createUser } from '../api/auth';
import { useContext, useState } from 'react';
import WelcomeNewUser from '../components/WelcomeNewUser';
import { AuthContext } from '../store/authContext';





const Register = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [notValidMessage, setNotValidMessage] = useState({
        field: '',
        message: ''
    });
    const [user, setUser] = useState(null);
    const authCtx = useContext(AuthContext);

    const backToSignIn = () => {
        navigation.replace('SIGN-IN')
    };

    // TO DO: Validation, approved that user was created.
    const createNewUserHandler = async () => {
        const validEmail = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const validPassword = password.length >= 6;
        const validFullName = !null;

        if (!validEmail) setNotValidMessage({field:'email', message:'Please check your email!'});
        if (!validPassword) setNotValidMessage({field: 'password', message: 'Password length has to be more than 6 figures!'});
        if (!validFullName) setNotValidMessage({field:'fullName',message: 'Please make sure your full name is correct!'})

        if (validEmail && validPassword && validFullName) {
            setNotValidMessage({field: '', message: ''});

            const {data} = await createUser(email, password, fullName);
            console.log("data from front", data);
            authCtx.authenticate(data.idToken)
            authCtx.createUserInfo(data)
            setUser(data.email)
        }
        
    }

    return (
        <View>
            {!user ? (
                <>
                <View style={styles.formContainer}>
                  <View style={styles.inputsContainer}>
                    <Text>Full Name</Text>
                    <TextInput 
                        label= 'userFullName'
                        style={[ 
                            styles.input, 
                            notValidMessage.field === 'fullName'? styles.notValidBorder : styles.back
                        ]} 
                        autoCorrect= {false}
                        onChangeText= {(enterdValue) => setFullName(enterdValue)}  
                        value={fullName}
                    />
                    <Text>Email</Text>
                    <TextInput 
                        label= 'userEmail'
                        style={[ 
                            styles.input, 
                            notValidMessage.field === 'email'? styles.notValidBorder : styles.back
                        ]} 
                        keyboardType='email-address'
                        placeholder='Example@something.com'
                        autoComplete= 'email'
                        autoCapitalize= 'none'
                        autoCorrect= {false}
                        onChangeText= {(enterdValue) => setEmail(enterdValue)}
                        value={email}
                    />
                    <Text>Password</Text>
                    <TextInput 
                        label= 'userPassword'
                        style={[ 
                            styles.input, 
                            notValidMessage.field === 'password'? styles.notValidBorder : styles.back
                        ]} 
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText= {(enterdValue) => setPassword(enterdValue)}
                        value={password}
                    />
                    
                    <View style={styles.button}>
                    <PrimaryButton 
                        coverColor={COLORS.BLUE_500} 
                        borderColor={COLORS.BLUE_500}
                        onPress={createNewUserHandler} 
                    >
                        Register
                    </PrimaryButton>
                    </View>

                    <View>
                    <Pressable onPress={backToSignIn} style={({ pressed }) => pressed ? styles.pressed : null}>
                        <Text style={styles.signin}>Sign In</Text>
                    </Pressable>
                    </View>

                    <Text style={{color: 'red', marginTop: 5, textAlign: 'center'}}>{notValidMessage.message}</Text>
                    </View>
                 </View>
                 </>
                ) : (
                    <WelcomeNewUser />
                )}
                
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 70,
        // padding: 16,
        marginHorizontal: 20,
        backgroundColor: COLORS.white_gray,
        borderRadius: 8,
        width: 320,
        height: 350,
        alignItems: 'center',
        elevation: 8,
        justifyContent: 'center',
        height: 420
    },
    inputsContainer: {
        flexDirection: 'column',
    },
    input: {
        height: 50,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        width: 250,
        marginBottom: 20,
        borderRadius: 8,
        padding: 10
    },
    notValidBorder: {
        borderColor: 'red'
    },
    notValidMessage: {
        color: 'red', 
        marginTop: 5, 
        textAlign: 'center'
    },
    signin: {
        marginLeft: 96,
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    back: {
        borderColor: 'black'
    },

    pressed: {
        borderBottomColor:  COLORS.primary_pink,
        borderBottomWidth: 1,
        width: 150,
    },
    button: {
        width: 100,
        marginLeft: 70,
        
    }

})

export default Register;

