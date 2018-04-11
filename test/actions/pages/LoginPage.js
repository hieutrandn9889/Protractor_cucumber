/**
 * Created by hieutran on 08/10/2017.
 */
var expect              = require('./../../../expect.js');
var UI_LOGIN_PAGE       = require('../../interface/loginPageUI.js');
var UI_ABSTRACT_PAGE    = require('../../interface/abstractPageUI.js');
var abstractPage        = require('../commons/abstractPage.js');

var BankTestCasePage    = function () {
    
    this.getURL = function (value) {
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().window().maximize();
        browser.get(value);
    };

    this.typeUserNamePassword = function (i_email, i_password) {
        abstractPage.sendkeyToElementValue(UI_LOGIN_PAGE.email, i_email);
        abstractPage.sendkeyToElementValue(UI_LOGIN_PAGE.password, i_password);
    };

    // click login button
    this.clickLoginBtn = function () {
        abstractPage.clickToElement(UI_LOGIN_PAGE.loginBtn);
        browser.sleep(2000);
    };

    // click login button at header
    this.clickLoginHeaderBtn = function () {
        abstractPage.clickToElement(UI_ABSTRACT_PAGE.loginBtnHeader);
        browser.sleep(2000);
    };

    // click logo button at header in Register or login
    this.clickLogoHeaderBtn = function () {
        abstractPage.clickToElement(UI_ABSTRACT_PAGE.logoLoginRegister);
        browser.sleep(2000);
    };

    // click review password 
    this.clickReviewPasswordBtn = function () {
        abstractPage.clickToElement(UI_LOGIN_PAGE.iconReviewPassword);
        browser.sleep(2000);
    };

    

    // verify don't input email and password
    this.assertToElement = function (id_errorEmail, id_errorPassword) {
        abstractPage.assertToElementValue(UI_LOGIN_PAGE.mgnError01, id_errorEmail);
        abstractPage.assertToElementValue(UI_LOGIN_PAGE.mgnError02, id_errorPassword);
        browser.sleep(2000);
    };

    // verify don't input password, only input email
    this.assertToElementFormatPassword = function (id_errorPassword) {
        abstractPage.assertToElementValue(UI_LOGIN_PAGE.mgnError01, id_errorPassword);
        browser.sleep(2000);
    };

    // verify don't input email, only input password
    this.assertToElementFormatEmail = function (id_errorFormatEmail) {
        abstractPage.assertToElementValue(UI_LOGIN_PAGE.mgnError01, id_errorFormatEmail);
        browser.sleep(2000);
    };

     // verify email and password is invalid
     this.assertToElementFormatInvalid = function (id_errorFormatInvalid) {
        abstractPage.assertToElementValue(UI_LOGIN_PAGE.mgnErrorInvalid, id_errorFormatInvalid);
        browser.sleep(2000);
    };

    // verify email and password is inactive
    this.assertToElementFormatInacitve = function (id_errorFormatInacitve) {
        abstractPage.assertToElementValue(UI_LOGIN_PAGE.mgnErrorInacitve, id_errorFormatInacitve);
        browser.sleep(2000);
    };

    //verify password display
    this.presentToElementPassword = function () {
        abstractPage.presentToElement(UI_LOGIN_PAGE.passwordType);
        browser.sleep(2000);
    };
    

    // verify login button display     
    this.presentToElementLoginBtn = function () {
        abstractPage.presentToElement(UI_LOGIN_PAGE.loginBtn);
        browser.sleep(2000);
    };

    // get current url page 
    this.getCurrentUrlPage = function () {
        abstractPage.getCurrentUrlPage();
        browser.sleep(2000);
    };
    
};

module.exports = BankTestCasePage;