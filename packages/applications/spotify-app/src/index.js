import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import SpotifyApp from './SpotifyApp'
import store from './redux/store'
import './global.css'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <SpotifyApp />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
