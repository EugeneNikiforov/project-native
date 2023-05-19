import { StatusBar } from 'expo-status-bar';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import photoBG from './assets/photoBG.png';
// import LoginScreen from './Screens/LoginScreen/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[styles.scrollContainer, styles.scrollViewContent]} keyboardShouldPersistTaps="handled">
        <ImageBackground source={photoBG} resizeMode='cover' style={styles.bgndImage}>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
          <StatusBar style="auto" />
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scrollViewContent: {
    marginBottom: 32
  },
  bgndImage: {
    flex: 1,
    justifyContent: 'center'
  }
});
