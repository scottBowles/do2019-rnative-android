import * as Sentry from "sentry-expo";
Sentry.init({
  dsn:
    "https://a82f8a8037974e99a4b914d11288ff83@o453753.ingest.sentry.io/5442771",
  enableInExpoDevelopment: true,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NativeRouter as Router, Route, Link } from "react-router-native";
import Constants from "expo-constants";
import { Text } from "./styles/typography";
import Menu from "./components/Menu";
import Office from "./components/Office";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <Router>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Menu />
        <Route exact path="/" component={Office} />
        <Route path="/calendar" component={Calendar} />
      </SafeAreaView>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
