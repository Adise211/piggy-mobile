import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "./constants";
import SaveButton from "../UI/SaveButton";

const ReportIncome = ({ setReport }) => {
    return (
        <View>
            <Text>Report income</Text>
            <SaveButton style={styles.cancel} onPress={() => setReport(null)}>Cancel</SaveButton>
        </View>
    );
};

const styles = StyleSheet.create({
    cancel: {
        position: 'relative',
        bottom: 2, 
        left: 100,
        color: COLORS.red_error,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ReportIncome;