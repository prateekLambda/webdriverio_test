exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: 'prateek.delguy',
  key: '9DjIGDAUAnyqaNELLFGeGyLCcdW2W4diRXje0U5yaHr8nAReqE',
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'Parallel Sample Test',
    build: 'WebDriver Selenium Sample1'
  },

  capabilities: [
    {
      platfrom: "win10",
      browserName: "chrome",
      version: "64.0"
    },
    {
      platform: "win10",
      browserName: "firefox",
      version: "64.0"
    },
    {
      platform: "win10",
      browserName: "internet explorer",
      version: "11.0"
    },
    {
    "platform" : "Android",
		"deviceName" : "Galaxy S10",
		"platformVersion" : "9"
    },
    {
    "platform" : "Android",
		"deviceName" : "Galaxy S10",
		"platformVersion" : "9"
    },
    {
    "platform" : "Android",
		"deviceName" : "Galaxy S10",
		"platformVersion" : "9"
    }
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd"
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
