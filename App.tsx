import { fontRequires } from "assets/fonts/fontRequires";
import { Menu } from "common/components";
import {
  SettingConsumer,
  SettingsProvider,
} from "data/settingsData/SettingsContext";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
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


interface IAppProps {
  theme: string;
}

const App: React.FC<IAppProps> = memo(({ theme }) => {
  const currentTheme = theme === "Light Mode" ? lightTheme : darkTheme;
  const [fontsLoaded] = useFonts(fontRequires);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <SafeAreaView style={styles.container}>
          <StatusBar />
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
});

export default function () {
  return (
    <SettingsProvider>
      <SettingConsumer settingStorageKey="visualTheme">
        {({ value }) => <App theme={value} />}
      </SettingConsumer>
    </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
