import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from 'react-native-progress/Bar';


const ViewBudget = ({ route }) => {
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

    return (
        <View style={styles.container}>
            <Text style={styles.field}>{budgetInfo.fieldName}</Text>
            <Text style={styles.amount}>${budgetInfo.amount}</Text>
            <Text>Used: ${used}</Text>
            <Text>Remain: ${remain}</Text>
            <ProgressBar 
                width={300} 
                height={30} 
                progress={per} 
                unfilledColor={'white'}
                borderWidth={2}
                borderRadius={10}
                borderColor={color}
                color={color}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center'
    },
    field: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    amount: {
        fontSize: 20,
        marginTop: 10
    }
})

export default ViewBudget;