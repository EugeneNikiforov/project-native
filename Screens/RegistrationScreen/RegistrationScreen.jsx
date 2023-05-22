import React, { useState } from 'react';
import { ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  View, Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet } from 'react-native';
import photoBG from '../../assets/photoBG.png';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginFocus, setShowLoginFocus] = useState(false);
  const [showEmailFocus, setShowEmailFocus] = useState(false);
  const [showPasswordFocus, setShowPasswordFocus] = useState(false);
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const navigation = useNavigation();

  const handleLoginFocus = () => {
    setShowLoginFocus(true);
    // setIsShowKeyboard(true);
  };
  const handleLoginBlur = () => {
    setShowLoginFocus(false);
    // setIsShowKeyboard(false);
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

  const handleRegistration = () => {
    navigation.navigate("Home");
    // console.log("Login > ", login, "  email > ", email, "  password > ", password);
  };

  const toLogin = () => {
    navigation.navigate("Login");
  };

  const handleAddPhoto = () => {
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.containerOuter} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[styles.scrollContainer, styles.scrollViewContent]} keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
      <ImageBackground source={photoBG} resizeMode='cover' style={styles.bgndImage}>
    <View style={styles.form}>
      <View style={styles.userPhotoView}>
        {photo && <Image source={{ uri: photo }} style={styles.userPhoto} />}
        <TouchableOpacity onPress={handleAddPhoto} style={styles.userPhotoAdd}>
          <Image source={require('../../assets/add.png')}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Регистрация</Text>
      <TextInput
        style={[styles.loginField,
          showLoginFocus && styles.fieldFocus]}
        onChangeText={setLogin}
        value={login}
        placeholder="Логин"
        placeholderTextColor="#BDBDBD"
        onFocus={handleLoginFocus}
        onBlur={handleLoginBlur}
      />
      <TextInput
        style={[
          styles.emailField,
          showEmailFocus && styles.fieldFocus]}
        onChangeText={setEmail}
        value={email}
        placeholder="Адрес электронной почты"
        placeholderTextColor="#BDBDBD"
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />
      <View style={[
          { flexDirection: 'row', alignItems: 'center' },
          showPasswordFocus && styles.fieldFocus
        ]}>
        <TextInput
          style={[
            styles.passField,
            showPasswordFocus && styles.fieldFocus
          ]}
          onChangeText={setPassword}
          value={password}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={!showPassword}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
        <TouchableOpacity onPress={handleToggleShowPassword} style={styles.passIndicator}>
          <Text style={styles.passIndicatorText}>{showPassword ? 'Приховати' : 'Показати'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegistration} style={styles.btnRegister}>
        <Text style={styles.btnRegisterText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toLogin} style={styles.linkLogin}>
        <Text style={styles.linkLoginText}>Уже есть аккаунт? Войти</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
  
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
      width: '100%', height: 549, 
      backgroundColor: '#fff', 
      padding: 16,
      marginTop: 263,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25 
    },
    userPhotoView: {
      width: 120,
      height: 120,
      backgroundColor: '#F6F6F6',
      marginTop: -76,
      borderRadius: 16,
      position: 'relative'
    },
    userPhoto: {
      width: 120, height: 120
    },
    userPhotoAdd: {
      position: 'absolute',
      right: -12,
      bottom: 14
    },
    header: {
      fontFamily: 'Roboto-500', 
      fontSize: 30,
      lineHeight: 35,
      textAlign: 'center',
      color: '#212121',
      paddingTop: 32,
      marginBottom: 24
    },
    loginField: {
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
    btnRegister: {
      width: '100%',
      backgroundColor: '#FF6C00',
      padding: 16,
      borderRadius: 100,
      marginTop: 43
    },
    btnRegisterText: {
      fontFamily: 'Roboto-400', 
      fontSize: 16, 
      lineHeight: 19,
      textAlign: 'center',
      color: '#FFF'
    },
    linkLogin: {
      marginTop: 16
    },
    linkLoginText: {
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