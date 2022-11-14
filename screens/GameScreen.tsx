import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import s from "../styles";

interface GameScreenProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}

function GameScreen({ number, setNumber }: GameScreenProps) {
  const guess = 5;
  const back = () => {
    setNumber(0);
  };
  return (
    <View style={styles.game}>
      <View style={styles.guessBox}>
        <Text>Guess: {guess}</Text>
      </View>
      <View style={styles.hintsBox}>
        <Button
          text="Higher"
          style={styles.hintBtn}
          textStyle={styles.hintBtnText}
        />
        <Button
          text="Lower"
          style={styles.hintBtn}
          textStyle={styles.hintBtnText}
        />
      </View>
      <View style={styles.space}></View>
      <View style={styles.actionsBox}>
        <Button
          text="Back"
          onPress={back}
          style={styles.actionBtn}
          textStyle={{ color: "white" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  guessBox: {
    flex: 1,
  },
  hintsBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  hintBtn: {
    backgroundColor: s.background,
  },
  hintBtnText: {
    color: s.yellow,
    fontWeight: "600",
  },
  space: {
    flex: 4,
    backgroundColor: "transparent",
  },
  actionsBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default GameScreen;
