import {ENDPOINTS} from '@/config'
import {axiosTenantsAuthInstanceDev} from '@/utils/axios/dev'
import {MembaApp} from '@/types'

export const getApp = async (props: GetAppProps): Promise<MembaApp | null> => {
  const {url} = props
  const URL = `${ENDPOINTS.GET_APP}/${url}`

  const response = await axiosTenantsAuthInstanceDev.request<MembaApp | null>({
    url: URL,
    method: 'GET',
  })

  return response.data
}
