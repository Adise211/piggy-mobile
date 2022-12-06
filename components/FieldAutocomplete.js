import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { fieldOptions } from "./constants";



const FieldAutocomplete = () => {
    return (
        <View>
            <ScrollView>
                {/* {console.log("list ==>", fieldOptions.map(x=> x.name))} */}
                {fieldOptions.map((item) => {
                    return (
                        <View key={item.id}>
                            <Text>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
};

export default FieldAutocomplete();