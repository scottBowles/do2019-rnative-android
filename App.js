import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./components/menu/Menu";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
