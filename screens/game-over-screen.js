import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/title";

const GamerOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text>
        Your phone needed <Text>X</Text> rounds to guess the number{" "}
        <Text>Y</Text>
      </Text>
    </View>
  );
};

export default GamerOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
