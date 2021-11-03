import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";

import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TokenGrid } from "./TokenGrid";
import { Header } from "./Header";
import { About } from "./About";
import { WalletConnection } from "./WalletConnection";

const HEADER_HEIGHT = 70;

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const RightAction = () => <WalletConnection />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Token Board"
        alignment="start"
        accessoryRight={RightAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={() => {}}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={TokenGrid}
          options={{
            title: "Token Board",
            headerRight: () => <WalletConnection />,
          }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{ title: "About" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
