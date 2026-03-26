const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://blog.agibank.com.br',
    retries: {
      runMode: 2,
      openMode: 2
    }
  },
});
