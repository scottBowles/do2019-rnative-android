import { Menu } from "common/components";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Route, NativeRouter as Router, Switch } from "react-router-native";
import { About, Calendar, Office, PrivacyPolicy, Settings } from "screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    "ACaslonPro-Bold": require("./src/assets/fonts/ACaslonPro-Bold.otf"),
    "ACaslonPro-BoldItalic": require("./src/assets/fonts/ACaslonPro-BoldItalic.otf"),
    "ACaslonPro-Italic": require("./src/assets/fonts/ACaslonPro-Italic.otf"),
    "ACaslonPro-Regular": require("./src/assets/fonts/ACaslonPro-Regular.otf"),
    "ACaslonPro-Semibold": require("./src/assets/fonts/ACaslonPro-Semibold.otf"),
    "ACaslonPro-SemiboldItalic": require("./src/assets/fonts/ACaslonPro-SemiboldItalic.otf"),
  });

  if (!fontsLoaded) return <AppLoading />;

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
