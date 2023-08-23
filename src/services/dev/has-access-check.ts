import {axiosTenantsAuthInstanceDev} from '@/utils/axios/dev'
import {ENDPOINTS} from '@/config'

export const hasAccessCheck = async (props: HasAccessProps): Promise<boolean> => {
  const {emailAddress, url} = props
  const URL = `${ENDPOINTS.HAS_ACCESS_TO_APP}?emailAddress=${emailAddress}&url=${url}`
  try {
    await axiosTenantsAuthInstanceDev.request({
      url: URL,
      method: 'GET',
    })

    return true
  } catch (error) {
    return false
  }
}
