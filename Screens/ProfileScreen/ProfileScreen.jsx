import { Text, StyleSheet, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>UserName</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
    },
    text: {
        fontFamily: 'Roboto-500', 
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        color: '#212121',
        marginTop: 180
    }
  });