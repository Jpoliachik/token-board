import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

export const GridItem = (props: {
  id: string;
  value?: string;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text>{props.value || "n/a"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
