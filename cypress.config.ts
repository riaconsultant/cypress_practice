import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1920,
  chromeWebSecurity: true,
  env: {},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
