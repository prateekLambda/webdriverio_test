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
  specs: ["./tests/specs/single_test.js"],
  exclude: [],

  capabilities: [
    {
      browserName: "chrome",
      version: "64.0",
      name: "Test webdriverio",
      build: "build 1",
      network: false,
      video: true,
      visual: false,
      console: false
    }
  ],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd"
  }
};
