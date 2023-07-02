module.exports = {
  sets: {
    desktop: {
      files: "test/hermione/*hermione.ts",
    },
  },
  system: {
    fileExtensions: ['.ts'],
  },
  browsers: {
    chrome: {
      automationProtocol: "devtools",
      desiredCapabilities: {
        browserName: "chrome",
      },
      windowSize: {
        width: 1920,
        height: 2000,
      }
    },
  },
  plugins: {
    "html-reporter/hermione": {
      enabled: true,
    },
    "url-decorator": {
      enabled: true,
      url: {
        query: [
          {
            name: 'test',
            value: 'hermione',
          },
          {
            name: 'bug_id',
            value: process.env.BUG_ID,
          },
        ]
      },
    },
  },
};
