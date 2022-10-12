import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Balance from './screens/Balance';
import { COLORS } from './components/constants';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Profile' component={Profile}/>
      <Tabs.Screen name='Home' component={Home}/>
      <Tabs.Screen name='Balance' component={Balance}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: COLORS.primary_pink},
            headerTintColor: COLORS.white,
          }}
        >
          <Stack.Screen name='SIGN-IN' component={SignIn} options={{ headerTitleAlign: 'center' }}/>
          <Stack.Screen name='REGISTER' component={Register} options={{ headerTitleAlign: 'center' }}/>
          <Stack.Screen name='Mypage' component={TabsNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
 
});
