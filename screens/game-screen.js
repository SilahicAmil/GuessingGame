import { StyleSheet, Text, View } from "react-native";

import Title from "../components/title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + */}
        {/* - */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});