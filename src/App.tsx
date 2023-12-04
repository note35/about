/* eslint react/no-children-prop: 0 */
import React from "react"
import { Switch, Route } from "react-router-dom"
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
    "© Kir 2023 (Last updated: 2023 Dec 4th)",
    "The [site](https://github.com/note35/about) is made by [TypeScript](https://www.typescriptlang.org/), [React (CRA)](https://reactjs.org/docs/create-a-new-react-app.html), [Material UI](https://material-ui.com/), and hosted by [Github](https://github.com/)"
  ]

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navigator />
        <Switch>
          <Route exact path="/" children={<About />} />
          <Route path="/talks" children={<Talks />} />
          <Route path="/toys" children={<Toys />} />
          <Route path="/:color" children={<MyBox prefix="test"/>} />
          <Route children={<div>home</div>} />
        </Switch>
        <Typography variant="body2" component="h2" style={{ color: "grey", paddingTop: 30 }}>
          {footer.map((item, idx) => <div key={idx}>{MD2Html(item)}</div>)}
        </Typography>    
      </ThemeProvider>
    </div>
  )
}
