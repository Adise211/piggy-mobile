import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Balance from './screens/Balance';
import { COLORS } from './components/constants';
import Register from './screens/Register';
import Report from './screens/Report';
import AuthContextProvider from './store/authContext';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
      <Tabs.Navigator>
        <Tabs.Screen 
          name='Home' 
          component={Home}
          options={{ 
            tabBarIcon: ({color,size}) => <Ionicons name='home-outline' color={color} size={size} /> ,
            headerShown: false
          }}
          />
        <Tabs.Screen 
          name='Report' 
          component={Report}
          options={{ tabBarIcon: ({color,size}) => <Ionicons name='receipt-outline' color={color} size={size} />,
          headerShown: false
          }}
          />
        <Tabs.Screen 
          name='Balance' 
          component={Balance}
          options={{ tabBarIcon: ({color,size}) => <Ionicons name='bar-chart-outline' color={color} size={size} />,
          headerShown: false
          }}
          />
          <Tabs.Screen 
          name='Profile' 
          component={Profile} 
          options={{ tabBarIcon: ({color,size}) => <Ionicons name='person-outline' color={color} size={size} />,
          headerShown: false
          }}
        />
      </Tabs.Navigator>
    
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
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
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
 
});
