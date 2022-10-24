import { View, StyleSheet, TextInput, Text, Pressable, Alert } from 'react-native';
import { useState, useContext } from 'react';
import { COLORS } from '../components/constants';
import PrimaryButton from '../UI/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { signInUser } from '../api/auth';
import { AuthContext } from '../store/authContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const authCtx = useContext(AuthContext);


    const signinPressHandler = async () => {
        try {
            // TO DO : Invalid email / wrong password message
            const token = await signInUser(email, password);
            authCtx.authenticate(token);
            if (token) {
                navigation.replace('Mypage')
            } else {
                console.log("something went wrong");
            }

        } catch (error) {
            Alert.alert('User Not Exist', 'Please check your password or email and try again later.')
            console.log("The error",error);
        }
    };

    const registerButtonHandler = () =>{
        navigation.replace('REGISTER')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <Text>Email</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    placeholder='Example@something.com'
                    autoComplete='email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(enterdValue) => setEmail(enterdValue)}
                />
                <Text>Password</Text>
                <TextInput 
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(enterdValue) => setPassword(enterdValue)}
                />
            </View>
            <View>
                <PrimaryButton 
                    onPress={signinPressHandler} 
                    coverColor={COLORS.primary_pink} 
                    borderColor= {COLORS.primary_pink}
                >
                    Sign In
                </PrimaryButton>
                <Pressable onPress={registerButtonHandler} style={({ pressed }) => pressed ? styles.pressed : null}>
                    <Text style={styles.register}>Register</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       marginTop: 100,
       padding: 16,
       marginHorizontal: 20,
       backgroundColor: COLORS.white_gray,
       borderRadius: 8,
       width: 320,
       height: 350,
       alignItems: 'center',
       elevation: 8,
       justifyContent: 'center'
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
   
   register: {
    marginLeft: 8,
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold'
   },

   pressed: {
     borderBottomColor:  COLORS.BLUE_500,
     borderBottomWidth: 1,
   }
})

export default SignIn;