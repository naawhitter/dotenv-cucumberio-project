require('dotenv').config()

// https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#files
const common = {
  parallel: 2,
  paths: ['features/**/*.feature'],
  requireModule: ['ts-node/register'],
  require: [
    //'world/custom-world.ts',
    'step-definitions/**/*.steps.ts'
  ],
  format: [
    'html:report.html',
    'summary',
    '@cucumber/pretty-formatter',
    'cucumber-console-formatter',
  ],
  publishQuiet: true,
  worldParameters: {
    testUrl: process.env.TEST_URL,
  },
}

module.exports = {
  default: {
    ...common,
    format: ['progress-bar', 'html:report.html'],
  },
  snippets: {
    ...common,
    dryRun: true,
    format: ['snippets'],
  }
}
