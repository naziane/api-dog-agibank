const { defineConfig } = require("cypress");


module.exports = defineConfig({
reporter: "mochawesome",
reporterOptions: {
  reportDir: "cypress/reports",
  overwrite: false,
  html: false,
  json: true
},
e2e: {
  baseUrl: "https://dog.ceo/api",
  specPattern: "cypress/e2e/api/**/*.js",
  setupNodeEvents(on, config) {
    return config;

  }
},
});


