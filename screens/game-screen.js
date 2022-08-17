import { Alert, StyleSheet, Text, View } from "react-native";

import NumberContainer from "../components/game/number-container";
import PrimaryButton from "../components/ui/primary-button";
import Title from "../components/ui/title";
import { useState } from "react";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
  const initGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currGuess, setCurrGuess] = useState(initGuess);

  const nextGuessHandler = (direction) => {
    // lower
    //greater
    if (
      (direction === "lower" && currGuess < userNumber) ||
      (direction === "greater" && currGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know thats wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currGuess;
    } else {
      minBoundary = currGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currGuess
    );
    setCurrGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
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
