import axios from 'axios'
import {refreshJwt} from '../../refresh-jwt'
import {JWT_LOCALSTORAGE_KEY, PROD_API_ROUTES} from '@/config'
import {getItemFromLocalStorage} from '../../storage'

export const axiosTenantsAuthInstance = axios.create({
  baseURL: PROD_API_ROUTES.TENANTS_API,
  headers: {
    authorization: getUserToken() || '',
  },
  timeout: 5000,
})

axiosTenantsAuthInstance.interceptors.request.use(
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
