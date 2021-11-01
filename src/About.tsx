import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

export const About = (props: { style?: ViewStyle }) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text>{"Text goes here"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
