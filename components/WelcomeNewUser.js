
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants';
import { useNavigation } from '@react-navigation/native';


const WelcomeNewUser = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Mypage')
        }, 5000);
    })

    return (
        <View style={styles.welcomeContainer}>
            <Ionicons name='checkmark-done-circle-outline' size={120} color={COLORS.primary_pink}/>
            <Text style={styles.text}>Registered Successfully!</Text>
            <Text style={styles.wait}>Just a minute...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 200
    },

    text: {
        color: COLORS.primary_pink,
        fontWeight: 'bold',
        fontSize: 24
    },
    wait: {
        fontSize: 16,
        marginTop: 5
    }

});

export default WelcomeNewUser;