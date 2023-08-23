import type {FormikErrors, FormikValues} from 'formik'

/******************* ********************/
/*************** DATA MODELS ************/
/******************* ********************/

export type AuthUser = {
  emailAddress: string
  familyName: string
  givenName: string
  isTenantAdmin?: boolean
  isMembaAdmin?: boolean
  tenantId?: string
}

export type MembershipPricing = {
  name: string
  price: number
}

export type MembaApp = {
  name: string
  memberships: MembershipPricing[]
  id: string
  url: string
  tier: string
  type: 'gym-management'
  tenantId: string
  groupName: string
  users: MembaUser[] | []
}

export type Tenant = {
  id: string
  admins: string[]
  apps: MembaApp[]
}

export type MembaUser = {
  authenticatedUserId: string
  emailAddress: string
  firstName: string
  lastName: string
  id: string
  groupName: string
  isTenantAdmin: boolean
  isMembaAdmin: boolean
  tenantId: string
  tenant: Tenant
  appId: string
  signUpRedirectUrl: string
  membership: UserMembership
}

export type TenantApp = {
  name: string
  memberships: MembershipPricing[]
  id: string
  url: string
  tier: string
  type: 'gym-management'
}

export type UserMembership = {
  name: string
  id: string
  url: string
  type: 'gym-management'
}

export type CognitoUserAttributes = {
  email: string
  family_name: string
  given_name: string
  picture?: string
  phone_number?: string
  address?: string
  'custom:isTenantAdmin'?: boolean
  'custom:isMembaAdmin'?: boolean
  'custom:tenantId'?: string
}

/******************* ********************/
/*************** ERRORS *****************/
/******************* ********************/

export type FormikError =
  | string
  | string[]
  //eslint-disable-next-line
  | FormikErrors<any>
  //eslint-disable-next-line
  | FormikErrors<any>[]
  | undefined

export type CognitoError = {
  name: string
  code: string
  message: string
}

export type ErrorWithMessage = {
  message: string
}

/******************* ********************/
/*************** FORMS ******************/
/******************* ********************/

export type SignupFormDetails = FormikValues & {
  emailAddress: string
  password: string
  fullName: string
}

export type ForgotPasswordFormDetails = Pick<SignupFormDetails, 'emailAddress'>
export type ResetPasswordFormDetails = Pick<SignupFormDetails, 'password'> & {
  code: string
}

export type LoginFormDetails = FormikValues & {
  emailAddress: string
  password: string
  url: string
}

export type NewCustomerFormDetails = FormikValues & {
  emailAddress?: string
  password?: string
  firstName?: string
  lastName?: string
}

/******************* ********************/
/*************** RESPONSES **************/
/******************* ********************/

export type RegisterTenantResponse = {
  statusCode: number
  body: {
    id: string
    tenantName: string
    tier: string
    firstName: string
    lastName: string
    emailAddress: string
    addressLineOne: string
    addressLineTwo: string
    doorNumber: string
    townCity: string
    postCode: string
    tenantUrl: string
  }
}

export type GetTenantUserApiResponse = {
  body: MembaUser
  statusCode: number
}

export type BaseResponse = {
  message: string
  statusCode: number
}

export type BadResponse = BaseResponse
export type OKResponse = BaseResponse
export type UnauthorizedResponse = BaseResponse

/******************* ********************/
/*************** CONTENT ****************/
/******************* ********************/

export type SharedContent = {
  allRightsReserved: string
}
