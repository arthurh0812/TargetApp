import React, { useState, useEffect } from "react";
import RN, {
  TextInput,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
} from "react-native";

import { Colors } from "../styles";
import Button from "../components/Button";
import Title from "../components/Title";
import Card from "../components/Card";

interface StartGameScreenProps {
  setGameNumber: React.Dispatch<React.SetStateAction<number>>;
}

function StartGameScreen({ setGameNumber }: StartGameScreenProps) {
  const [number, setNumber] = useState<string>("0");

  const onChangeText = (newText: string) => {
    setNumber(newText);
  };
  const onStartEditing = () => {
    if (number == "0") {
      setNumber("");
    }
  };
  const onEndEditing = () => {
    if (number == "") setNumber("0");
  };

  const reset = () => {
    if (Number.parseInt(number) >= 0) setNumber("0");
    else setNumber("");
  };

  const submitNumber = () => {
    let n = Number.parseInt(number);
    if (!isNaN(n) && n > 0 && n <= 99) {
      setGameNumber(n);
    } else {
      Alert.alert("Try again!", "Please confirm a number between 1 and 99", [
        { text: "Okay", style: "cancel", onPress: reset },
      ]);
    }
  };

  let { width, height } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        style={styles.screen}
        scrollEnabled={height < 400 ? true : false}
      >
        <KeyboardAvoidingView
          style={styles.screen}
          behavior={height < 400 ? "position" : "padding"}
        >
          <View
            style={[styles.container, { marginTop: height < 400 ? 30 : 100 }]}
          >
            <Title style={styles.title}>Guess a Number</Title>
            <Card height={height < 400 ? 150 : 200}>
              <TextInput
                style={styles.numberInput}
                onPressIn={onStartEditing}
                onEndEditing={onEndEditing}
                onChangeText={onChangeText}
                maxLength={2}
                keyboardType={"number-pad"}
                value={number}
                autoCorrect={false}
              />
              <View style={styles.btnBox}>
                <Button
                  style={styles.btn}
                  pressedStyle={styles.btnPressed}
                  onPress={reset}
                >
                  Reset
                </Button>
                <Button style={styles.btn} onPress={submitNumber}>
                  Confirm
                </Button>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginBottom: 100,
    paddingHorizontal: 20,
    color: Colors.yellow,
    borderColor: Colors.yellow,
  },
  numberInput: {
    minWidth: 50,
    height: 52,
    color: Colors.golden,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.golden,
    borderBottomWidth: 3,
    textAlign: "center",
  },
  btnBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnWrapper: {
    flex: 1,
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  btnPressed: {
    backgroundColor: Colors.backgroundLight,
  },
});

export default StartGameScreen;
