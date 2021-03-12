import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const LoadingState = ({ width, height }) => {
  return (
    <div className="card">
      <div style={{ width, height }} className="image" />
      <div className="content">
        <h2></h2>
        <p></p>
      </div>
    </div>
  )
}

LoadingState.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default LoadingState
