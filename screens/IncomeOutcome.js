import { View, StyleSheet } from "react-native";
import SaveButton from "../UI/SaveButton";
import { COLORS } from "../components/constants";
import ReportIncome from "../components/ReportIncome";
import ReportOutcome from "../components/ReportOutcome";

const IncomeOutcome = ({ route }) => {
    const { reportType } = route.params;

    // const goBackHandler = () => {
    //     navigation.goBack('Report');
    // };

    return (
        <View style={styles.container}>
            <View>
                {reportType === 'income' ? (
                    <ReportIncome />
                ): (
                    <ReportOutcome />
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    // back: {
    //     padding: 10,
    //     backgroundColor: COLORS.BLUE_500,
    //     color: 'white',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     width: 100,
    //     textAlign: 'center',
    //     borderRadius: 8,
    //     elevation: 5
    // },
})

export default IncomeOutcome;