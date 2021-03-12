import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'ds-image-label'
import 'ds-fieldset'

import './style.css'
import { LABELS } from './constants'
import SearchInput from '../../components/SearchInput/'
import { getSearch } from '../../redux/modules/search'
import { getAuth } from '../../redux/modules/authToken'
import LoadingState from '../../components/LoadingState'
import { setClickedTrack } from '../../redux/modules/track'
import { setSearchedResults } from '../../utils/localStorage'
import EmptyState from '../../components/EmptyState'

const Search = ({
  token,
  setClickedTrackAction,
  getSearchAction,
  getAuthAction,
  albums,
  tracks,
  lastQuery,
  searchLoading,
  tokenLoading
}) => {
  const { query } = useParams()
  const decodedQuery = decodeURI(query)

  useEffect(() => {
    if (!token) getAuthAction()
    if (token && lastQuery !== query) getSearchAction(token, query)
  }, [query, token])

  const isSomethingLoading = tokenLoading || searchLoading
  const isAlbumsEmpty = !albums.length
  const isTracksEmpty = !tracks.length

  const renderState = () => {
    if (isSomethingLoading)
      return [...Array(6)].map((_, i) => <LoadingState key={i} />)
    if (isAlbumsEmpty || isTracksEmpty) {
      return <EmptyState />
    }
  }

  return (
    <div className="search-container">
      <SearchInput disabled={searchLoading} />
      <ds-fieldset label={LABELS.albuns + `"${decodedQuery}"`}>
        {isSomethingLoading || isAlbumsEmpty
          ? renderState()
          : albums.map(({ albumId, albumImage, albumName, artistName }) => (
              <Link
                onClick={() => {
                  setClickedTrackAction('')
                  setSearchedResults({
                    albumId,
                    image: albumImage,
                    name: albumName,
                    artistName
                  })
                }}
                key={albumId}
                to={`/album/${albumId}`}
              >
                <ds-image-label
                  data-testid="album-card"
                  imageSrc={albumImage}
                  primaryLabel={albumName}
                  secondaryLabel={artistName}
                />
              </Link>
            ))}
      </ds-fieldset>
      <ds-fieldset label={LABELS.tracks + `"${decodedQuery}"`}>
        {isSomethingLoading || isTracksEmpty
          ? renderState()
          : tracks.map(
              ({ albumId, albumImage, artistName, trackId, trackName }) => (
                <Link
                  onClick={() => {
                    setClickedTrackAction(trackId)
                    setSearchedResults({
                      trackId,
                      albumId,
                      image: albumImage,
                      artistName,
                      name: trackName
                    })
                  }}
                  key={trackId}
                  to={`/album/${albumId}`}
                >
                  <ds-image-label
                    data-testid="track-card"
                    imageSrc={albumImage}
                    primaryLabel={trackName}
                    secondaryLabel={artistName}
                  />
                </Link>
              )
            )}
      </ds-fieldset>
    </div>
  )
}

const mapStateToProps = ({ auth, search }) => {
  return {
    token: auth.token,
    tokenLoading: auth.loading,
    albums: search.albums,
    tracks: search.tracks,
    lastQuery: search.query,
    searchLoading: search.loading
  }
}

const mapDispatchToProps = {
  getAuthAction: getAuth,
  getSearchAction: getSearch,
  setClickedTrackAction: setClickedTrack
}

Search.propTypes = {
  token: PropTypes.string,
  lastQuery: PropTypes.string,
  searchLoading: PropTypes.bool,
  tokenLoading: PropTypes.bool,
  getAuthAction: PropTypes.func,
  getSearchAction: PropTypes.func,
  setClickedTrackAction: PropTypes.func,
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.string.isRequired,
      albumImage: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    })
  ),
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      albumImage: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      trackId: PropTypes.string.isRequired,
      trackName: PropTypes.string.isRequired
    })
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
