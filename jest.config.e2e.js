/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true, 
  preset: "jest-puppeteer",
  setupFilesAfterEnv: ["jest-extended/all"]
};
