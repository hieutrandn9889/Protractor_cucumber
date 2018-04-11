exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
  
    specs: [
                'test/features/Login.feature'
            ],
  
    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
      'browserName': 'firefox',
      'platformName': 'Android',
      'platformVersion': '7.1.1',
      'deviceName': '192.168.56.101:5555',
      'appPackage': "com.appyguide",
      'appActivity': "com.appyguide.MainActivity",
    },
  
    baseUrl: 'http://0.0.0.0:4723'
  };