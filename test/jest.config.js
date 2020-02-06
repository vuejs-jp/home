module.exports = {
  rootDir: '..',
  moduleFileExtensions: [
    'js',
    'ts',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1'
  },
  testRegex: '/test/.*\\.spec\\.ts$',
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest'
  }
}
