import { View, Text } from "react-native";

const IncomeOutcome = ({ route }) => {
    const { reportType } = route.params;
    return (
        <View>
            <Text>My report is .... {reportType}</Text>
        </View>
    )
};

export default IncomeOutcome;