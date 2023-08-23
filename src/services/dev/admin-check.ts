import {ENDPOINTS} from '@/config'
import {axiosTenantsAuthInstanceDev} from '@/utils/axios/dev'

export const adminCheck = async (props: AdminCheckProps): Promise<boolean> => {
  const {emailAddress} = props
  const URL = `${ENDPOINTS.ADMIN_CHECK}/${emailAddress}`

  const response = await axiosTenantsAuthInstanceDev.request<boolean>({
    url: URL,
    method: 'GET',
    data: props,
  })

  return response?.data
}
