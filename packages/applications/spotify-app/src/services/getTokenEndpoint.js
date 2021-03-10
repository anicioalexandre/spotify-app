import axios from 'axios'
import qs from 'qs'

import { SPOTIFY_TOKEN_API } from './constants'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const getTokenEndpoint = async () => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: CLIENT_ID,
      password: CLIENT_SECRET
    }
  }
  const data = {
    grant_type: 'client_credentials'
  }

  try {
    const response = await axios.post(
      SPOTIFY_TOKEN_API,
      qs.stringify(data),
      headers
    )
    return Promise.resolve(response.data.access_token)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getTokenEndpoint
