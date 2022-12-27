import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";
import { Fonts, Colors } from "../styles";

type ScreenProps = {
  correctNumber: number;
  numGuesses: number;
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
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summary}>
            I needed <Text style={styles.number}>{p.numGuesses} tries</Text> to
            guess the number{" "}
            <Text style={styles.number}>{p.correctNumber}</Text>
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
    flex: 1,
  },
  info: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "80%",
    backgroundColor: Colors.background,
    fontSize: Fonts.largeSize,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    marginTop: 20,
    overflow: "hidden",
    borderColor: Colors.background,
    borderWidth: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  summaryContainer: {
    width: "80%",
    marginVertical: "10%",
    alignItems: "center",
  },
  summary: {
    width: "100%",
    textAlign: "center",
    fontSize: Fonts.mediumSize,
    color: Colors.white,
    backgroundColor: Colors.yellow,
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: 2,
    overflow: "hidden",
  },
  number: {
    color: Colors.background,
    fontWeight: "bold",
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
