import { Text, StyleSheet, View } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CreatePostsScreen</Text>
    </View>
  );
};

export default CreatePostsScreen;

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
  });