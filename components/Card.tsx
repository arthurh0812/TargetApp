import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles";

type CardProps = {
  children?: React.ReactNode;
  height: number;
};

function Card({ children, height }: CardProps) {
  return <View style={[styles.inputBox, { height: height }]}>{children}</View>;
}

const styles = StyleSheet.create({
  inputBox: {
    marginHorizontal: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Colors.backgroundDark,
    borderRadius: 10,
    // shadow effect
    elevation: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
});

export default Card;
