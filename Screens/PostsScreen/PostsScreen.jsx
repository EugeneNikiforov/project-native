import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import logoutIcon from '../../assets/icons/logout.png';
import { useNavigation } from '@react-navigation/native';
// import { MediaLibrary } from 'expo-media-library';
import { PhotoContext } from '../CreatePostsScreen/CreatePostsScreen';
import { EvilIcons } from '@expo/vector-icons';

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const photoPath = useContext(PhotoContext);
  const navigationLogout = useNavigation();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const { assets } = await MediaLibrary.getAssetsAsync({ mediaType: 'photo' });
  //       const storedPosts = assets.map(asset => ({ id: asset.id, photo: asset.uri }));
  //       setPosts(storedPosts);
  //     } catch (error) {
  //       console.log('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);
    
  const handleLogout = () => {
    navigationLogout.navigate("Login");
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
    <ScrollView style={styles.container}>
      <View style={styles.userWrapper}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("../../assets/user.jpg")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Зоя Жорівна</Text>
          <Text style={styles.userEmail}>privet@zoya.com</Text>
        </View>
      </View>
      <View>
            <View style={styles.postsWrapper}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/postForest.jpg")}
                  style={{ width: 343, height: 240 }}
                />
              </View>
              <View style={styles.postMainInfo}>
                <Text style={styles.postName}>Ліс</Text>
                <View style={styles.postInfo}>
                  <View style={{ flexDirection: "row", marginLeft: -7 }}>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => navigation.navigate("CommentsScreen")}
                    >
                      <EvilIcons name="comment" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.commentsNumber}>0</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => navigation.navigate("MapScreen")}
                    >
                      <EvilIcons name="location" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.postLocation}>Ivano-Frankivs'k Region, Ukraine</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.postsWrapper}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/postDusk.jpg")}
                  style={{ width: 343, height: 240 }}
                />
              </View>
              <View style={styles.postMainInfo}>
                <Text style={styles.postName}>Захід Cонця в українському Криму</Text>
                <View style={styles.postInfo}>
                  <View style={{ flexDirection: "row", marginLeft: -7 }}>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => navigation.navigate("CommentsScreen")}
                    >
                      <EvilIcons name="comment" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.commentsNumber}>0</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => navigation.navigate("MapScreen")}
                    >
                      <EvilIcons name="location" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <Text style={styles.postLocation}>Crimea Region, Ukraine</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
      {/* <FlatList
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
                    <Text style={styles.commentsNumber}>0</Text>
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
      /> */}
    </ScrollView>
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