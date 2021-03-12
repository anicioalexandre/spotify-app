import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'

import { getTrack } from '../../redux/modules/track'

const TrackPlayer = ({
  trackClicked,
  trackPreview,
  getTrackAction,
  token,
  trackLoading
}) => {
  const audioTag = document.querySelector('audio')
  useEffect(() => {
    if (token && trackClicked) getTrackAction(token, trackClicked)
    if (trackClicked && trackPreview) {
      audioTag.load()
      audioTag.play()
    }
    if (!trackPreview && audioTag) audioTag.pause()
  }, [trackClicked, token, trackPreview])

  return (
    <div>
      <audio className="track-player" controls name="media">
        <source src={trackPreview} type="audio/mpeg" />
      </audio>
      {!trackPreview && trackClicked && !trackLoading && (
        <legend>
          * A prévia da música pode não estar disponível no momento.
        </legend>
      )}
    </div>
  )
}

const mapStateToProps = ({ auth, track }) => {
  return {
    token: auth.token,
    trackPreview: track.preview,
    trackLoading: track.loading
  }
}

const mapDispatchToProps = {
  getTrackAction: getTrack
}

TrackPlayer.propTypes = {
  token: PropTypes.string,
  trackLoading: PropTypes.bool,
  trackClicked: PropTypes.string,
  trackPreview: PropTypes.string,
  getTrackAction: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer)
