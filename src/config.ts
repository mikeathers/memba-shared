import {
  GetTenantUserApiResponse,
  MembaApp,
  MembaUser,
  RegisterTenantResponse,
} from '@/types'
import {
  adminCheck as adminCheckDev,
  createGymApp as createGymAppDev,
  createTenantAccount as createTenantAccountDev,
  createUserAccount as createUserAccountDev,
  getApp as getAppDev,
  getBasicApp as getBasicAppDev,
  getTenantAccount as getTenantAccountDev,
  getUserAccount as getUserAccountDev,
  hasAccessCheck as hasAccessCheckDev,
} from '@/services/dev'
import {
  adminCheck,
  createGymApp,
  createTenantAccount,
  createUserAccount,
  getApp,
  getBasicApp,
  getTenantAccount,
  getUserAccount,
  hasAccessCheck,
} from '@/services/prod'

export const TEMP_LOCAL_STORAGE_PWD_KEY = 'TEMP_LOCAL_STORAGE_PWD_KEY'
export const IDENTITY_LOCALSTORAGE_KEY = 'IDENTITY_LOCALSTORAGE_KEY'
export const JWT_LOCALSTORAGE_KEY = 'JWT_LOCALSTORAGE_KEY'
interface PAGE_ROUTES {
  APPS: string
  MEMBERSHIPS: string
  GYM_MANAGEMENT: string
}

interface SITE_ROUTES {
  ID: string
  WEBSITE_HOME: string
}

export const PAGE_ROUTES: PAGE_ROUTES = {
  APPS: '/apps',
  GYM_MANAGEMENT: '/gym-management',
  MEMBERSHIPS: '/memberships',
}

export const DEV_SITE_ROUTES: SITE_ROUTES = {
  ID: process.env.NEXT_PUBLIC_ID_APP_URL ?? '',
  WEBSITE_HOME: 'https://dev.memba.co.uk',
}

export const PROD_SITE_ROUTES: SITE_ROUTES = {
  ID: 'https://id.memba.co.uk',
  WEBSITE_HOME: 'https://memba.co.uk',
}

interface API_ROUTES {
  USERS_API: string
  TENANTS_API: string
}

export const DEV_API_ROUTES: API_ROUTES = {
  USERS_API: 'https://users.dev.memba.co.uk',
  TENANTS_API: 'https://tenants.dev.memba.co.uk',
}

export const PROD_API_ROUTES: API_ROUTES = {
  USERS_API: 'https://users.memba.co.uk',
  TENANTS_API: 'https://tenants.memba.co.uk',
}

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

export const ENDPOINTS: ENDPOINTS = {
  GET_TENANT_ACCOUNT: '/tenants/get-account',
  GET_USER_ACCOUNT: '/users/get-account',
  CREATE_USER_ACCOUNT: 'users/create-account',
  CREATE_TENANT_ACCOUNT: '/tenants/create-account',
  GET_TENANT: 'get-tenant',
  GET_APP: 'get-app',
  GET_BASIC_APP: 'get-basic-app',
  HAS_ACCESS_TO_APP: 'has-access',
  CREATE_GYM_APP: 'create-gym-app',
  ADMIN_CHECK: 'tenants/is-admin',
}

interface AMPLIFY {
  USER_POOL_ID: string
  IDENTITY_POOL_ID: string
  USER_WEB_CLIENT_ID: string
}
const DEV_AMPLIFY: AMPLIFY = {
  USER_POOL_ID: 'eu-west-2_O3gVXNPRu',
  IDENTITY_POOL_ID: 'eu-west-2:84901c60-5169-4948-8f0e-d55e87bc127e',
  USER_WEB_CLIENT_ID: '1s5g5auqd5lv6h9ucut5d7g05m',
}

const PROD_AMPLIFY: AMPLIFY = {
  USER_POOL_ID: 'eu-west-2_eWg0ysJay',
  IDENTITY_POOL_ID: 'eu-west-2:1ee6f75f-c0d0-461a-bbf2-d2e203343f22',
  USER_WEB_CLIENT_ID: '69ffemp6aklgncfv39l44beupr',
}

interface SERVICES {
  ADMIN_CHECK: (props: AdminCheckProps) => Promise<boolean>
  CREATE_GYM_APP: (props: CreateGymAppProps) => Promise<GetTenantUserApiResponse | null>
  CREATE_TENANT_ACCOUNT: (
    props: CreateTenantAccountProps,
  ) => Promise<RegisterTenantResponse | null>
  CREATE_USER_ACCOUNT: (props: CreateUserAccountProps) => Promise<MembaUser | null>
  GET_APP: (props: GetAppProps) => Promise<MembaApp | null>
  GET_BASIC_APP: (props: GetAppProps) => Promise<MembaApp | null>
  GET_TENANT_ACCOUNT: (props: GetAccountProps) => Promise<MembaUser | null>
  GET_USER_ACCOUNT: (props: GetAccountProps) => Promise<MembaUser | null>
  HAS_ACCESS_CHECK: (props: HasAccessProps) => Promise<boolean>
}

const DEV_SERVICES: SERVICES = {
  ADMIN_CHECK: adminCheckDev,
  CREATE_GYM_APP: createGymAppDev,
  CREATE_TENANT_ACCOUNT: createTenantAccountDev,
  CREATE_USER_ACCOUNT: createUserAccountDev,
  GET_APP: getAppDev,
  GET_BASIC_APP: getBasicAppDev,
  GET_TENANT_ACCOUNT: getTenantAccountDev,
  GET_USER_ACCOUNT: getUserAccountDev,
  HAS_ACCESS_CHECK: hasAccessCheckDev,
}

const PROD_SERVICES: SERVICES = {
  ADMIN_CHECK: adminCheck,
  CREATE_GYM_APP: createGymApp,
  CREATE_TENANT_ACCOUNT: createTenantAccount,
  CREATE_USER_ACCOUNT: createUserAccount,
  GET_APP: getApp,
  GET_BASIC_APP: getBasicApp,
  GET_TENANT_ACCOUNT: getTenantAccount,
  GET_USER_ACCOUNT: getUserAccount,
  HAS_ACCESS_CHECK: hasAccessCheck,
}

interface CONFIG {
  PAGE_ROUTES: PAGE_ROUTES
  SITE_ROUTES: SITE_ROUTES
  API_ROUTES: API_ROUTES
  AMPLIFY: AMPLIFY
  ENDPOINTS: ENDPOINTS
  SERVICES: SERVICES
}

export const DEV_CONFIG: CONFIG = {
  PAGE_ROUTES,
  SITE_ROUTES: DEV_SITE_ROUTES,
  API_ROUTES: DEV_API_ROUTES,
  AMPLIFY: DEV_AMPLIFY,
  ENDPOINTS,
  SERVICES: DEV_SERVICES,
}

export const PROD_CONFIG: CONFIG = {
  PAGE_ROUTES,
  SITE_ROUTES: PROD_SITE_ROUTES,
  API_ROUTES: PROD_API_ROUTES,
  AMPLIFY: PROD_AMPLIFY,
  ENDPOINTS,
  SERVICES: PROD_SERVICES,
}

export const CONFIG = (stage: 'dev' | 'prod') =>
  stage === 'prod' ? PROD_CONFIG : DEV_CONFIG
