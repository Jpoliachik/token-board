import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TokenGrid } from "./src/TokenGrid";
import { Header } from "./src/Header";
import { About } from "./src/About";

const HEADER_HEIGHT = 70;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={TokenGrid}
          options={{ title: "Token Grid" }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{ title: "About" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main} contentContainerStyle={styles.content}>
        <TokenGrid />
      </ScrollView>
      <Header style={styles.header} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    height: HEADER_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
  },
  main: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  content: {
    paddingTop: HEADER_HEIGHT,
  },
});
