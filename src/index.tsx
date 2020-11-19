import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { useGlobal, GlobalContext } from "./context";
import App from "./components/App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
  }
`;

const cacheStore = window.localStorage.getItem("store") || {};

function ContextWrapper() {
  const globalValues = useGlobal(cacheStore);
  return (
    <GlobalContext.Provider value={globalValues}>
      <React.Fragment>
        <GlobalStyle />
        <App />
      </React.Fragment>
    </GlobalContext.Provider>
  );
}

render(<ContextWrapper />, document.getElementById("root"));
