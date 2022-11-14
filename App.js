import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [gameNumber, setGameNumber] = useState(undefined);

  let screen = <StartGameScreen setGameNumber={setGameNumber} />;

  if (gameNumber) {
    screen = <GameScreen number={gameNumber} setNumber={setGameNumber} />;
  }

  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.full}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.full}
        imageStyle={styles.backgroundImg}
      >
        {screen}
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
