import { View, Text, StyleSheet, Pressable } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../components/constants";



const PrimaryButton = ({ children, onPress, coverColor, borderColor }) => {

    return (
        <Pressable onPress={onPress}>
            <View style={[styles.button, {backgroundColor: coverColor, borderColor:borderColor }]}>
                <Text style={styles.label}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        padding: 12,
        borderRadius: 8
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
        color: COLORS.white
    }
})

export default PrimaryButton;