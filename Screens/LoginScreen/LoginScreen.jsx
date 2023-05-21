import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import photoBG from '../../assets/photoBG.png';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailFocus, setShowEmailFocus] = useState(false);
  const [showPasswordFocus, setShowPasswordFocus] = useState(false);
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailFocus = () => {
    setShowEmailFocus(true);
    // setIsShowKeyboard(true);
  };
  const handleEmailBlur = () => {
    setShowEmailFocus(false);
    // setIsShowKeyboard(false);
  };
  const handlePasswordFocus = () => {
    setShowPasswordFocus(true);
    // setIsShowKeyboard(true);
  };
  const handlePasswordBlur = () => {
    setShowPasswordFocus(false);
    // setIsShowKeyboard(false);
  };

  const handleLogin = () => {
    console.log("email --> ", email, "  password --> ", password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.containerOuter} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[styles.scrollContainer, styles.scrollViewContent]} keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
      <ImageBackground source={photoBG} resizeMode='cover' style={styles.bgndImage}>
    <View style={styles.form}>
      <Text style={styles.header}>Войти</Text>
      <TextInput
        placeholder="Адрес электронной почты"
        placeholderTextColor="#BDBDBD"
        value={email}
        onChangeText={setEmail}
        style={[
          styles.emailField,
          showEmailFocus && styles.fieldFocus]}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />
      <View style={[
          { flexDirection: 'row', alignItems: 'center' },
          showPasswordFocus && styles.fieldFocus
        ]}>
        <TextInput
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          value={password}
          onChangeText={setPassword}
          style={[
            styles.passField,
            showPasswordFocus && styles.fieldFocus
          ]}
          secureTextEntry={!showPassword}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
        <TouchableOpacity onPress={handleToggleShowPassword} style={styles.passIndicator}>
          <Text style={styles.passIndicatorText}>{showPassword ? 'Сховати' : 'Показати'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkRegister}>
        <Text style={styles.linkRegisterText}>Нет аккаунта? Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerOuter: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scrollViewContent: {
    marginBottom: 32
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgndImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    width: '100%', height: 489, 
    backgroundColor: '#fff', 
    padding: 16,
    marginTop: 323,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25 
  },
  header: {
    fontFamily: 'Roboto-500', 
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
    paddingTop: 16,
    marginBottom: 24
  },
  emailField: {
    padding: 16, 
    width: '100%', 
    fontFamily: 'Roboto-400', 
    fontSize: 16, 
    lineHeight: 19,
    color: '#212121', 
    borderWidth: 1, 
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderStyle: 'solid'
  },
  passField: {
    padding: 16, 
    width: '100%', 
    fontFamily: 'Roboto-400', 
    fontSize: 16, 
    lineHeight: 19,
    color: '#212121', 
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderStyle: 'solid'
  },
  passIndicator: {
    position: 'absolute', 
    top: 22, right: 16
  },
  passIndicatorText: {
    fontFamily: 'Roboto-400', 
    fontSize: 16, 
    lineHeight: 19,
    color: '#1B4371'
  },
  btnLogin: {
    width: '100%',
    backgroundColor: '#FF6C00',
    padding: 16,
    borderRadius: 100,
    marginTop: 43
  },
  btnLoginText: {
    fontFamily: 'Roboto-400', 
    fontSize: 16, 
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFF'
  },
  linkRegister: {
    marginTop: 16
  },
  linkRegisterText: {
    fontFamily: 'Roboto-400', 
    fontSize: 16, 
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371'
  },
  fieldFocus: {
    backgroundColor: '#fff',
    borderColor: '#FF6C00',
  }
})
