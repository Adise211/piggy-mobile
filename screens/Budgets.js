import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Budgets = () => {

    const currency = '$';
    const budget = [
        {   
            id: 1,
            fieldName: 'Food',
            amount: 1500,
            icon: 'fast-food'
        },
        {
            id: 2,
            fieldName: 'Car',
            amount: 430,
            icon: 'car'
        },
        {
            id: 3,
            fieldName: 'Rent',
            amount: 2100,
            icon: 'home'
        },
        {
            id: 4,
            fieldName: 'TV',
            amount: 139,
            icon: 'tv'
        },
        {
            id: 5,
            fieldName: 'Sport',
            amount: 100,
            icon: 'barbell'
        },
        {
            id: 6,
            fieldName: 'Health',
            amount: 300,
            icon: 'fitness'
        },
        {
            id: 7,
            fieldName: 'Shopping',
            amount: 320,
            icon: 'cart'
        },
        {
            id: 8,
            fieldName: 'Leisure',
            amount: 320,
            icon: 'happy'
        },


    ];
    
    const renderBudgetCard = (item) => {
        return (
            <View style={styles.container} key={item.id}>
                <Text style={styles.title}>{item.fieldName}</Text>
                <Text style={styles.amount}>{currency}{item.amount}</Text>
                <View style={styles.icons}>
                    <Ionicons name={item.icon} size={24} />
                </View>
            </View>
        )
    }


    return (
        <View>
            <View style={styles.cardsContainer}>
                {/* <FlatList 
                    style={styles.list}
                    data={budget}
                    renderItem={renderBudgetCard}
                /> */}
                {budget.map((item) => {
                    return renderBudgetCard(item)
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardsContainer: {
        flex: 1,
        marginTop: 50,
        minHeight: 800,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    container: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 10,
        elevation: 8,
        marginBottom: 10,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
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
        textAlign: 'center'
    },
    icons: {
        alignItems: 'center',
        position: 'relative',
        bottom: 20
    }
});

export default Budgets;