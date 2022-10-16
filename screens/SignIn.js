import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { COLORS } from '../components/constants';
import PrimaryButton from '../UI/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    const signinPressHandler = () => {
        console.log('You pressed me!');
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
                />
                <Text>Password</Text>
                <TextInput 
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}

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