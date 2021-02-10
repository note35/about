/* eslint react/no-children-prop: 0 */
import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"

import { MyBox } from "./MyBox"

import { Navigator } from "./Navigator"
import { About } from "./About"
import { Talks } from "./Talks"
import { Toys } from "./Toys"

export function App(): JSX.Element {
  return (
    <div className="App">
      <Navigator />
      <Switch>
        <Route exact path="/" children={<About />} />
        <Route path="/talks" children={<Talks />} />
        <Route path="/toys" children={<Toys />} />
        <Route path="/:color" children={<MyBox prefix="test"/>} />
        <Route children={<div>home</div>} />
      </Switch>
    </div>
  )
}
