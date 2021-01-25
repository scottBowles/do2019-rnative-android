import { fontRequires } from "assets/fonts/fontRequires";
import { Menu } from "common/components";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Route, NativeRouter as Router, Switch } from "react-router-native";
import {
  About,
  Calendar,
  Office,
  PrivacyPolicy,
  Psalter,
  Settings,
} from "screens";
import { TestingGrounds } from "screens/TestingGrounds";
import { ThemeProvider } from "styled-components/native";
import { theme } from "styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts(fontRequires);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <Menu />
          <Switch>
            <Route exact path="/">
              <TestingGrounds />
            </Route>
            <Route path="/office">
              <Office />
            </Route>
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
            <Route path="/psalter">
              <Psalter />
            </Route>
          </Switch>
        </SafeAreaView>
      </Router>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
