import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import * as Haptics from 'expo-haptics';
import { budgets } from '../components/constants';


const Budgets = ({ navigation }) => {

    const addHandler = () => {
        navigation.navigate('EditBudget');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title='ADD' onPress={addHandler}/>
            }
        });
        
    },[navigation,addHandler])

    const onBudgetPressView = () => {
        navigation.navigate('ViewBudget');
    };

    // const handleEditBudget = () => {
    //     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    //     Alert.alert(
    //         'Edit Budget', 'Do you want to edit the budget?',
    //             [
    //               { text: 'No' },  
    //               { text: 'Yes', onPress: () => console.log("Edit budget!") }
    //             ]
    //     )
    // };

    const currency = '$';
    
    const renderBudgetCard = (item) => {
        return (
            <View style={styles.container} key={item.id}>
                <Text style={styles.title} onPress={() => onBudgetPressView()}>{item.fieldName}</Text>
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
                {budgets.map((item) => {
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