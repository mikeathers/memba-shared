import type {FC} from 'react'
import React from 'react'
import type {AuthContextValue, AuthProviderProps} from './auth.types'
export declare const AuthContext: React.Context<AuthContextValue | null>
declare const useAuth: () => AuthContextValue
declare const AuthProvider: FC<AuthProviderProps>
export {AuthProvider, useAuth}
//# sourceMappingURL=auth.context.d.ts.map
