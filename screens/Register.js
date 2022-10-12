import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { COLORS } from '../components/constants';
// import Input from '../UI/Input';
import PrimaryButton from '../UI/PrimaryButton';




const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <Text>Email</Text>
                <TextInput 
                    style= {styles.input}
                    keyboardType='email-address'
                    placeholder='Example@something.com'
                    autoComplete= 'email'
                    autoCapitalize= 'none'
                    autoCorrect= {false}
                        
                />
                <Text>Password</Text>
                <TextInput 
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <Text>Nick Name</Text>
                <TextInput 
                    style={styles.input} 
                    autoCapitalize= 'none'
                    autoCorrect= {false}
                    placeholder='Nick-Nick'                
                />
                <PrimaryButton 
                    onPress={() => {}} 
                    coverColor={COLORS.BLUE_500} 
                    borderColor={COLORS.BLUE_500}
                    style={styles.button}
                >
                    Register
                </PrimaryButton>

                <Pressable onPress={() => {}} style={({ pressed }) => pressed ? styles.pressed : null}>
                    <Text style={styles.signin}>Sign In</Text>
                </Pressable>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        // padding: 16,
        marginHorizontal: 20,
        backgroundColor: COLORS.white_gray,
        borderRadius: 8,
        width: 320,
        height: 350,
        alignItems: 'center',
        elevation: 8,
        justifyContent: 'center',
        height: 400
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
    signin: {
        marginLeft: 8,
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    
    pressed: {
        borderBottomColor:  COLORS.primary_pink,
        borderBottomWidth: 1,
        width: 100
    },
    button: {
        textAlign: 'center'
    }
})

export default Register;