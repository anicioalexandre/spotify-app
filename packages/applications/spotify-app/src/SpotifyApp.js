import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getAuth } from './redux/modules/authToken'
import Routes from './Routes'

function SpotifyApp() {
  return (
    <div className="app-container">
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
