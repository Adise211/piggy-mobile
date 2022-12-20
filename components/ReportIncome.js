import { View, Text, StyleSheet, TextInput } from "react-native";
import { COLORS } from "./constants";
import SaveButton from "../UI/SaveButton";
import { budgets } from "./constants";

const ReportIncome = () => {
    return (
        <View style={styles.inContainer}>
            <Text style={styles.title}>Add Your Income</Text>
            <View style={styles.inputs}>
                <Text>Title:</Text>
                <TextInput style={styles.input} placeholder="Salary"/>
                <Text>Amount:</Text>
                <TextInput style={styles.input} />
                <Text>Date:</Text>
                <TextInput style={styles.input} placeholder="DD/MM/YYYY"/>
            </View>
            <View style={styles.buttonsContainer}>
                <SaveButton style={styles.save}>Save</SaveButton>
                {/* <SaveButton style={styles.back} onPress={() => goBackHandler()}>Back</SaveButton> */}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    inContainer: {
        marginTop: 50
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom: 40
    },
    inputs: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30
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
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    save: {
        padding: 10,
        backgroundColor: COLORS.primary_pink,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        width: 100,
        textAlign: 'center',
        borderRadius: 8,
        elevation: 5
    },
})

export default ReportIncome;