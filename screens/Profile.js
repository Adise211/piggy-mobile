import { Text, View, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile page ...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }
})

export default Profile;