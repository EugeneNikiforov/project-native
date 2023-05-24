import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../MapScreen/MapScreen";
import CommentsScreen from "../CommentsScreen/CommentsScreen";
import ProfileScreenMarkup from "./ProfileScreenMarkup";

const ProfileStack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="ProfileScreenMarkup"
        component={ProfileScreenMarkup}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Карта",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
        }}
      />
      <ProfileStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileScreen;