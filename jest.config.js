module.exports = {
  // Add more setup options before each test is run
  resolver: `<rootDir>/src/test-support/resolver.js`,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@config$': '<rootDir>/config/index.ts',
  },
  automock: false,
  collectCoverage: false,
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  globals: {},
}
