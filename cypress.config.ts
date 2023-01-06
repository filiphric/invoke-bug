const { defineConfig } = require("cypress");
import { testSetupData } from './seedDatabase'

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on('task', { testSetupData })
    },
    baseUrl: 'http://localhost:3000'
  }
});
