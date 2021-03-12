import { combineReducers } from 'redux'
import auth from './authToken'
import search from './search'
import album from './album'
import track from './track'

export default combineReducers({ auth, search, album, track })
