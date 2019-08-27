import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Auth } from '../components/pages/auth'
import { Home } from '../components/pages/home'
import { RepositoryCommits } from '../components/pages/repository-commits'

export const history = createBrowserHistory()

export default function Routes() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Auth} />
      <Route path="/:username/home" component={Home} />
      <Route
        path="/:username/repo/:repository/commits"
        component={RepositoryCommits}
      />
    </Router>
  )
}
