import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './pages/loginPage';
import { MainPage } from './pages/mainPage';
import { RegPage } from './pages/regPage';
import { AdminPage } from './pages/adminPage';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Авторизация">
        <Stack.Screen options={{headerShown: true}} name="Авторизация" component={LoginPage} />
        <Stack.Screen options={{headerShown: true}} name="Профиль клиента" component={MainPage} />
        <Stack.Screen options={{headerShown: true}} name="Регистрация" component={RegPage} />
        <Stack.Screen options={{headerShown: true}} name="Профиль администратора" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}