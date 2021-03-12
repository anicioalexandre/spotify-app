import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getAlbum } from '../../redux/modules/album'
import TracksList from '../../components/TracksList'
import { getAuth } from '../../redux/modules/authToken'
import 'ds-button'
import './style.css'
import LoadingState from '../../components/LoadingState'

const Album = ({ token, getAlbumAction, getAuthAction, album }) => {
  const { id } = useParams()
  const history = useHistory()
  useEffect(() => {
    if (!token) getAuthAction()
    if (token && album.id !== id) getAlbumAction(token, id)
  }, [id, token])
  return (
    <div className="album-container">
      <ds-button onClick={() => history.goBack()} isReturnButton>
        Voltar
      </ds-button>
      <div className="image-list-container">
        <div>
          {album.loading ? (
            <LoadingState width={300} height={300} />
          ) : (
            <ds-image-label
              imageSrc={album.image}
              imageWidth={300}
              imageHeight={300}
              primaryLabel={album.name}
              secondaryLabel={album.artistName}
            />
          )}
        </div>
        <div className="list-container">
          <TracksList dataList={album.tracks} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth, album }) => {
  return {
    token: auth.token,
    album: {
      artistName: album.artistName,
      id: album.albumId,
      image: album.albumImage,
      name: album.albumName,
      tracks: album.tracks,
      loading: album.loading
    }
  }
}

const mapDispatchToProps = {
  getAuthAction: getAuth,
  getAlbumAction: getAlbum
}

Album.propTypes = {
  token: PropTypes.string,
  getAuthAction: PropTypes.func,
  getAlbumAction: PropTypes.func,
  album: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        trackDuration: PropTypes.string.isRequired,
        trackId: PropTypes.string.isRequired,
        trackName: PropTypes.string.isRequired
      })
    )
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
