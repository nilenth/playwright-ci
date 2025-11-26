import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,
  testDir: 'tests',
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
  reporter: [['list'], ['junit', { outputFile: 'test-results/results.xml' }]],
});
