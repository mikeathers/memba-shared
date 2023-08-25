import {CognitoError, GetTenantUserApiResponse} from '@/types'
export declare const errorHasMessage: (obj: any) => obj is Error
export declare const isCognitoError: (obj: any) => obj is CognitoError
export declare const isHttpOKResponse: (obj: any) => obj is import('@/types').BaseResponse
export declare const isHttpBadResponse: (
  obj: any,
) => obj is import('@/types').BaseResponse
export declare const hasResult: (obj: any) => obj is GetTenantUserApiResponse
//# sourceMappingURL=index.d.ts.map
