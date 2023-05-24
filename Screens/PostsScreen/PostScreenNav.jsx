import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../PostsScreen/PostsScreen";
import CommentsScreen from "../CommentsScreen/CommentsScreen";
import MapScreen from "../MapScreen/MapScreen";

const Posts = createStackNavigator();

const PostsScreenNav = () => {

  return (
    <Posts.Navigator>
      <Posts.Screen
        name="PostsScreen"
        options={{
          title: "Публикации",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          }
        }}
        component={PostsScreen}
      />
      <Posts.Screen
        options={{
          title: "Комментарии",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
        }}
        name="CommentsScreen"
        component={CommentsScreen}
      />
      <Posts.Screen
        options={{
          title: "Карта",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
        }}
        name="MapScreen"
        component={MapScreen}
      />
    </Posts.Navigator>
  );
};

export default PostsScreenNav;