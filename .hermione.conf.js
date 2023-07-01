module.exports = {
  sets: {
    desktop: {
      files: "test/hermione",
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
        height: 1080,
      }
    },
  },
  plugins: {
    "html-reporter/hermione": {
      enabled: true,
    },
  },
};
