import getTokenEndpoint from '../../services/getTokenEndpoint'

const REQUEST_AUTH_API = 'REQUEST_AUTH_API'
const REQUEST_AUTH_API_SUCCESS = 'REQUEST_AUTH_API_SUCCESS'
const REQUEST_AUTH_API_FAILURE = 'REQUEST_AUTH_API_FAILURE'

const requestAuthApi = () => ({
  type: REQUEST_AUTH_API
})

const requestAuthApiSuccess = (token) => ({
  type: REQUEST_AUTH_API_SUCCESS,
  token
})

const requestAuthApiFailure = (error) => ({
  type: REQUEST_AUTH_API_FAILURE,
  error
})

export const getAuth = () => {
  return (dispatch) => {
    dispatch(requestAuthApi())
    return getTokenEndpoint().then(
      (token) => dispatch(requestAuthApiSuccess(token)),
      ({ message }) => dispatch(requestAuthApiFailure(message))
    )
  }
}

const INITIAL_STATE = {
  token: '',
  error: false,
  loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_AUTH_API:
      return {
        ...state,
        loading: true
      }
    case REQUEST_AUTH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token
      }
    case REQUEST_AUTH_API_FAILURE:
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
