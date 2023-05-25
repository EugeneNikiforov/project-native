import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen/RegistrationScreen";
import Home from "../Screens/Home/Home";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </MainStack.Navigator>
  );
};