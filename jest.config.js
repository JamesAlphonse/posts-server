module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testMatch: ["**/**/*.test.ts"],
  verbose: true,
  // forceExit: true,
  // clearMocks: true,
}