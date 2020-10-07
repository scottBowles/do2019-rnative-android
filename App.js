import * as Sentry from "sentry-expo";
Sentry.init({
  dsn:
    "https://a82f8a8037974e99a4b914d11288ff83@o453753.ingest.sentry.io/5442771",
  enableInExpoDevelopment: true,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { NativeRouter as Router, Route, Switch } from "react-router-native";
import Constants from "expo-constants";
import { Menu } from "common/components";
import { Calendar, Office } from "screens";

export default function App() {
  return (
    <Router>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Calendar />
          </Route>
          <Route path="/office">
            <Office />
          </Route>
          <Route
            path="/calendar/:year"
            render={({ location, ...rest }) => (
              <Calendar key={location.pathname} {...rest} />
            )}
          />
        </Switch>
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
