import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'ds-image-label'
import 'ds-fieldset'
import 'ds-button'

import './style.css'
import { LABELS } from './constants'
import SearchInput from '../../components/SearchInput'
import { clearLocalStorage, getLocalStorage } from '../../utils/localStorage'
import { setClickedTrack } from '../../redux/modules/track'
import EmptyState from '../../components/EmptyState'

const Home = ({ setClickedTrackAction }) => {
  const [recentSearches, setRecentSearches] = useState([])

  useEffect(() => {
    setRecentSearches(getLocalStorage())
  }, [])
  return (
    <div className="home-container">
      <SearchInput />
      <ds-fieldset label={LABELS.recentSearch}>
        {!recentSearches?.length ? (
          <EmptyState customLabel={LABELS.emptyState} />
        ) : (
          recentSearches.map(
            ({ albumId, trackId, image, name, artistName }) => (
              <Link
                onClick={() => setClickedTrackAction(trackId)}
                key={trackId || albumId}
                to={`/album/${albumId}`}
              >
                <ds-image-label
                  data-testid="album-track-card"
                  imageSrc={image}
                  primaryLabel={name}
                  secondaryLabel={artistName}
                />
              </Link>
            )
          )
        )}
      </ds-fieldset>
      {!!recentSearches?.length && (
        <ds-button
          onClick={() => {
            setRecentSearches([])
            clearLocalStorage()
          }}
        >
          Limpar histórico
        </ds-button>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  setClickedTrackAction: setClickedTrack
}

Home.propTypes = {
  setClickedTrackAction: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Home)
