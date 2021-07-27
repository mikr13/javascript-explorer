/* eslint-disable no-underscore-dangle */
import { createStore, compose } from "redux"
import RootReducer from "./RootReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(
  RootReducer,
  undefined,
  /* preloadedState, */ composeEnhancers()
)

export default Store
