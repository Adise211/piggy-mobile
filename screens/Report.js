import { View, StyleSheet } from 'react-native';
import SaveButton from '../UI/SaveButton';
import { COLORS } from '../components/constants';
import { useNavigation } from '@react-navigation/native';

const Report = () => {
    const navigation = useNavigation();
    
    const reportHandler = (report) => {
        console.log("report ==>", report);
        navigation.navigate('Report', {
            reportType: report
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <SaveButton style={styles.income} onPress={() => reportHandler('income')}>Report Income</SaveButton>
                <SaveButton style={styles.outcome} onPress={() => reportHandler('outcome')}>Report Outcome</SaveButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: '60%',
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
        position: 'relative',
    },
    income: {
        padding: 20,
        backgroundColor: COLORS.green,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        marginBottom: 30,
        borderRadius: 8,
        elevation: 5
    },
    outcome: {
        padding: 20,
        backgroundColor: COLORS.red_error,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        borderRadius: 8,
        elevation: 5
    },
})

export default Report;