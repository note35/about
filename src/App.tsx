/* eslint react/no-children-prop: 0 */
import React from "react"
import { Routes, Route } from "react-router-dom"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import Typography from "@material-ui/core/Typography"

import "./App.css"
import { MyBox } from "./MyBox"  // not used in production
import { Navigator } from "./Navigator"
import { About } from "./About"
import { Talks } from "./Talks"
import { Toys } from "./Toys"
import { MD2Html } from "./Utils"

export function App(): JSX.Element {
  const theme = createMuiTheme({
    typography: {
      body2: {
        fontSize: 16,
        paddingLeft: 3,
        paddingRight: 3,
        "@media (min-width:1024px)": {
          fontSize: 18,
          paddingLeft: 30,
          paddingRight: 30,
        }
      }
    }
  })

  const footer = [
    "© Kir 2024 (Last updated: 2024 Jul 17th)",
    "The [site](https://github.com/note35/about) is made by [TypeScript](https://www.typescriptlang.org/), [React (CRA)](https://reactjs.org/docs/create-a-new-react-app.html), [Material UI](https://material-ui.com/), and hosted by [Github](https://github.com/)"
  ]

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navigator />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/:color" element={<MyBox prefix="test"/>} />
          <Route element={<div>home</div>} />
        </Routes>
        <Typography variant="body2" component="h2" style={{ color: "grey", paddingTop: 30 }}>
          {footer.map((item, idx) => <div key={idx}>{MD2Html(item)}</div>)}
        </Typography>    
      </ThemeProvider>
    </div>
  )
}
