import '@testing-library/jest-dom/extend-expect'

jest.mock('@/config', () => ({
  DEV_API_ROUTES: {
    USERS_API: '',
  },
  PROD_API_ROUTES: {
    USERS_API: '',
  },
}))
