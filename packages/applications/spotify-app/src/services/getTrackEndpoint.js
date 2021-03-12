import axios from 'axios'

import { SPOTIFY_TRACKS_API } from './constants'

const getTrackEndpoint = async (token, id) => {
  try {
    const response = await axios.get(SPOTIFY_TRACKS_API.concat(id), {
      headers: { Authorization: `Bearer ${token}` }
    })
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getTrackEndpoint
