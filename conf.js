exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'test/features/login.feature',
        // 'test/features/forgotPassword.feature'
    ],
    // vi du chay gop nhom cac test case
//     suites:{
//         login: [
//             './test/specs/login.spec.js'
//        ]
//     },
    cucumberOpts: {
        require: ['hook.js', 'test/steps/*Steps.js'],
        format: 'pretty'
    },
    // multiCapabilities: [
    //     {
    //         browserName: 'chrome',
    //         shardTestFiles: true,
    //         maxInstances: 1,
    //         chromeOptions: {
    //             args: [
    //                 '--disable-infobars',
    //                 '--disable-extensions',
    //                 'verbose',
    //                 'log-path=./reports/chromedriver.log'
    //             ],
    //             prefs: {
    //                 'profile.password_manager_enabled': false,
    //                 'credentials_enable_service': false,
    //                 'password_manager_enabled': false
    //             }
    //         }
    //     },
    //     {
    //         browserName: 'firefox',
    //         marionette: 'true',
    //     },
    // ],

    // capabilities: {
    //     browserName: 'firefox',
    //     acceptSslCerts: true,
    //     shardTestFiles: false,
    //     maxInstances: 1
    // }


    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: [
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=./reports/chromedriver.log'
            ],
            prefs: {
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    }

}

