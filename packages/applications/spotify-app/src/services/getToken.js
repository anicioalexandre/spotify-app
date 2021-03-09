import axios from 'axios'
import qs from 'qs'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const getToken = async () => {
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
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    )
    return response.data.access_token
  } catch (error) {
    console.error(error)
  }
}
