/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import RootReducer from "./RootReducer"

const middleware = applyMiddleware(thunkMiddleware)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(
  RootReducer,
  undefined,
  /* preloadedState, */ composeEnhancers(middleware)
)

export default Store
