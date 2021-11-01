import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

export const Header = (props: { style?: ViewStyle }) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text>{"token board"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
