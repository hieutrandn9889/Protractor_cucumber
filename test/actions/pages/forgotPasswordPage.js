/**
 * Created by hieutran on 08/10/2017.
 */
var expect = require('./../../../expect.js');
var UI_FORGOT_PASSWORD = require('../../interface/forgotPasswordUI.js');
var abstractPage = require('../commons/abstractPage.js');
var forgotPasswordTestCasePage = function () {

    this.getURL = function (value) {
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().window().maximize();
        browser.get(value);
    };

    // click forgot password button
    this.clickForgotPasswordBtn = function () {
        abstractPage.clickToElement(UI_FORGOT_PASSWORD.forgotPasswordBtn);
        browser.sleep(2000);
    };

    // sendkey to input text
    this.typeEmailForgotPassword = function (id_email_forgotpassword) {
        abstractPage.sendkeyToElementValue(UI_FORGOT_PASSWORD.inputTextbox, id_email_forgotpassword);
        browser.sleep(2000);
    };

    // switch pop-up
    this.checkPopUp = function () {
        abstractPage.selectWindow();
        browser.sleep(2000);
    };

     // click next button in forgot password
     this.clickNextBtn = function(){
        abstractPage.clickToElement(UI_FORGOT_PASSWORD.forgotPasswordNextBtn);
        abstractPage.clickToElement(UI_FORGOT_PASSWORD.forgotPasswordNextBtn);
        browser.sleep(2000);
    };

    // verify email and password is inactive
    this.assertToElementFormatInacitve = function (id_errorFormatInacitve) {
        abstractPage.assertToElementValue(UI_FORGOT_PASSWORD.mgnErrorInvalid, id_errorFormatInacitve);
        browser.sleep(2000);
    };

};

module.exports = forgotPasswordTestCasePage;