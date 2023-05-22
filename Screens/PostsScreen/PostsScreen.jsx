import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logoutIcon from '../../assets/icons/logout.png';
import { useNavigation } from '@react-navigation/native';

const PostsScreen = ({ navigation }) => {
    const navigationLogout = useNavigation();
    
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
    <View style={styles.container}>
        <Text style={styles.text}>UserAva & UserInfo</Text>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
    },
    text: {
        fontFamily: 'Roboto-400', 
        fontSize: 20,
        lineHeight: 25,
        textAlign: 'center',
        color: '#212121'
    }
})