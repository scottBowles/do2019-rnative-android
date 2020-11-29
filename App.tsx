import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { NativeRouter as Router, Route, Switch } from "react-router-native";
import Constants from "expo-constants";
import { Menu } from "common/components";
import { About, Calendar, Office, Settings } from "screens";

export default function App() {
  return (
    <Router>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <About />
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
