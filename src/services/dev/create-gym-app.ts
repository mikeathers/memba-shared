import {ENDPOINTS} from '@/config'
import {axiosTenantsAuthInstanceDev} from '@/utils/axios/dev'
import {GetTenantUserApiResponse} from '@/types'

export const createGymApp = async (
  props: CreateGymAppProps,
): Promise<GetTenantUserApiResponse | null> => {
  const URL = ENDPOINTS.CREATE_GYM_APP

  const response =
    await axiosTenantsAuthInstanceDev.request<GetTenantUserApiResponse | null>({
      url: URL,
      method: 'POST',
      data: props,
    })

  return response?.data
}
