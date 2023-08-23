import {ENDPOINTS} from '@/config'
import {axiosTenantsAuthInstance} from '@/utils/axios/prod'
import {MembaApp} from '@/types'

interface GetAppProps {
  url: string
}

export const getBasicApp = async (props: GetAppProps): Promise<MembaApp | null> => {
  const {url} = props
  const URL = `${ENDPOINTS.GET_BASIC_APP}/${url}`

  const response = await axiosTenantsAuthInstance.request<MembaApp | null>({
    url: URL,
    method: 'GET',
  })

  return response.data
}
