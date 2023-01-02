import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";

import { Colors, Fonts } from "../styles";

type NumberProps = {
  style?: object;
  children?: React.ReactNode;
};

const deviceWidth = Dimensions.get("window").width;

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
    paddingVertical: deviceWidth < 400 ? 12 : 24,

    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default Number;
