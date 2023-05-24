import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import logoutIcon from '../../assets/icons/logout.png';
import PostsScreenNav from '../PostsScreen/PostScreenNav';
// import CommentsScreen from '../CommentsScreen/CommentsScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
      <Tab.Navigator
        initialRouteName="PostsScreenNav"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'PostsScreenNav') {
                  iconName = focused ? 'appstore-o' : 'appstore-o';
                } else if (route.name === 'CreatePostsScreen') {
                  iconName = focused ? 'plus' : 'plus';
                } else if (route.name === 'ProfileScreen') {
                  iconName = focused ? 'user' : 'user';
                }
    
                return <AntDesign name={iconName} size={size} color={color} />;
              },
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
            paddingHorizontal: 70,
          },
          tabBarItemStyle: {
            width: 70,
            height: 40,
            borderRadius: 20,
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#212121',
        }}
      >
        <Tab.Screen name="PostsScreenNav" component={PostsScreenNav} options={{ headerShown: false }} />
        <Tab.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{ title: "Создать публикацию",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          } }} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
};

export default Home;
