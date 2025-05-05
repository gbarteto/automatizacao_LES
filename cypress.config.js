const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c4semq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080/ecommerce_tenis_war_exploded/',
  },

  reporter: 'mochawesome',
  reporterOptions: {
    html: true,
    json: false,
    reportDir: 'cypress/reports/mochawesome-report',
    timestamp: 'ddmmyyyy_HHMMss',
  }
});
