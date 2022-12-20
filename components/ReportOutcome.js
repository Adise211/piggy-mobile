import { View, Text, StyleSheet, TextInput } from "react-native";
import { budgets, COLORS } from "./constants";
import SaveButton from "../UI/SaveButton";
import { useState } from "react";


const ReportOutcome = () => {
    const [pressedCat,setPressedCat] = useState(null);

    const changeColor = (id) => {
        console.log("cliked me!",id);
        setPressedCat(id);
    };

    return (
        <View style={styles.ouContainer}>
            <Text style={styles.title}>Add Your Expense</Text>
            <View style={styles.inputs}>
            <Text>Category:</Text>
                <View style={styles.catCards}>
                    {budgets.map(budg => {
                        return <SaveButton 
                                    key={budg.id} 
                                    style={[styles.card]} 
                                    onPress={() => changeColor(budg.id)}
                                    pressedStyle={{ backgroundColor: COLORS.red_error }}
                                >
                                    {budg.fieldName}
                                </SaveButton>
                    })}
                </View>
                <Text>Title:</Text>
                <TextInput style={styles.input} placeholder="Shoes"/>
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
    ouContainer: {
        marginTop: 40
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
    catCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxHeight: 80,
        width: 300,
        marginVertical: 'auto',
        marginBottom: 40,
        marginTop: 10
    },
    card: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 8,
        elevation: 5,
        padding: 10,
        margin: 5
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

export default ReportOutcome;