import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import "./index.css"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename="/about">
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
