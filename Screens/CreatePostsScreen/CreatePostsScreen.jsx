import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

export const PhotoContext = React.createContext();
// const { GOOGLE_MAPS_API_KEY } = process.env;

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState(null);
  const [country, setCountry] = useState(null);
  const [photoPath, setPhotoPath] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access camera was denied");
      }
    })();
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access media library was denied");
      }
    })();
    getLocation();
  }, []);

  const takePhoto = async () => {
    try {
      const photo = await camera.takePictureAsync();
      setPhoto(photo.uri);
      await MediaLibrary.createAssetAsync(photo.uri);
      setPhotoPath(photo.uri);
      getAddress();
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    setLocation(location);
  };

  const getAddress = async () => {
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setAddress(`${address[0].city}, ${address[0].country}`);
      setCountry(address[0].country);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFields = () => {
    setPhoto(null);
    setName("");
    setAddress(null);
    setCountry(null);
  };

  const publishPost = () => {
    navigation.navigate("PostsScreen");
    resetFields();
  };

  return (
    <PhotoContext.Provider value={photoPath}>
    <View style={styles.container}>
      <View style={styles.ImageWrapper}>
        <Camera style={styles.cameraContainer} type={Camera.Constants.Type.back} ref={ref => setCamera(ref)}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ width: 343, height: 240 }}
              />
            </View>
          )}
          <TouchableOpacity onPress={takePhoto} activeOpacity={0.4}>
            {!photo ? (
              <Image
                source={require("../../assets/icons/camera-g.png")}
                style={styles.addImage}
              />
            ) : (
              <Image
                source={require("../../assets/icons/camera-w.png")}
                style={styles.addImage}
              />
            )}
          </TouchableOpacity>
        </Camera>
        <View>
          <Text style={styles.textAddPhoto}>Загрузите фото</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View>
          <TextInput
            placeholder="Название"
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            placeholder="Местность"
            placeholderTextColor="#BDBDBD"
            value={country}
            onChangeText={(text) => setCountry(text)}
            style={[styles.input, styles.input2]}
          />
          <Image
            source={require("../../assets/icons/map-pin.png")}
            style={styles.mapPin}
          />
        </View>
        <TouchableOpacity
          onPress={photo ? publishPost : () => {}}
          activeOpacity={0.6}
          style={[
            !photo
              ? styles.btnPublish
              : [styles.btnPublish, { backgroundColor: "#FF6C00" }],
          ]}
        >
          <Text
            style={[
              !photo
                ? styles.btnPublishText
                : [styles.btnPublishText, { color: "#FFFFFF" }],
            ]}
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.btnDelete}>
          <Image
            source={require("../../assets/icons/trash-2.png")}
            style={{ width: 70, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
    </PhotoContext.Provider>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopColor: "#808080",
    borderTopWidth: 1,
  },
  cameraContainer: {
    width: 343,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  takePhotoContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderColor: "#fff",
    borderWidth: 1,
  },
  ImageWrapper: {
    marginTop: 32,
    marginHorizontal: 32,
  },
  textAddPhoto: {
    marginTop: 8,
    marginBottom: 32,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    fontFamily: 'Roboto-400',
  },
  form: {
    width: "100%",
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    height: 50,
    marginHorizontal: 32,
    marginBottom: 16,
    textAlign: "left",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontFamily: 'Roboto-500',
  },
  input2: {
    paddingLeft: 24,
    fontFamily: 'Roboto-400',
  },
  mapPin: {
    position: "absolute",
    bottom: 28,
    left: 28,
  },
  btnPublish: {
    backgroundColor: "#F6F6F6",
    height: 51,
    borderRadius: 100,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 32,
    marginBottom: 120,
  },
  btnPublishText: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-400',
  },
  btnDelete: {
    alignItems: "center",
    justifyContent: "center",
  }
});
