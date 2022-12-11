import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Switch } from "react-native";
import { COLORS } from "../components/constants";
import FieldAutocomplete from "../components/FieldAutocomplete";
import { fieldOptions } from "../components/constants";
import SaveButton from "../UI/SaveButton";


const EditBudgets = () => {
    const [openOptions,setOpenOptions] = useState(false);
    const [list,setList] = useState([]);
    const [selectedName,setSelectedName] = useState('');
    const [amount,setAmount] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);

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
            <Text style={styles.lebel}>Budgets Settings</Text>
            <View style={styles.togglesContainer}>
                <View style={styles.toggle}>
                    <Text style={styles.toggleText}>Send me a warning notefication</Text>
                    <Switch 
                        trackColor={{ false: COLORS.gray , true: COLORS.pink }}
                        thumbColor={isEnabled ? COLORS.primary_pink : "#f4f3f4" }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ marginLeft: 30 }}
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.toggleText}>Send me an error notefication</Text>
                    <Switch 
                        trackColor={{ false: COLORS.gray , true: COLORS.pink }}
                        thumbColor={isEnabled2 ? COLORS.primary_pink : "#f4f3f4" }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabled2(!isEnabled2)}
                        value={isEnabled2}
                        style={{ marginLeft: 30 }}
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.toggleText}>Remind me to use this budget</Text>
                    <Switch 
                        trackColor={{ false: COLORS.gray , true: COLORS.pink }}
                        thumbColor={isEnabled3 ? COLORS.primary_pink : "#f4f3f4" }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabled3(!isEnabled3)}
                        value={isEnabled3}
                        style={{ marginLeft: 30 }}
                    />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                {/* <SaveButton style={styles.delete} onPress={() => {}}>Cancel</SaveButton> */}
                <SaveButton style={styles.save} onPress={() => {}}>Save</SaveButton>
            </View>
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
    togglesContainer: {
        marginTop: 10,
    },
    toggle: {
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    toggleText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        position: 'relative',
        top: 50
    },
    save: {
        padding: 10,
        backgroundColor: COLORS.primary_pink,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        width: 65,
        textAlign: 'center'
    },
    delete: {
        padding: 10,
        backgroundColor: COLORS.BLUE_500,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default EditBudgets;