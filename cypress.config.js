const { defineConfig } = require("cypress");

const environments = {
  qauto: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    email: 'fgfttt@gmail.com',
    password: 'Qwerty12345',
  },

  qauto2: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    email: 'fgjh56@gmail.com',
    password: 'Qwerty12345',
  }
};

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 6000,
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      const envName = config.env.environment || "qauto";
      const env = environments[envName];

      config.env = { ...config.env, ...env };

      return config;
    }
  }
});
