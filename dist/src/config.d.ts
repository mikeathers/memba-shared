import {
  GetTenantUserApiResponse,
  MembaApp,
  MembaUser,
  RegisterTenantResponse,
} from '@/types'
export declare const TEMP_LOCAL_STORAGE_PWD_KEY = 'TEMP_LOCAL_STORAGE_PWD_KEY'
export declare const IDENTITY_LOCALSTORAGE_KEY = 'IDENTITY_LOCALSTORAGE_KEY'
export declare const JWT_LOCALSTORAGE_KEY = 'JWT_LOCALSTORAGE_KEY'
interface PAGE_ROUTES {
  APPS: string
  MEMBERSHIPS: string
  GYM_MANAGEMENT: string
  HOME: string
  SIGN_UP: string
  CONFIRM_ACCOUNT: string
  LOGIN: string
  FORGOT_PASSWORD: string
  RESET_PASSWORD: string
}
export declare const PAGE_ROUTES: PAGE_ROUTES
interface SITE_ROUTES {
  START: string
  ID: string
  WEBSITE_HOME: string
}
export declare const DEV_SITE_ROUTES: SITE_ROUTES
export declare const PROD_SITE_ROUTES: SITE_ROUTES
interface API_ROUTES {
  USERS_API: string
  TENANTS_API: string
}
export declare const DEV_API_ROUTES: API_ROUTES
export declare const PROD_API_ROUTES: API_ROUTES
interface ENDPOINTS {
  CREATE_TENANT_ACCOUNT: string
  GET_TENANT_ACCOUNT: string
  GET_USER_ACCOUNT: string
  GET_TENANT: string
  CREATE_GYM_APP: string
  GET_APP: string
  GET_BASIC_APP: string
  HAS_ACCESS_TO_APP: string
  CREATE_USER_ACCOUNT: string
  ADMIN_CHECK: string
}
export declare const ENDPOINTS: ENDPOINTS
interface AMPLIFY {
  USER_POOL_ID: string
  IDENTITY_POOL_ID: string
  USER_WEB_CLIENT_ID: string
}
interface SERVICES {
  adminCheck: (props: AdminCheckProps) => Promise<boolean>
  createGymApp: (props: CreateGymAppProps) => Promise<GetTenantUserApiResponse | null>
  createTenantAccount: (
    props: CreateTenantAccountProps,
  ) => Promise<RegisterTenantResponse | null>
  createUserAccount: (props: CreateUserAccountProps) => Promise<MembaUser | null>
  getApp: (props: GetAppProps) => Promise<MembaApp | null>
  getBasicApp: (props: GetAppProps) => Promise<MembaApp | null>
  getTenantAccount: (props: GetAccountProps) => Promise<MembaUser | null>
  getUserAccount: (props: GetAccountProps) => Promise<MembaUser | null>
  hasAccessCheck: (props: HasAccessProps) => Promise<boolean>
}
interface CONFIG {
  PAGE_ROUTES: PAGE_ROUTES
  SITE_ROUTES: SITE_ROUTES
  API_ROUTES: API_ROUTES
  AMPLIFY: AMPLIFY
  ENDPOINTS: ENDPOINTS
  services: SERVICES
}
export declare const DEV_CONFIG: CONFIG
export declare const PROD_CONFIG: CONFIG
export declare const CONFIG: (stage: 'dev' | 'prod') => CONFIG
export {}
//# sourceMappingURL=config.d.ts.map
