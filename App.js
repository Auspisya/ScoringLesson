import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './pages/loginPage';
import { MainPage } from './pages/mainPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Авторизация">
        <Stack.Screen options={{headerShown: true}} name="Авторизация" component={LoginPage} />
        <Stack.Screen options={{headerShown: true}} name="Профиль пользователя" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}