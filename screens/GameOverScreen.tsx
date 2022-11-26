import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";
import { Fonts, Colors } from "../styles";

type ScreenProps = {
  correctNumber: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

function GameOverScreen(p: ScreenProps) {
  const restart = () => {
    p.setIsGameOver(false);
    p.setNumber(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.space}></View>
      <View style={styles.info}>
        <Title style={styles.title}>Game Over</Title>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>
            Number:{" "}
            <Text style={{ fontWeight: "bold" }}>{p.correctNumber}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <Button onPress={restart} style={styles.restartBtn}>
          Restart
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  space: {
    flex: 3,
  },
  info: {
    flex: 2,
  },
  title: {
    backgroundColor: Colors.background,
    fontSize: Fonts.largeSize,
  },
  numberContainer: {
    marginVertical: "10%",
    alignItems: "center",
  },
  number: {
    width: "50%",
    textAlign: "center",
    fontSize: Fonts.mediumSize,
    color: Colors.white,
    backgroundColor: Colors.yellow,
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: 2,
    overflow: "hidden",
  },
  actionsContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  restartBtn: {},
});

export default GameOverScreen;
