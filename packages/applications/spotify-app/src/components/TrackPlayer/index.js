import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'

import { getTrack } from '../../redux/modules/track'

const TrackPlayer = ({
  trackPreview,
  getTrackAction,
  token,
  trackLoading,
  lastTrackPlayed
}) => {
  const audioTag = document.querySelector('audio')

  useEffect(() => {
    if (token && lastTrackPlayed) {
      getTrackAction(token, lastTrackPlayed)
    }
  }, [lastTrackPlayed, token])

  useEffect(() => {
    if (audioTag && lastTrackPlayed && trackPreview) {
      audioTag.load()
      audioTag.volume = 0.05
      audioTag.play()
    }
    if (!trackPreview && audioTag) audioTag.pause()
  }, [lastTrackPlayed, token, trackPreview, audioTag])

  return (
    <div>
      <audio className="track-player" controls name="media">
        <source src={trackPreview} type="audio/mpeg" />
      </audio>
      {!trackPreview && lastTrackPlayed && !trackLoading && (
        <legend>
          * A prévia desta música pode não estar disponível no momento.
        </legend>
      )}
    </div>
  )
}

const mapStateToProps = ({ auth, track }) => {
  return {
    token: auth.token,
    trackPreview: track.preview,
    trackLoading: track.loading,
    lastTrackPlayed: track.id
  }
}

const mapDispatchToProps = {
  getTrackAction: getTrack
}

TrackPlayer.propTypes = {
  token: PropTypes.string,
  trackLoading: PropTypes.bool,
  lastTrackPlayed: PropTypes.string,
  trackPreview: PropTypes.string,
  getTrackAction: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer)
