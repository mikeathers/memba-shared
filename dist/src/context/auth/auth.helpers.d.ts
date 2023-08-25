import type {
  ChallengedUser,
  ChangePasswordProps,
  CompletePasswordResetProps,
  CompleteRegistrationProps,
  RegisterUserProps,
} from './auth.types'
import {LoginFormDetails} from '@/types'
export declare const registerUser: (props: RegisterUserProps) => Promise<void>
export declare const completeRegistration: (
  props: CompleteRegistrationProps,
) => Promise<void>
export declare const signUserIn: (
  props: LoginFormDetails,
) => Promise<ChallengedUser | null>
export declare const signUserOut: () => Promise<void>
export declare const sendForgotPasswordLink: (email: string) => Promise<void>
export declare const completeResetPassword: (
  props: CompletePasswordResetProps,
) => Promise<void>
export declare const resendConfirmationEmail: (email: string) => Promise<void>
export declare const changePassword: (props: ChangePasswordProps) => Promise<void>
export declare const googleSignIn: () => Promise<void>
export declare const appleSignIn: () => Promise<void>
//# sourceMappingURL=auth.helpers.d.ts.map
