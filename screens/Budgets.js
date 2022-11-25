import { View, Text, StyleSheet, FlatList } from 'react-native';
import BudgetCards from '../components/Cards';

const Budgets = () => {

    const currency = '$';
    const budget = [
        {
            fieldName: 'Food',
            amount: 1500
        },
        {
            fieldName: 'Car',
            amount: 430
        },
        {
            fieldName: 'Rent',
            amount: 2100
        },

    ];
    
    const renderBudgetCard = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{item.fieldName}</Text>
                <Text style={styles.amount}>{item.amount}{currency}</Text>
            </View>
        )
    }


    return (
        <View>
            <View style={styles.cardsContainer}>
                <FlatList 
                    data={budget}
                    renderItem={renderBudgetCard}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardsContainer: {
        marginTop: 50
        
    },
    container: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 10,
        elevation: 8,
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        marginBottom: 'auto',
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold'
    },
    amount: {
        fontSize: 18,
        marginBottom: 40,
        // marginLeft: 20
        textAlign: 'center'
    }
});

export default Budgets;