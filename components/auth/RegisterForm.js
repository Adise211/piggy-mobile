import { View, StyleSheet } from 'react-native';
import Input from '../../UI/Input';
import { COLORS } from '../constants';




const RegisterForm = () => {
    return (
        <View style={styles.inputsContainer}>
            <Input color={COLORS.white}>Email</Input>
        </View>
    );
};

const styles = StyleSheet.create({
    inputsContainer: {
        flexDirection: 'column',
    },
})

export default RegisterForm;