import React, { useState } from "react";
import RN, { Pressable, Text, StyleSheet, View } from "react-native";

import s from "../styles";

interface ButtonProps {
  text: string;
  style?: RN.StyleProp<RN.ViewStyle>;
  textStyle?: RN.StyleProp<RN.TextStyle>;
  pressedStyle?: RN.StyleProp<RN.ViewStyle>;
  onPress?: (e: RN.GestureResponderEvent) => void;
}

function Button({
  text,
  onPress,
  style,
  textStyle,
  pressedStyle,
}: ButtonProps) {
  return (
    <View style={[styles.btn, style]}>
      <Pressable
        style={({ pressed }) => [
          styles.btnInner,
          pressed && [styles.btnPressed, pressedStyle],
        ]}
        onPress={onPress}
      >
        <Text style={[styles.btnText, textStyle]}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
    margin: 4,
    elevation: 2,
    overflow: "hidden",
  },
  btnInner: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnPressed: {
    opacity: 0.6,
  },
  btnText: {
    color: s.white,
    fontWeight: "500",
    textAlign: "center",
    fontSize: 14,
  },
});

export default Button;
