# Daily Office Mobile App

> :construction: Under development :construction:
>
> A React Native Android version of https://www.dailyoffice2019.com/. Hits the api at https://api.dailyoffice2019.com/api/, under development.

Try out the app on an Android device by scanning the QR code at https://expo.io/@scottbowles/projects/daily-office-2019-for-android, or follow instructions below to install locally and run on a development server.

## Table of Contents

1. [Technology Stack](#technology-stack)
1. [About](#about)
1. [Local Installation](#local-installation)

## Technology Stack

[![ReactNative](https://img.shields.io/badge/-React%20Native-61DAFB?logo=react&logoColor=000)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/-Expo-000020?logo=Expo&logoColor=fff)](https://expo.io/)
[![ReactRouter](https://img.shields.io/badge/-React%20Router-CA4245?logo=React%20Router&logoColor=fff)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=fff)](https://www.typescriptlang.org/)
[![StyledComponents](https://img.shields.io/badge/-Styled%20Components-DB7093?logo=styled-components&logoColor=362215)](https://styled-components.com/)
[![Babel](https://img.shields.io/badge/-Babel-030301?logo=babel)](https://babeljs.io/)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/-Prettier-24292e?logo=prettier)](https://prettier.io/)
[![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm)](https://www.npmjs.com/)

## About

This is the beginnings of a move toward a unified, cross-platform codebase for https://www.dailyoffice2019.com/, starting with its first Android version.

It largely follows the existing site, but implements the typography of the print version of the 2019 Book of Common Prayer, outlined in styleGuide.docx.

This app has the majority of functionality in place, but currently uses dummy data for all but the Calendar screen. Data fetching for the other screens will be added as the relevant data becomes available from the API.

## Local Installation

### Requirements

Follow [Expo's instructions](https://docs.expo.io/get-started/installation/) to install the Expo CLI and prepare a device or emulator on which to run the app. This app is currently being developed for Android, but enough cross-platform work has been done for most functionality to run on iOS or web. Still, Android is strongly preferred.

### Instructions

1. Clone this repository and change directory into the folder.

   > Choose a folder outside of a service like Dropbox or iCloud, which will occasionally make changes when the live server starts, resulting in an infinite loop. On a Mac, this means avoiding the `Documents` and `Desktop` folders.

   - Using SSH

     ```bash
     git clone git@github.com:scottBowles/do2019-rnative-android.git
     cd do2019-rnative-android
     ```

   - Using https

     ```bash
     git clone https://github.com/scottBowles/do2019-rnative-android.git
     cd do2019-rnative-android
     ```

1. Install dependencies

   `npm i`

1. Start the local server

   `npm start`

1. And the site should be available! Follow the simple instructions in your terminal to open the app on your phone, on an emulator, or in the browser.

### Do I really have to use Android?

Feel free to use iOS or web. They'll just be a bit buggy.

On iOS, the settings boxes look wonky, the Calendar screen's `Jump to Date` and `Jump to Season` modals don't work, and titles are in lowercase because iOS isn't recognizing the small-caps font variant.

On web, the `Jump to Date` modal doesn't work, the `Jump to Season` modal works only intermittently, and the width is constrained to a mobile-like width as the mobile experience has been my focus thus far.

You can see quite a bit of what is there on either, but Android is my first priority and it shows.
