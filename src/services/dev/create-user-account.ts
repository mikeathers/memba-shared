import {ENDPOINTS} from '@/config'
import {axiosUsersAuthInstanceDev} from '@/utils/axios/dev'
import {MembaUser} from '@/types'

export const createUserAccount = async (
  props: CreateUserAccountProps,
): Promise<MembaUser | null> => {
  const URL = ENDPOINTS.CREATE_USER_ACCOUNT

  const response = await axiosUsersAuthInstanceDev.request<MembaUser | null>({
    url: URL,
    method: 'POST',
    data: props,
  })

  return response.data
}
