import React from "react";
import { StyleSheet, View } from "react-native";
import { H1 } from "../styles/typography";

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
});

const Loading = () => (
  <View style={styles.container}>
    <H1>Loading...</H1>
  </View>
);

export default Loading;
