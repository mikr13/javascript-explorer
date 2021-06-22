/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import throttle from 'lodash.throttle'
import RootReducer from "./RootReducer"
import { loadState, saveState } from '../utils/localStorage'

const persistedState = loadState()
const middleware = applyMiddleware(thunkMiddleware)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(RootReducer, persistedState, /* preloadedState, */ composeEnhancers(middleware))

Store.subscribe(throttle(() => {
  saveState({
    ui: Store.getState().ui
  })
}, 1000))

export default Store
