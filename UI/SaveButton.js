import { View, Text, Pressable } from 'react-native';

const SaveButton = ({ children, onPress, style }) => {
    return (
        <Pressable onPress={onPress}>
            <View>
                <Text style={style}>{children}</Text>
            </View>
        </Pressable>
    )
};


export default SaveButton;