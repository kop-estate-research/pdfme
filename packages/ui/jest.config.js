module.exports = {
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./__tests__/test-helpers.js'],
  moduleNameMapper: {
    '\\.(png|css)$': '<rootDir>/__mocks__/assetsTransformer.js',
    '^rc-picker/es/': 'rc-picker/lib/',
    '^lodash-es$': 'lodash',
    '^pdfjs-dist/legacy/build/pdf.js$': '<rootDir>/__mocks__/pdfjs-dist.js',
    '^pdfjs-dist/legacy/build/pdf.worker.entry.js$': '<rootDir>/__mocks__/pdfjs-dist.js',
  },
  resolver: 'ts-jest-resolver',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
    '^.+\\.tsx$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
};
