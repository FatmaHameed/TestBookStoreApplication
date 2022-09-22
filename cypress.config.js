const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    env: {
      username: 'FatmaSalah1',
      password: 'Fatma@secret1',
    },

    baseUrl: 'https://demoqa.com',
    specPattern: '**/*.feature',
    chromeWebSecurity: false,
    viewportWidth: 1200,
    viewportHeight: 800,
  },
});
