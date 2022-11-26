import React from "react";
import { StyleSheet, Text } from "react-native";

import { Colors, Fonts } from "../styles";

type NumberProps = {
  style?: object;
  children?: React.ReactNode;
};

function Number({ style, children }: NumberProps) {
  return <Text style={[styles.number, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  number: {
    backgroundColor: "transparent",
    overflow: "hidden",
    color: Colors.white,
    fontSize: Fonts.defaultSize,
    fontWeight: "600",

    textAlign: "center",
    paddingVertical: 5,

    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default Number;
