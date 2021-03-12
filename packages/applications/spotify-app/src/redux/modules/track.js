import getTrackEndpoint from '../../services/getTrackEndpoint'

const REQUEST_TRACK_API = 'REQUEST_TRACK_API'
const REQUEST_TRACK_API_SUCCESS = 'REQUEST_TRACK_API_SUCCESS'
const REQUEST_TRACK_API_FAILURE = 'REQUEST_TRACK_API_FAILURE'
const SET_CLICKED_TRACK = 'SET_CLICKED_TRACK'

const requestTrackApi = () => ({
  type: REQUEST_TRACK_API
})

const requestTrackApiSuccess = (preview) => ({
  type: REQUEST_TRACK_API_SUCCESS,
  preview
})

const requestTrackApiFailure = (error) => ({
  type: REQUEST_TRACK_API_FAILURE,
  error
})

export const setClickedTrack = (id) => ({
  type: SET_CLICKED_TRACK,
  trackId: id
})

export const getTrack = (token, id) => {
  return (dispatch) => {
    dispatch(requestTrackApi())
    return getTrackEndpoint(token, id).then(
      ({ preview_url }) => dispatch(requestTrackApiSuccess(preview_url)),
      ({ message }) => dispatch(requestTrackApiFailure(message))
    )
  }
}

const INITIAL_STATE = {
  id: '',
  preview: '',
  error: false,
  loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_TRACK_API:
      return {
        ...state,
        loading: true
      }
    case REQUEST_TRACK_API_SUCCESS:
      return {
        ...state,
        loading: false,
        preview: action.preview
      }
    case REQUEST_TRACK_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case SET_CLICKED_TRACK:
      return {
        ...state,
        id: action.trackId
      }

    default:
      return state
  }
}
export default reducer
