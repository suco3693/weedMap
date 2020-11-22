import React from "react";
import {
  isMobile,
} from "react-device-detect";
import AppRouter from "../router";
import logo from "../assets/logo.png";
import {
  AppWrapper,
  AppHeader,
  AppFooter,
  AppFooterBar,
} from "./styles";

function App() {
  return (
    <AppWrapper>
        <AppHeader isMobile={isMobile}>
          <img src={logo} alt="weedmaps logo" />
        </AppHeader>
        <AppRouter />
      <AppFooter>
        <AppFooterBar />
      </AppFooter>
    </AppWrapper>
  );
}

export default App;
