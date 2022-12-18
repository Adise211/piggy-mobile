import { View, Text, StyleSheet } from "react-native";
import SaveButton from "../UI/SaveButton";
import { COLORS } from "../components/constants";

const IncomeOutcome = ({ route, navigation }) => {
    const { reportType } = route.params;

    const goBackHandler = () => {
        navigation.goBack('Report');
    };

    return (
        <View style={styles.container}>
            <Text>My report is .... {reportType}</Text>
            <View style={styles.buttonsContainer}>
                <SaveButton style={styles.save}>Save</SaveButton>
                {/* <SaveButton style={styles.back} onPress={() => goBackHandler()}>Back</SaveButton> */}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        position: 'relative',
        left: 80
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