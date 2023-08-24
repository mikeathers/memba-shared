import '@testing-library/jest-dom/extend-expect'
process.env.NEXT_PUBLIC_IS_PRODUCTION = 'false'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    isReady: true,
    pathname: '/',
    hash: '',
    query: {},
    asPath: '/',
    basePath: '',
  }),
}))

jest.mock('@/config', () => ({
  DEV_API_ROUTES: {
    USERS_API: '',
  },
  PROD_API_ROUTES: {
    USERS_API: '',
  },
}))

window.scrollTo = jest.fn()
