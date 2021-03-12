import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'ds-ordered-list'
import { setClickedTrack } from '../../redux/modules/track'

const TracksList = ({ dataList, lastTrackPlayed, setClickedTrackAction }) => {
  const list = useRef(null)

  useEffect(() => {
    if (list.current && dataList?.length) {
      list.current.addEventListener('listitemclick', (e) => {
        setClickedTrackAction(e.detail.id)
      })
      list.current.dataList = dataList
    }
  }, [dataList])

  return <ds-ordered-list itemSelected={lastTrackPlayed} ref={list} />
}

const mapStateToProps = ({ track }) => ({
  lastTrackPlayed: track.id
})

const mapDispatchToProps = {
  setClickedTrackAction: setClickedTrack
}

TracksList.propTypes = {
  setClickedTrackAction: PropTypes.func,
  lastTrackPlayed: PropTypes.string,
  getTrackClicked: PropTypes.func,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      trackDuration: PropTypes.string.isRequired,
      trackId: PropTypes.string.isRequired,
      trackName: PropTypes.string.isRequired
    })
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksList)
