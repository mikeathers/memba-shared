/// <reference types="jest" />
import type {AuthContextValue} from '@/context'
import {ActionTypes} from '@/hooks/use-safe-async/use-safe-async.types'
export declare const mockState: () => {
  mockRun: jest.Mock<any, any, any>
  mockSignUserIn: jest.Mock<any, any, any>
  mockSignUserOut: jest.Mock<any, any, any>
  mockRegisterUser: jest.Mock<any, any, any>
  mockRefreshUserSession: jest.Mock<any, any, any>
  mockDispatch: jest.Mock<any, any, any>
  useAuthMockState: AuthContextValue
  useSafeAsyncMockState: {
    isIdle: boolean
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    resetAsyncState: jest.Mock<any, any, any>
    setError: jest.Mock<any, any, any>
    error: null
    status: ActionTypes
    data: {}
    run: jest.Mock<any, any, any>
  }
  mockSendForgotPasswordLink: jest.Mock<any, any, any>
  mockResendConfirmationEmail: jest.Mock<any, any, any>
  mockCompleteResetPassword: jest.Mock<any, any, any>
  mockCompleteRegistration: jest.Mock<any, any, any>
  mockChangePassword: jest.Mock<any, any, any>
  mockAddUserToState: jest.Mock<any, any, any>
  mockGoogleSignIn: jest.Mock<any, any, any>
  mockAppleSignIn: jest.Mock<any, any, any>
}
//# sourceMappingURL=index.d.ts.map
