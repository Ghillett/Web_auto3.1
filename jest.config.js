const config = {
    collectCoverageFrom: [
      '!**/node_modules/**',
      '!**/coverage/**',
      '!**jest.config.js**',
      '!**package.json**',
      '!**package-lock.json**'
    ],
    "coverageThreshold": {
      "branches": 100,
      "functions": 100,
      "lines": 100
  }
};
  
module.exports = config;