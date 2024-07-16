import React from "react"
import { createRoot } from "react-dom/client"
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

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename="/about">
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
