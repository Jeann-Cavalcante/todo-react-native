import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Main from "./src/screen/Main";
import theme from "./src/Theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Main />
      </ThemeProvider>
    </>
  );
}
