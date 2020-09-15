/* eslint react/no-children-prop: 0 */
import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"

import { MyBox } from "./MyBox"

export function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/test">test</Link></li>
        <li><Link to="/default">default</Link></li>
        <li><Link to="/primary">primary</Link></li>
        <li><Link to="/secondary">secondary</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" children={<div>home</div>} />
        <Route path="/test" children={<div>test</div>} />
        <Route path="/:color" children={<MyBox prefix="test"/>} />
        <Route children={<div>home</div>} />
      </Switch>
    </div>
  )
}
