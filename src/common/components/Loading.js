import React from "react";
import { StyleSheet, View } from "react-native";
import { H1 } from "styles/typography";

const Loading = () => (
  <View style={styles.container}>
    <H1>Loading...</H1>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
});

export default Loading;
