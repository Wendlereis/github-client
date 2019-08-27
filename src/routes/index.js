import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Auth } from '../components/pages/auth'
import { Home } from '../components/pages/home'

export const history = createBrowserHistory()

export default function Routes() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Auth} />
      <Route path="/:username/home" component={Home} />
    </Router>
  )
}
