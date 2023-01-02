import React, { useState, useEffect, useMemo } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Button from "../components/Button";
import Number from "../components/Number";
import GuessLog from "../components/GuessLog";
import Title from "../components/Title";
import { Colors, Fonts } from "../styles";

type GameScreenProps = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  setNumGuesses: React.Dispatch<React.SetStateAction<number>>;
  setScreen: React.Dispatch<React.SetStateAction<JSX.Element>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

function GameScreen({
  number,
  setNumber,
  setIsGameOver,
  setNumGuesses,
}: GameScreenProps) {
  const [guesses, setGuesses] = useState<Array<number>>([]);

  const [lowerBounds, setLowerBounds] = useState(1);
  const [upperBounds, setUpperBounds] = useState(100);
  const back = () => {
    setNumber(0);
  };

  const generateGuess = (
    min: number,
    max: number,
    exclude?: number
  ): number => {
    let range = max - min;
    let num = Math.floor(Math.random() * range + min);
    if (num != 0 && num == exclude) return generateGuess(min, max, exclude);
    setGuesses((prev) => [num, ...prev]);
    return num;
  };

  const initial = useMemo(
    () => generateGuess(lowerBounds, upperBounds, number),
    [number]
  );

  let [guess, setGuess] = useState(initial);

  const onHigher = () => {
    if (guess > number) return; // detect lie
    setLowerBounds(guess + 1);
    updateGuess(guess + 1, upperBounds);
  };

  const onLower = () => {
    if (guess < number) return; // detect lie
    setUpperBounds(guess);
    updateGuess(lowerBounds, guess);
  };

  const updateGuess = (lowerBounds: number, upperBounds: number) => {
    let newGuess = generateGuess(lowerBounds, upperBounds);
    setGuess(newGuess);
  };

  useEffect(() => {
    if (guess == number) {
      setIsGameOver(true);
      setNumGuesses(guesses.length);
    }
  }, [guess, number]);

  useEffect(() => {
    setLowerBounds(1);
    setUpperBounds(100);
  }, []); // only runs on first render

  let { width, height } = useWindowDimensions();

  let content = <></>;

  if (width < 500) {
    content = (
      <>
        <View style={styles.guessesBox}>
          <FlatList
            data={guesses}
            renderItem={(data) => (
              <GuessLog log={data.item} round={guesses.length - data.index} />
            )}
            keyExtractor={(item) => item.toString()}
            contentContainerStyle={styles.guessesListContainer}
            style={styles.guessesList}
          ></FlatList>
        </View>
        <View style={styles.actionsBox}>
          <Button
            onPress={back}
            style={styles.actionBtn}
            textStyle={{ color: "white", fontSize: 15 }}
          >
            Back
          </Button>
        </View>
      </>
    );
  }

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
          <AntDesign
            name="pluscircleo"
            size={Fonts.mediumSize}
            color={Colors.white}
          />
        </Button>
        <Button
          style={styles.hintBtn}
          textStyle={styles.hintBtnText}
          onPress={onLower}
        >
          <AntDesign
            name="minuscircleo"
            size={Fonts.mediumSize}
            color={Colors.white}
          />
        </Button>
      </View>
      {content}
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
    minWidth: "80%",
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
    width: "40%",
  },
  hintBtnText: {
    color: Colors.yellow,
    fontSize: Fonts.smallSize,
    fontWeight: "600",
  },
  guessesBox: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  guessesList: {
    flex: 1,
    width: "80%",
  },
  guessesListContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
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
