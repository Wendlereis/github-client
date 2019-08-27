import React from 'react'
import PropTypes from 'prop-types'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import repositoriesReducer from './repositories'
import userReducer from './user'
import commitsReducer from  './commits'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    repositoriesReducer,
    userReducer,
    commitsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  children: PropTypes.any
}
