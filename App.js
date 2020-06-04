import * as React from "react";
import { View, Text } from "react-native";
import Overview from "./components/Overview"

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Overview/>
    </View>
  );
}
