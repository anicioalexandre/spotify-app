import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchInput from '../../components/SearchInput/'
import { getSearch } from '../../redux/modules/search'
import { getAuth } from '../../redux/modules/authToken'
import './style.css'
import 'ds-fieldset'
import 'ds-image-label'
import LoadingState from '../../components/LoadingState'
import { LABELS } from './constants'

const Search = ({
  token,
  getSearchAction,
  getAuthAction,
  albums,
  tracks,
  lastQuery,
  searchLoading
}) => {
  const { query } = useParams()
  const decodedQuery = decodeURI(query)

  useEffect(() => {
    if (!token) getAuthAction()
    if (token && lastQuery !== query) getSearchAction(token, query)
  }, [query, token])

  const renderLoadingState = () =>
    [...Array(6)].map((_, i) => <LoadingState key={i} />)

  return (
    <div className="search-container">
      <SearchInput
        disabled={searchLoading}
        label={LABELS.search}
        placeholder={LABELS.placeholder}
      />
      <ds-fieldset label={LABELS.albuns + `"${decodedQuery}"`}>
        {searchLoading
          ? renderLoadingState()
          : albums.map(({ albumId, albumImage, albumName, artistName }) => (
              <Link key={albumId} to={`/album/${albumId}`}>
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
        {searchLoading
          ? renderLoadingState()
          : tracks.map(
              ({ albumId, albumImage, artistName, trackId, trackName }) => (
                <Link key={trackId} to={`/album/${albumId}`}>
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
    albums: search.albums,
    tracks: search.tracks,
    lastQuery: search.query,
    searchLoading: search.loading
  }
}

const mapDispatchToProps = {
  getAuthAction: getAuth,
  getSearchAction: getSearch
}

Search.propTypes = {
  token: PropTypes.string,
  lastQuery: PropTypes.string,
  searchLoading: PropTypes.bool,
  getAuthAction: PropTypes.func,
  getSearchAction: PropTypes.func,
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
