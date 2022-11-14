import React, { useState } from "react";
import RN, {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert,
} from "react-native";

import s from "../styles";
import Button from "../components/Button";

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
    if (number == "0") setNumber("0");
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputBox}>
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
              text="Reset"
              style={styles.btn}
              pressedStyle={styles.btnPressed}
              onPress={reset}
            />
            <Button text="Confirm" style={styles.btn} onPress={submitNumber} />
          </View>
        </View>
        <Text>{number}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inputBox: {
    height: "20%",
    marginHorizontal: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: s.backgroundDark,
    borderRadius: 10,
    // shadow effect
    elevation: 10,
    shadowColor: s.black,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
  numberInput: {
    minWidth: Dimensions.get("window").width * 0.2,
    height: 52,
    color: s.golden,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: s.golden,
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
    backgroundColor: s.background,
  },
  btnPressed: {
    backgroundColor: s.backgroundLight,
  },
});

export default StartGameScreen;
