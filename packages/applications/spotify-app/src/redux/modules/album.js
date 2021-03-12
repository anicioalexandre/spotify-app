import getAlbumEndpoint from '../../services/getAlbumEndpoint'

const REQUEST_ALBUM_API = 'REQUEST_ALBUM_API'
const REQUEST_ALBUM_API_SUCCESS = 'REQUEST_ALBUM_API_SUCCESS'
const REQUEST_ALBUM_API_FAILURE = 'REQUEST_ALBUM_API_FAILURE'

const requestAlbumApi = ({ id }) => ({
  type: REQUEST_ALBUM_API,
  albumId: id
})

const requestAlbumApiSuccess = ({ album, tracks }) => ({
  type: REQUEST_ALBUM_API_SUCCESS,
  album,
  tracks
})

const requestAlbumApiFailure = (error) => ({
  type: REQUEST_ALBUM_API_FAILURE,
  error
})

export const getAlbum = (token, id) => {
  return (dispatch) => {
    dispatch(requestAlbumApi({ id }))
    return getAlbumEndpoint(token, id).then(
      ({ artists, name, images, tracks }) =>
        dispatch(
          requestAlbumApiSuccess({
            album: formatAlbumData(artists, name, images),
            tracks: formatTrackData(tracks)
          })
        ),
      ({ message }) => dispatch(requestAlbumApiFailure(message))
    )
  }
}

const formatAlbumData = (artists, name, images) => ({
  albumImage: images[1].url,
  albumName: name,
  artistName: artists[0].name
})

const formatTrackData = ({ items }) =>
  items.map(({ duration_ms, id, name }) => ({
    trackDuration: formatDuration(duration_ms),
    trackId: id,
    trackName: name
  }))

const formatDuration = (duration) => Number((duration * 0.001) / 60).toFixed(2)

const INITIAL_STATE = {
  albumImage: '',
  albumName: '',
  artistName: '',
  albumId: '',
  tracks: [],
  error: false,
  loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ALBUM_API:
      return {
        ...state,
        loading: true,
        albumId: action.albumId
      }
    case REQUEST_ALBUM_API_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: action.tracks,
        ...action.album
      }
    case REQUEST_ALBUM_API_FAILURE:
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
