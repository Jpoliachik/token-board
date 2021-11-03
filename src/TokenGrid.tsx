import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { GridItem } from "./GridItem";

export const TokenGrid = (props: { style?: ViewStyle }) => {
  const gridItems = [
    {
      id: "0",
      value: "testy",
    },
  ];

  for (let i = 0; i < 100; i++) {
    gridItems.push({ id: `i` + i, value: "" });
  }

  return (
    <View style={[styles.gridContainer, props.style]}>
      {gridItems.map((item) => (
        <GridItem style={styles.item} id={item.id} value={item.value} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: 320,
    height: 320,
  },
});
