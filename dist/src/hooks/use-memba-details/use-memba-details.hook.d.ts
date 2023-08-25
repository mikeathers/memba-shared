import {MembaApp, MembaUser} from '@/types'
interface MembaStore {
  getTenantUser: (emailAddress: string) => Promise<void>
  user: MembaUser | null
  getUser: (emailAddress: string) => Promise<void>
  app: MembaApp | null
  getApp: () => Promise<void>
}
export declare const useMembaDetails: import('zustand').UseBoundStore<
  import('zustand').StoreApi<MembaStore>
>
export {}
//# sourceMappingURL=use-memba-details.hook.d.ts.map
