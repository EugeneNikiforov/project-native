import 'react-native-gesture-handler';
import React, { useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
// import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import LoginScreen from './Screens/LoginScreen/LoginScreen';
// import Home from './Screens/Home/Home';
import Main from "./components/Main";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
}