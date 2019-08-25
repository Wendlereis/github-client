import React from 'react'
import PropTypes from 'prop-types'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import repositoriesReducer from './repositories'
import userReducer from './user'

const store = createStore(
  combineReducers({
    repositoriesReducer,
    userReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  children: PropTypes.any
}
