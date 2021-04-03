import { fontRequires } from "assets/fonts/fontRequires";
import { Menu } from "common/components";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
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
import { darkTheme, lightTheme } from "styles/theme";
import { Text } from "styles/typography";
import { useTheme } from "styles/useTheme";

import { SettingsContext, SettingsProvider } from "./SettingsContext";

const getTheme = (theme: string) =>
  theme === "Light Mode" ? lightTheme : darkTheme;

function App() {
  const [fontsLoaded] = useFonts(fontRequires);
  // const { currentTheme, themeLoaded, setMode } = useTheme();
  // const { themeLoading, settings, updateSettings } = useContext(
  //   SettingsContext
  // );

  const themeLoading = false;

  if (!fontsLoaded || themeLoading) return <AppLoading />;

  // const currentTheme = getTheme(settings.visualTheme);
  const currentTheme = getTheme("Light Mode");

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          {/* <View style={{ flexDirection: "row" }}>
            <Text
              style={{ color: "black", width: "50%", textAlign: "center" }}
              onPress={() => setMode("light")}
            >
              Light
            </Text>
            <Text
              style={{ color: "black", width: "50%", textAlign: "center" }}
              onPress={() => setMode("dark")}
            >
              Dark
            </Text>
          </View> */}
          <Menu />
          <Switch>
            <Route exact path="/">
              {/* <TestingGrounds setMode={setMode} /> */}
              <Office />
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

export default function () {
  return (
    <SettingsProvider>
      <App />
    </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
