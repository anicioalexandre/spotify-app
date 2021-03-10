import getSearchEndpoint from '../../services/getSearchEndpoint'

const REQUEST_SEARCH_API = 'REQUEST_SEARCH_API'
const REQUEST_SEARCH_API_SUCCESS = 'REQUEST_SEARCH_API_SUCCESS'
const REQUEST_SEARCH_API_FAILURE = 'REQUEST_SEARCH_API_FAILURE'

const requestSearchApi = ({ query }) => ({
  type: REQUEST_SEARCH_API,
  query
})

const requestSearchApiSuccess = ({ albums, tracks }) => ({
  type: REQUEST_SEARCH_API_SUCCESS,
  albums,
  tracks
})

const requestSearchApiFailure = (error) => ({
  type: REQUEST_SEARCH_API_FAILURE,
  error
})

export const getSearch = (token, searchQuery) => {
  return (dispatch) => {
    dispatch(requestSearchApi({ query: searchQuery }))
    return getSearchEndpoint(token, searchQuery).then(
      ({ albums, tracks }) =>
        dispatch(
          requestSearchApiSuccess({
            albums: formatAlbumData(albums),
            tracks: formatTrackData(tracks)
          })
        ),
      ({ message }) => dispatch(requestSearchApiFailure(message))
    )
  }
}

const formatAlbumData = ({ items }) =>
  items.map(({ artists, id, name, images }) => ({
    artistName: artists[0].name,
    albumId: id,
    albumName: name,
    albumImage: images[1].url
  }))

const formatTrackData = ({ items }) =>
  items.map(({ album, artists, id, name }) => ({
    artistName: artists[0].name,
    trackId: id,
    trackName: name,
    albumImage: album.images[1].url
  }))

const INITIAL_STATE = {
  albums: [],
  tracks: [],
  error: false,
  loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_API:
      return {
        ...state,
        loading: true,
        query: action.query
      }
    case REQUEST_SEARCH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.albums,
        tracks: action.tracks
      }
    case REQUEST_SEARCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}
export default reducer
