import { View, StyleSheet, Text } from 'react-native';
import Cards from '../components/Cards';
import { useContext, useState } from 'react';
import { AuthContext } from '../store/authContext';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
    const authCtx = useContext(AuthContext);
    const navigation = useNavigation();
    const [style,setStyle] = useState('')
    const userName = authCtx.userInfo.displayName;


    const onBudgets = () => {
        // setStyle({backgroundColor: 'pink'});
        navigation.navigate('BUDGETS');
    };

    const onIncomes = () => {
        navigation.navigate('INCOMES');
    };

    const onExpenses = () => {
        navigation.navigate('EXPENSES');
    };

    const onNotes = () => {
        navigation.navigate('NOTES');
    };

    return (
        <>
        <View>
            <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
        </View>
        <View style={styles.cardsContainer}>
            <Cards
                iconName={'wallet-outline'}
                onPress={onBudgets}
                pressedStyle={style}
            >
                Budget
            </Cards>
            <Cards
                iconName={'arrow-down-outline'}
                onPress={onIncomes}
            >
                Incomes
            </Cards>
            <Cards
                iconName={'card-outline'}
                onPress={onExpenses}
            >
                Expenses
            </Cards>
            <Cards
                iconName={'pencil-outline'}
                onPress={onNotes}
            >
                Notes
            </Cards>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    cardsContainer: {
        marginTop: 130,
        height: 250,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        position: 'relative',
        top: 80,
        textAlign: 'center'
    }
});


export default Home;