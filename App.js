import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [gameNumber, setGameNumber] = useState(undefined);
  const [isGameOver, setIsGameOver] = useState(false);

  let screen = <StartGameScreen setGameNumber={setGameNumber} />;

  if (gameNumber) {
    screen = (
      <GameScreen
        number={gameNumber}
        setNumber={setGameNumber}
        setIsGameOver={setIsGameOver}
      />
    );
  }
  if (isGameOver) {
    screen = (
      <GameOverScreen
        correctNumber={gameNumber}
        setNumber={setGameNumber}
        setIsGameOver={setIsGameOver}
      />
    );
  }

  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.full}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.full}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.full}>
          <StatusBar style="light"></StatusBar>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.2,
  },
});
