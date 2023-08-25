import React from 'react'
import type {UseSafeAsyncReducerAction, UseSafeAsyncState} from './use-safe-async.types'
interface SafeAsyncReturnValue<T> {
  state: UseSafeAsyncState<T>
  dispatch: React.Dispatch<UseSafeAsyncReducerAction<T>>
}
export declare const useSafeAsyncReducer: <T>(
  initialState: UseSafeAsyncState<T> | undefined,
) => SafeAsyncReturnValue<T>
export {}
//# sourceMappingURL=use-safe-async.reducer.d.ts.map
