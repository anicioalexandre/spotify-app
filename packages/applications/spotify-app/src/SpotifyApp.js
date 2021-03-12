import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'ds-image-icon'

import { getAuth } from './redux/modules/authToken'
import Routes from './Routes'
import { SPOTIFY_SRC_ICON } from './pages/Home/constants'
import { Link } from 'react-router-dom'

function SpotifyApp() {
  return (
    <div className="app-container">
      <header>
        <Link to="/">
          <ds-image-icon imageSrc={SPOTIFY_SRC_ICON} imageAlt="Spotify logo" />
        </Link>
      </header>
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
