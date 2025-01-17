import React from "react";
import RN, { Platform, StyleSheet, Text } from "react-native";

import { Colors, Fonts } from "../styles";

type TitleProps = {
  style?: object;
  children?: React.ReactNode;
};

function Title(props: TitleProps) {
  return <Text style={[styles.title, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: Colors.background,
    overflow: "hidden",
    color: Colors.white,
    fontSize: Fonts.mediumSize,
    fontWeight: "600",

    textAlign: "center",
    paddingVertical: 5,

    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: Colors.white,
  },
});

export default Title;
