import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Number from "../components/Number";
import Title from "../components/Title";
import { Colors, Fonts } from "../styles";

type GameScreenProps = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

let lowerBounds = 1;
let upperBounds = 100;

function GameScreen({ number, setNumber, setIsGameOver }: GameScreenProps) {
  const back = () => {
    setNumber(0);
    lowerBounds = 1;
    upperBounds = 100;
  };

  const generateGuess = (
    min: number,
    max: number,
    exclude?: number
  ): number => {
    let range = max - min;
    console.log(range);
    let num = Math.floor(Math.random() * range + min);
    if (num != 0 && num == exclude) return generateGuess(min, max, exclude);
    return num;
  };

  let [guess, setGuess] = useState(
    generateGuess(lowerBounds, upperBounds, number)
  );

  const onHigher = () => {
    if (guess > number) return; // detect lie
    lowerBounds = guess + 1;
    updateGuess();
  };

  const onLower = () => {
    if (guess < number) return; // detect lie
    upperBounds = guess;
    updateGuess();
  };

  const updateGuess = () => {
    let newGuess = generateGuess(lowerBounds, upperBounds);
    setGuess(newGuess);
  };

  useEffect(() => {
    if (guess == number) setIsGameOver(true);
  });

  return (
    <View style={styles.game}>
      <View style={styles.guessBox}>
        <Title style={styles.guessTitle}>Opponent's Guess</Title>
        <Number style={styles.guess}>{guess}</Number>
      </View>
      <View style={styles.hintsBox}>
        <Button
          style={styles.hintBtn}
          textStyle={styles.hintBtnText}
          onPress={onHigher}
        >
          Higher
        </Button>
        <Button
          style={styles.hintBtn}
          textStyle={styles.hintBtnText}
          onPress={onLower}
        >
          Lower
        </Button>
      </View>
      <View style={styles.space}></View>
      <View style={styles.actionsBox}>
        <Button
          onPress={back}
          style={styles.actionBtn}
          textStyle={{ color: "white", fontSize: 15 }}
        >
          Back
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingTop: 50,
  },
  number: {
    flex: 1,
    fontSize: Fonts.defaultSize,
    fontWeight: "600",
    color: Colors.white,
  },
  guessBox: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  guessTitle: {
    width: "75%",
  },
  guess: {
    width: "50%",
    color: Colors.yellow,
    borderColor: Colors.yellow,
  },
  hintsBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  hintBtn: {
    backgroundColor: Colors.background,
  },
  hintBtnText: {
    color: Colors.yellow,
    fontSize: Fonts.smallSize,
    fontWeight: "600",
  },
  space: {
    flex: 4,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  actionsBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    width: "50%",
    backgroundColor: Colors.red,
  },
});

export default GameScreen;
