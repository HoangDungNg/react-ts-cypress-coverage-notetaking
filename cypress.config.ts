import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      codeCoverageTask(on, config);
      return config;
    },
  },
});
