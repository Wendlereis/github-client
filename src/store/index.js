import React from 'react'
import PropTypes from 'prop-types'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import repositoriesReducer from './repositories'

const store = createStore(
  combineReducers({
    repositoriesReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  children: PropTypes.any
}
