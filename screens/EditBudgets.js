import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Switch } from "react-native";
import { COLORS } from "../components/constants";
import FieldAutocomplete from "../components/FieldAutocomplete";
import { fieldOptions } from "../components/constants";


const EditBudgets = () => {
    const [openOptions,setOpenOptions] = useState(false);
    const [list,setList] = useState([]);
    const [selectedName,setSelectedName] = useState('');
    const [amount,setAmount] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);

    const currency = '$';
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useState(() => {
        setList(fieldOptions);
    },[])

    const onStart = () => {
        setOpenOptions(true);
    };

    const textHandler = (enterdValue) => {
        if (enterdValue !== '') {
            const findObj = list.filter(item => {
                return item.name.includes(enterdValue);
            });
            setList(findObj);
        } 
        else {
            setList(fieldOptions)
        }
    };

    const handleSelectedName = (name) => {
        setOpenOptions(false);
        setSelectedName(name);
    }

    const listHeight = list && list.length > 6 ? 250 : 100;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.lebel}>Field</Text>
                <TextInput 
                    style={styles.input} 
                    onTouchStart={onStart}
                    onChangeText={(enterdValue) => textHandler(enterdValue)}
                    value={selectedName}
                />
                {openOptions && (
                    <View style={[styles.dropdown, { height: listHeight } ]}>
                    <ScrollView>
                        {list && list.map((item) => {
                            return (
                                <Text 
                                    key={item.id} 
                                    style={[styles.fieldName]} 
                                    onPress={() => handleSelectedName(item.name)}
                                >
                                    {item.name}
                                </Text>
                            )
                        })
                        }
                    </ScrollView>
                    </View>
                )}

                <Text style={styles.lebel}>Amount</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='decimal-pad'
                    onChangeText={(enterdValue) => setAmount(enterdValue)}
                    value={amount}
                />
                <Text style={styles.currency}>{currency}</Text>
            </View>
            <View>
                <Text>Budgets Settings</Text>
                <View style={styles.toggle}>
                    <Text>Send me a warning notefication</Text>
                    <Switch 
                        trackColor={{ false: COLORS.gray , true: COLORS.pink }}
                        thumbColor={isEnabled ? COLORS.primary_pink : "#f4f3f4" }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            {/* <Text>choose icon(optinal)</Text>
            <Text>amount</Text>
            <Text>Settings: (toggles)</Text>
            <Text>1. Send me a warning notefication </Text>
            <Text>2. Send me an error notefication</Text>
            <Text>3. spesific field..</Text>
            <Text>4. currency</Text> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'column',
        alignItems: 'center'
    },
    lebel: {
        fontSize: 18,
        textAlign:'center'
    },
    input: {
        height: 50,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        width: 250,
        marginBottom: 20,
        borderRadius: 8,
        padding: 10,
        justifyContent: 'center'
    },
    dropdown: {
        borderWidth: 1,
        // height: 250,
        width: 250,
        marginTop: -22,
        borderRadius: 8,
        backgroundColor: 'white'
    },
    fieldName: {
        padding: 10,
        borderWidth: 0.2,
        fontWeight: 'bold'
    },
    currency: {
        fontSize: 18,
        position: 'relative',
        bottom: 55,
        left: 230
    },
    // toggle: {
    //     width: 200
    // }
})

export default EditBudgets;