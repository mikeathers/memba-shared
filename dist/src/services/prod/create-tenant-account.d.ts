import {NewCustomerFormDetails, RegisterTenantResponse} from '@/types'
interface CreateTenantAccountProps extends NewCustomerFormDetails {
  tier: string
}
export declare const createTenantAccount: (
  props: CreateTenantAccountProps,
) => Promise<RegisterTenantResponse | null>
export {}
//# sourceMappingURL=create-tenant-account.d.ts.map
