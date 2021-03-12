import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'ds-ordered-list'

const TracksList = ({ dataList, getTrackClicked, lastTrackPlayed }) => {
  const list = useRef(null)

  useEffect(() => {
    if (list.current) {
      list.current.addEventListener('listitemclick', (e) => {
        getTrackClicked(e.detail.id)
      })
      list.current.dataList = dataList
    }
  }, [dataList])

  return <ds-ordered-list itemSelected={lastTrackPlayed} ref={list} />
}

const mapStateToProps = ({ track }) => ({
  lastTrackPlayed: track.id
})

TracksList.propTypes = {
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

export default connect(mapStateToProps)(TracksList)
