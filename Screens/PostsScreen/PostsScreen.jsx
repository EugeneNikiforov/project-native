import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import logoutIcon from '../../assets/icons/logout.png';
import { EvilIcons } from '@expo/vector-icons';
import { authSignOutUser } from "../../redux/auth/authOperations";
import { getFirestore, collection, query, onSnapshot } from "firebase/firestore";
import app from "../../config/firebase";

const db = getFirestore(app);

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const { login, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const allPosts = [];
      querySnapshot.forEach((doc) => {
        allPosts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(allPosts);
    });
    return () => {
      unsubscribe();
    };
  }, []);
    
  const handleLogout = () => {
    dispatch(authSignOutUser());
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout}>
          <Image source={logoutIcon} style={{ width: 24, height: 24, marginRight: 16 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("../../assets/user.jpg")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Логин {login}</Text>
          <Text style={styles.userEmail}>Почта {email}</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.postsWrapper}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: item.photo }}
                  style={{ width: 343, height: 240 }}
                />
              </View>
              <View style={styles.postMainInfo}>
                <Text style={styles.postName}>{item.name}</Text>
                <View style={styles.postInfo}>
                  <View style={{ flexDirection: "row", marginLeft: -7 }}>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() =>
                        navigation.navigate("CommentsScreen", {
                          photo: item.photo,
                          postId: item.id,
                        })
                      }
                    >
                      <EvilIcons name="comment" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.commentsNumber}>1</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() =>
                        navigation.navigate("MapScreen", { location: item.location })
                      }
                    >
                      <EvilIcons name="location" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.postLocation}>{item.country}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#808080",
    borderTopWidth: 1,
  },
  userWrapper: {
    marginTop: 32,
    marginLeft: 16,
    flexDirection: "row",
  },
  userInfo: { marginLeft: 8 },
  userName: {
    fontSize: 13,
    fontFamily: "Roboto-500",
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontSize: 11,
    fontFamily: "Roboto-400",
    lineHeight: 13,
    color: "#212121",
  },
  postsWrapper: {
    marginHorizontal: 32,
    marginTop: 32,
  },

  postInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  commentsNumber: {
    marginRight: 50,
    fontFamily: "Roboto-400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  postName: {
    fontFamily: "Roboto-500",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
    marginBottom: 8,
  },
  postLocation: {
    fontFamily: "Roboto-400",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  }
})