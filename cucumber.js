module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/steps/**/*.ts'],
    format: [
      'progress-bar',
      '@cucumber/pretty-formatter',
      'html:cucumber-report.html',
      'json:cucumber-report.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true
  }
};
