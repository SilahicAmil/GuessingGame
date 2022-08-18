import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import Card from "../components/ui/card";
import InstructionText from "../components/ui/instruction-text";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/game/number-container";
import PrimaryButton from "../components/ui/primary-button";
import Title from "../components/ui/title";

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

const GameScreen = ({ userNumber, onGameOver }) => {
  const initGuess = generateRandomBetween(1, 100, userNumber);
  const [currGuess, setCurrGuess] = useState(initGuess);

  useEffect(() => {
    if (currGuess === userNumber) {
      onGameOver();
    }
  }, [currGuess, userNumber, onGameOver]);

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
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher Or Lower?{" "}
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
