import { StatusBar } from 'expo-status-bar';
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
import Budgets from './screens/Budgets';
import Expenses from './screens/Expenses';
import Incomes from './screens/Incomes';
import Notes from './screens/Notes';
import AuthContextProvider from './store/authContext';
import EditAddBudgets from './screens/EditAddBudgets';
import ViewBudget from './screens/ViewBudget';
import IncomeOutcome from './screens/IncomeOutcome';
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
            <Stack.Screen 
              name='Mypage' 
              component={TabsNavigator} 
              options={{ 
                title: " " 
              }}
            />
            <Stack.Screen 
              name='BUDGETS' 
              component={Budgets} 
              options={{ 
                headerTitleAlign: 'center', 
                title: 'Budgets'
              }}
            />
            <Stack.Screen name='EXPENSES' component={Expenses} options={{ headerTitleAlign: 'center' }}/>
            <Stack.Screen name='INCOMES' component={Incomes} options={{ headerTitleAlign: 'center' }}/>
            <Stack.Screen name='NOTES' component={Notes} options={{ headerTitleAlign: 'center' }}/>
            <Stack.Screen name='EditBudget' component={EditAddBudgets} options={{ title: ' ' }}/>
            <Stack.Screen name='ViewBudget' component={ViewBudget} options={{ title: 'View Budget', headerTitleAlign: 'center'  }}/>
            <Stack.Screen name='Report' component={IncomeOutcome} options={{ title: 'Report', headerTitleAlign: 'center'  }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}


