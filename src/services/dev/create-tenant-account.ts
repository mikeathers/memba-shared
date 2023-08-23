import {ENDPOINTS} from '@/config'
import {RegisterTenantResponse} from '@/types'
import {axiosUsersAuthInstanceDev} from '@/utils/axios/dev'

export const createTenantAccount = async (
  props: CreateTenantAccountProps,
): Promise<RegisterTenantResponse | null> => {
  const URL = ENDPOINTS.CREATE_TENANT_ACCOUNT

  const response = await axiosUsersAuthInstanceDev.request<RegisterTenantResponse | null>(
    {
      url: URL,
      method: 'POST',
      data: props,
    },
  )

  return response.data
}
