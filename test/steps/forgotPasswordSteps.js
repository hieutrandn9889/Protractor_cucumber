/**
 * Created by hieutran on 08/10/2017.
 */

var forgotPasswordTestCasePage = function () {

    var forgotPasswordTestCasePage = require("../actions/pages/forgotPasswordPage.js");

    this.Before(function (scenario, callback) {
        this.forgotPasswordPage = new forgotPasswordTestCasePage();
        callback();
    });

    //click forgot button
    this.Then('I click Forgot password button', function (callback) {
        this.forgotPasswordPage.clickForgotPasswordBtn();
        callback();
    });

    // switch pop-up
    this.Then('I verify pop-up', function (callback) {
        this.forgotPasswordPage.checkPopUp();
        callback();
    });

    // input email in textbox
    this.When('I input email invalid $email', function (email, callback) {
        this.forgotPasswordPage.typeEmailForgotPassword(email);
        callback();
    });

    //click next button
    this.Then('I click next button', function (callback) {
        this.forgotPasswordPage.clickNextBtn();
        callback();
    });

    // verify message error
    this.Then('I verify message forgot password page errorFormatEmail $errorFormatEmail', function (errorFormatEmail, callback) {
        this.forgotPasswordPage.assertToElementFormatInacitve(errorFormatEmail);
        callback();
    });

};

module.exports = forgotPasswordTestCasePage;