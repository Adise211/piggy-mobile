import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from 'react-native-progress/Bar';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../components/constants";
import SaveButton from "../UI/SaveButton";

const ViewBudget = ({ route, navigation }) => {
    const [per,setPer] = useState(0);
    const [color,setColor] = useState("#007AFF");
    const { budgetInfo } = route.params;
    const used = 200;
    const remain = budgetInfo.amount - used;

    const percentage = () => {
        const result = (100 * used) / budgetInfo.amount;
        setPer(result / 100);
    }

    useEffect(() => {
        if (budgetInfo) percentage();
    },[])

    useEffect(() => {
        if (per < 0.5 ) {
            setColor("#6fbf73");
        }
        else if ( 0.5 < per && per < 0.8) {
            setColor("#ffc400");
        }
        else if (per >= 0.8) {
            setColor("#ff1744");
        } 
        
    },[per])

    const remainColor = remain < 0 ? "red": "black";

    const onPressEdit = () => {
        navigation.navigate('EditBudget', {
            budget: budgetInfo
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.field}>{budgetInfo.fieldName}</Text>
            <Text style={styles.amount}>${budgetInfo.amount}</Text>
            <View style={styles.infoSection}>
                <Text style={styles.text}>Used: - ${used}</Text>
                <Text style={[styles.text, { color: remainColor } ]}>Remain: ${remain}</Text>
                <Text style={styles.text}>Left Days: {"21"}</Text>
                <ProgressBar 
                    width={300} 
                    height={30} 
                    progress={per} 
                    unfilledColor={'white'}
                    borderWidth={2}
                    borderRadius={10}
                    borderColor={color}
                    color={color}
                    style={{ marginTop: 30 }}
                />
                <Text style={[styles.text, { fontWeight: 'bold' }]}>{(per * 100).toFixed(2) + '%'}</Text>
                <View style={styles.settings}>
                    <Ionicons name="checkmark" size={22} style={styles.icon}/><Text style={styles.text}>Send me a warning notefication</Text>
                    <Ionicons name="checkmark" size={22} style={styles.icon}/><Text style={styles.text}>Send me an error notefication</Text>
                    <Ionicons name="checkmark" size={22} style={styles.icon}/><Text style={styles.text}>Remind me to use this budget</Text>
                </View>
                <View style={styles.buttonsContainer}>
                <SaveButton style={styles.delete} onPress={() => onPressEdit()}>Edit</SaveButton>
            </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        alignItems: 'center'
    },
    field: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    amount: {
        fontSize: 20,
        marginTop: 10
    },
    infoSection: {
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        fontSize: 18,
        marginTop: 5
    },
    settings: {
        marginTop: 30,
        fontSize: 18,
    },
    icon: {
        position: 'relative',
        top: 30,
        right: 25
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        position: 'relative',
        top: 50
    },
    delete: {
        padding: 10,
        backgroundColor: COLORS.BLUE_500,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default ViewBudget;