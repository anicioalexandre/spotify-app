import axios from 'axios'

import { SPOTIFY_ALBUMS_API } from './constants'

const getSearchEndpoint = async (token, id) => {
  try {
    const response = await axios.get(SPOTIFY_ALBUMS_API.concat(id), {
      headers: { Authorization: `Bearer ${token}` }
    })
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getSearchEndpoint
