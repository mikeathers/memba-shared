import {
  MembaUser,
  MembershipPricing,
  NewCustomerFormDetails,
  UserMembership,
} from '@/types'

declare global {
  /******************* ********************/
  /*************** SERVICES PROPS *********/
  /******************* ********************/

  type AdminCheckProps = {
    emailAddress: string
  }

  type CreateGymAppProps = {
    tenantId: string
    gymName: string
    tier: string
    memberships: MembershipPricing[]
    tenantAdminEmailAddress: string
    user: MembaUser | null
  }

  type CreateTenantAccountProps = NewCustomerFormDetails & {
    tier: string
  }

  type CreateUserAccountProps = {
    emailAddress: string
    password: string
    firstName: string
    lastName: string
    groupName: string
    appId: string
    signUpRedirectUrl: string
    membership: UserMembership
  }

  type GetAppProps = {
    url: string
  }

  type GetAccountProps = {
    emailAddress: string
  }

  type HasAccessProps = {
    emailAddress: string
    url: string
  }
}

export {}
