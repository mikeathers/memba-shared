import axios from 'axios'
import {JWT_LOCALSTORAGE_KEY, DEV_API_ROUTES} from '@/config'
import {refreshJwt} from '../../refresh-jwt'
import {getItemFromLocalStorage} from '../../storage'

export const axiosUsersAuthInstanceDev = axios.create({
  baseURL: DEV_API_ROUTES.USERS_API,
  headers: {
    authorization: getUserToken() || '',
  },
  timeout: 5000,
})

axiosUsersAuthInstanceDev.interceptors.request.use(
  // Check JWT's validity before request is sent
  async function onFulfilled(config) {
    const accessToken = await refreshJwt()
    // eslint-disable-next-line no-param-reassign
    ;(config.headers as unknown as Record<string, unknown>).authorization = accessToken
    return config
  },
  // Reject if the call to Amplify errors out
  function onRejected(error) {
    console.log('Error: ', error)
    return Promise.reject(error)
  },
)

function getUserToken() {
  try {
    if (typeof window !== 'undefined') {
      return getItemFromLocalStorage<string>(JWT_LOCALSTORAGE_KEY)
    }
    return null
  } catch {
    return null
  }
}
