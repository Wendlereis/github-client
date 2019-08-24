import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Auth } from '../components/pages/auth'

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Auth} />
    </Router>
  )
}
