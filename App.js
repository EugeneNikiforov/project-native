import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
// import photoBG from './assets/photoBG.png';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home/Home';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  };
  return (
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          </MainStack.Navigator>
        </NavigationContainer>
  );
}