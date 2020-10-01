import React from "react";
import { Flex, ThemeProvider, NavLink as ThemeLink, Box, Image } from "theme-ui";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import theme from "./theme";
import Home from "./components/home";
import Specification from "./components/specification";
import logoInverted from "./img/logo-inverted.png";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Flex
          as="nav"
          sx={{
            borderBottomWidth: 1,
            borderBottomColor: "border",
            borderBottomStyle: "solid",
            boxShadow: "0px 0px 9px 3px #ADADAD",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "primary"
          }}
        >
          <Box>
            <Image
              src={logoInverted}
              sx={{
                height: "54px",
                display: "block"
              }}
            />
          </Box>
          <Box>
            <ThemeLink as={NavLink} exact to="/">Home</ThemeLink>
            <ThemeLink as={NavLink} to="/spec-generator">
              Spec Generator
            </ThemeLink>
          </Box>
        </Flex>
        <Switch>
        <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/spec-generator"
            component={Specification}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
