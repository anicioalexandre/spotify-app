import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import 'ds-ordered-list'

const TracksList = ({ dataList }) => {
  const list = useRef(null)

  useEffect(() => {
    if (list.current) {
      list.current.addEventListener('listitemclick', (e) => {
        console.log('track id', e.detail.id)
      })
      list.current.dataList = dataList
    }
  }, [dataList])

  return <ds-ordered-list ref={list} />
}

TracksList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      trackDuration: PropTypes.string.isRequired,
      trackId: PropTypes.string.isRequired,
      trackName: PropTypes.string.isRequired
    })
  )
}

export default TracksList
