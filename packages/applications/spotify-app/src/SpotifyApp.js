import React from 'react'

import { getToken } from './services/getToken'

function SpotifyApp() {
  return (
    <div className="app-container">
      <h1>Spotify App</h1>
      <button onClick={() => getToken()}>Get Token</button>
    </div>
  )
}

export default SpotifyApp
