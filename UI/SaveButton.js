import { View, Text, Pressable } from 'react-native';

const SaveButton = ({ children, onPress, style, pressedStyle }) => {
    return (
        <Pressable onPress={onPress} style={ ({ pressed }) => pressed ? pressedStyle : null }>
            <View>
                <Text style={style}>{children}</Text>
            </View>
        </Pressable>
    )
};


export default SaveButton;