import { TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ children, color, styleInput }) => {
    return (
        <>
        <Text>{children}</Text>
        <TextInput style={[styles.oneInput, { backgroundColor: color }, {...styleInput} ]}/>
        </>
    );
};

const styles = StyleSheet.create({
    oneInput: {
        height: 50,
        borderWidth: 1,
        width: 250,
        marginBottom: 20,
        borderRadius: 8,
        padding: 10
    }
})

export default Input;