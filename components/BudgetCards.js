import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from './constants';



const BudgetCards = ({ children, onPress, amount }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text>{children}</Text>
                {amount}
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        // borderWidth: 0.5,
        width: 150,
        height: 150,
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 10,
        elevation: 8,
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        textAlign: 'center',
        position: 'relative',
        bottom: 20
    },
    pressed: {
        backgroundColor: COLORS.primary_pink
    }
});

export default BudgetCards;