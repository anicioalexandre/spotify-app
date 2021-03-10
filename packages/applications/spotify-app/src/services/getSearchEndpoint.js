import axios from 'axios'

import { SPOTIFY_SEARCH_API, SPOTIFY_SEARCH_TYPE } from './constants'

const getSearchEndpoint = async (token, searchQuery) => {
  console.log(token, 'token')
  try {
    const response = await axios.get(SPOTIFY_SEARCH_API, {
      headers: { Authorization: `Bearer ${token}` },
      params: { q: searchQuery, type: SPOTIFY_SEARCH_TYPE }
    })
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getSearchEndpoint
