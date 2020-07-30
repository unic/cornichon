import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import Specification from "./components/specification";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Specification />
    </ThemeProvider>
  );
};

export default App;
