import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getAuth } from './redux/modules/authToken'
import Routes from './Routes'

function SpotifyApp({ getAuthAction }) {
  return (
    <div className="app-container">
      <h1>Spotify App</h1>
      <button onClick={() => getAuthAction()}>Get Token</button>
      <div className="routes-container">
        <Routes />
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  getAuthAction: getAuth
}

SpotifyApp.propTypes = {
  getAuthAction: PropTypes.func,
  token: PropTypes.string
}

export default connect(null, mapDispatchToProps)(SpotifyApp)
