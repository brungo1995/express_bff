module.exports = {
  collectCoverage: true,
  clearMocks: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: [
    "<rootDir>/tests/src"
    // "<rootDir>/src"
  ],
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
};

// module.exports = {
//   collectCoverage: true,
//   testPathIgnorePatterns: ["/node_modules/"],
//   verbose: false,
//   moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
//   testMatch: ["**/__tests__/src/**/*.[jt]s?(x)"]
//   // testMatch: ["**/__tests__/src/views/user/**/*.[jt]s?(x)"]
// };
