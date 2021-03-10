import { combineReducers } from 'redux'
import auth from './authToken'
import search from './search'

export default combineReducers({ auth, search })
