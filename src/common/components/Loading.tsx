import React from "react";
import { StyleSheet, View } from "react-native";
import { H1 } from "styles/typography";

export const Loading: React.FC = () => (
  <View style={styles.container}>
    <H1>Loading...</H1>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
});
