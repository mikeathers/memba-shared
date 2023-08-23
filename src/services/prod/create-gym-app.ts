import {ENDPOINTS} from '@/config'
import {axiosTenantsAuthInstance} from '@/utils/axios/prod'
import {GetTenantUserApiResponse} from '@/types'

export const createGymApp = async (
  props: CreateGymAppProps,
): Promise<GetTenantUserApiResponse | null> => {
  const URL = ENDPOINTS.CREATE_GYM_APP

  const response =
    await axiosTenantsAuthInstance.request<GetTenantUserApiResponse | null>({
      url: URL,
      method: 'POST',
      data: props,
    })

  return response?.data
}
