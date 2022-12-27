import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "../styles";

type GuessLog = {
  log: number;
  round: number; // nth guess
};

function GuessLog({ log, round }: GuessLog) {
  return (
    <View style={styles.logContainer}>
      <Text style={styles.roundText}>#{round}</Text>
      <Text style={styles.logText}>Guess: {log}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.yellow,
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 30,
    marginVertical: 10,
  },
  roundText: {
    color: Colors.black,
    fontSize: Fonts.smallSize,
  },
  logText: {
    color: Colors.black,
    fontSize: Fonts.mediumSize,
  },
});

export default GuessLog;
