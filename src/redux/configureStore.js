import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import app from './app/reducer'

const reducer = combineReducers({ app })
const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}
const enhancer = applyMiddleware(...middlewares)

export default createStore(reducer, {}, enhancer)
