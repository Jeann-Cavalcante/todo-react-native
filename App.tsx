import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Main from "./src/screen/Main";
import theme from "./src/Theme";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Main />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
