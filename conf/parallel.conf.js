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
  user: 'prateeks',
  key: 'IuCSesD83A7LsTFzEKS0Lb6tzvEfBQ38DMkFTEpudatxxxsdjH',
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'Parallel Sample Test',
    build: 'WebDriver Selenium Sample3'
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
		  "platform" : "iOS",
		"deviceName" : "iPhone 11",
		"platformVersion" : "13.6"
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
  waitforTimeout: 99999999,
  connectionRetryTimeout: 99999999,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 99999999
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
