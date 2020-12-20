import { Menu } from "common/components";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Route, NativeRouter as Router, Switch } from "react-router-native";
import { About, Calendar, Office, PrivacyPolicy, Settings } from "screens";

export default function App() {
  return (
    <Router>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <PrivacyPolicy />
          </Route>
          {/* <Route path="/office">
            <Office />
          </Route> */}
          <Route
            path="/calendar/:year/:date"
            render={({ location, ...rest }) => (
              <Calendar key={location.pathname} {...rest} />
            )}
          />
          <Route
            path="/calendar/:year"
            render={({ location, ...rest }) => (
              <Calendar key={location.pathname} {...rest} />
            )}
          />
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/privacy">
            <PrivacyPolicy />
          </Route>
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
