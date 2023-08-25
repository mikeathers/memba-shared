import {MembaUser, UserMembership} from '@/types'
export interface CreateUserAccountProps {
  emailAddress: string
  password: string
  firstName: string
  lastName: string
  groupName: string
  appId: string
  signUpRedirectUrl: string
  membership: UserMembership
}
export declare const createUserAccount: (
  props: CreateUserAccountProps,
) => Promise<MembaUser | null>
//# sourceMappingURL=create-user-account.d.ts.map
