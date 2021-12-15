import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import /*chosenTheme*/ "./theme";
import { allTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const chosenTheme = allTheme[Math.floor(Math.random() * (10 - 0)) + 0];
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
