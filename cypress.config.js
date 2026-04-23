const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
};