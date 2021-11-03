import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Card, Layout, Text } from "@ui-kitten/components";
import { RootNavigation } from "./src/RootNavigation";

// theme generated from https://colors.eva.design/
import { default as theme } from "./theme.json";

export default function App() {
  const isDev = false;

  const ComingSoon = () => (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card>
        <Text category="h4">Something interesting in the works...</Text>
      </Card>
    </Layout>
  );

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      {isDev ? <RootNavigation /> : <ComingSoon />}
      <StatusBar style="auto" />
    </ApplicationProvider>
  );
}
