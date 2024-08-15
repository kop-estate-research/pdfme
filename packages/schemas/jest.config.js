module.exports = {
  resolver: 'ts-jest-resolver',
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
