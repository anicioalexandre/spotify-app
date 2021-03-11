module.exports = {
  verbose: true,
  globals: {
    NODE_ENV: 'test'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/config/__mocks__/webpackFileMock.js',
    '\\.(css|less)$': '<rootDir>/src/config/__mocks__/webpackStyleMock.js'
  },
  moduleFileExtensions: ['js', 'jsx'],
  transformIgnorePatterns: [
    '/node_modules/(?!(lit-element|lit-html)).+\\.(js|ts)$'
  ]
}
