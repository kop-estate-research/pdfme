module.exports = {
  resolver: 'ts-jest-resolver',
  globalTeardown: '<rootDir>/teardown.mjs',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.esm.json',
      },
    ],
  },
  testMatch: ['**/*.test.ts'],
};
