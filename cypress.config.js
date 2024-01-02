const { defineConfig } = require("cypress");

module.exports = defineConfig({
  integration: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
