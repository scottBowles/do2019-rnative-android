import { fontRequires } from "assets/fonts/fontRequires";
import { Menu } from "common/components";
import {
  IInjectedSettingProps,
  SettingConsumer,
  SettingsProvider,
} from "data/settingsData";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
import { Platform, View, useWindowDimensions } from "react-native";
import { Route, NativeRouter as Router, Switch } from "react-router-native";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "styles/theme";

import {
  About,
  Calendar,
  Office,
  PrivacyPolicy,
  Psalter,
  Settings,
} from "./src/screens";

interface IAppProps {
  theme?: string;
}

export default function () {
  return (
    <SettingsProvider>
      <SettingConsumer settingName="theme">
        {({ value }: IInjectedSettingProps) => <App theme={value} />}
      </SettingConsumer>
    </SettingsProvider>
  );
}

const App: React.FC<IAppProps> = memo(({ theme }) => {
  const currentTheme = theme === "theme-dark" ? darkTheme : lightTheme;
  const [fontsLoaded] = useFonts(fontRequires);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={currentTheme}>
      <SafeArea>
        <Router>
          <StatusBar />
          <Menu />
          <Switch>
            <Route exact path="/">
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
        </Router>
      </SafeArea>
    </ThemeProvider>
  );
});

const SafeArea = ({ children }: { children: JSX.Element }) => {
  const windowWidth = useWindowDimensions().width;

  if (Platform.OS === "web" && windowWidth > 450) {
    return (
      <WebSafeArea>
        <View style={{ width: 380, flex: 1 }}>{children}</View>
      </WebSafeArea>
    );
  }

  return <MobileSafeArea style={{ flex: 1 }}>{children}</MobileSafeArea>;
};

const MobileSafeArea = styled.SafeAreaView`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

const WebSafeArea = styled(MobileSafeArea)`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
`;
