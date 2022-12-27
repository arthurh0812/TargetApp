import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useMemo, useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [gameNumber, setGameNumber] = useState(undefined);
  const [numGuesses, setNumGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "remachine-script": require("./assets/fonts/RemachineScript_Personal_Use.ttf"),
  });

  let screen = <StartGameScreen setGameNumber={setGameNumber} />;

  if (gameNumber && !isGameOver) {
    screen = (
      <GameScreen
        number={gameNumber}
        setNumber={setGameNumber}
        setNumGuesses={setNumGuesses}
        setIsGameOver={setIsGameOver}
      />
    );
  }
  if (gameNumber && isGameOver) {
    screen = (
      <GameOverScreen
        correctNumber={gameNumber}
        numGuesses={numGuesses}
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
