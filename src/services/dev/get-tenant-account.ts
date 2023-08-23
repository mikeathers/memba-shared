import {ENDPOINTS} from '@/config'
import {axiosUsersAuthInstanceDev} from '@/utils/axios/dev'
import {MembaUser} from '@/types'

export const getTenantAccount = async (
  props: GetAccountProps,
): Promise<MembaUser | null> => {
  const {emailAddress} = props
  const URL = `${ENDPOINTS.GET_TENANT_ACCOUNT}/${emailAddress}`

  const response = await axiosUsersAuthInstanceDev.request<MembaUser | null>({
    url: URL,
    method: 'GET',
    data: props,
  })

  return response.data
}
