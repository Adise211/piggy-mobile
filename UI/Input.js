import { TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ children, color, styleInput, onChangeText, value  }) => {
    return (
        <>
        <Text>{children}</Text>
        <TextInput 
            style={[styles.oneInput, { backgroundColor: color }, {...styleInput} ]} 
            onChangeText={onChangeText}
            value={value}
        />
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