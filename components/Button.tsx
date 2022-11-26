import React, { useState } from "react";
import RN, { Pressable, Text, StyleSheet, View } from "react-native";

import { Colors } from "../styles";

interface ButtonProps {
  children?: React.ReactNode;
  style?: RN.StyleProp<RN.ViewStyle>;
  textStyle?: RN.StyleProp<RN.TextStyle>;
  pressedStyle?: RN.StyleProp<RN.ViewStyle>;
  disabled?: boolean;
  onPress?: (e: RN.GestureResponderEvent) => void;
}

function Button({
  children,
  onPress,
  disabled,
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
        disabled={disabled}
      >
        <Text style={[styles.btnText, textStyle]}>{children}</Text>
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
    backgroundColor: Colors.background,
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
    color: Colors.white,
    fontWeight: "500",
    textAlign: "center",
    fontSize: 14,
  },
});

export default Button;
