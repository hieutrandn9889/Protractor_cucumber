/**
 * Created by hieutran on 08/10/2017.
 */

var BankTestCaseSteps = function () {

    var BankTestCasePage = require("../actions/pages/loginPage.js");

    this.Before(function (scenario, callback) {
        this.LoginPage = new BankTestCasePage();
        callback();
    });

    this.Given('I open website $website', function (website, callback) {
        this.LoginPage.getURL(website);
        callback();
    });

    this.When('I input email $email, password $password', function (email, password, callback) {
        this.LoginPage.typeUserNamePassword(email, password);
        callback();
    });

    // click login button
    this.Then('I click login button', function (callback) {
        this.LoginPage.clickLoginBtn();
        callback();
    });

    // click login button at header
    this.Then('I click login button at header', function (callback) {
        this.LoginPage.clickLoginHeaderBtn();
        callback();
    });

    // click review password 
    this.Then('I click review password button', function (callback) {
        this.LoginPage.clickReviewPasswordBtn();
        callback();
    });

    // click logo at header in registration or login page
    this.Then('I click logo button at header', function (callback) {
        this.LoginPage.clickLogoHeaderBtn();
        callback();
    });

    // verify don't input email and password
    this.Then('I verify message errorEmail $errorEmail, errorPassword $errorPassword', function (errorEmail, errorPassword, callback) {
        this.LoginPage.assertToElement(errorEmail, errorPassword);
        callback();
    });

    // verify don't input password, only input email
    this.Then('I verify message errorFormatEmail, errorPassword $errorPassword', function (errorPassword, callback) {
        this.LoginPage.assertToElementFormatPassword(errorPassword);
        callback();
    });

    // verify don't input email, only input password
    this.Then('I verify message errorFormatEmail $errorFormatEmail, errorPassword', function (errorFormatEmail, callback) {
        this.LoginPage.assertToElementFormatEmail(errorFormatEmail);
        callback();
    });

    // verify email and password is invalid
    this.Then('I verify message errorFormatInvalid $errorFormatInvalid', function (errorFormatInvalid, callback) {
        this.LoginPage.assertToElementFormatInvalid(errorFormatInvalid);
        callback();
    });

    // verify email and password is inactive
    this.Then('I verify message errorFormatInacitve $errorFormatInacitve', function (errorFormatInacitve, callback) {
        this.LoginPage.assertToElementFormatInacitve(errorFormatInacitve);
        callback();
    });

    //verify password display
    this.Then('I verify password display', function (callback) {
        this.LoginPage.presentToElementPassword();
        callback();
    });

    //verify login button display
    this.Then('I verify this page', function (callback) {
        this.LoginPage.presentToElementLoginBtn();
        this.LoginPage.getCurrentUrlPage();
        callback();
    });
    
    // verify The page re-fresh
    this.Then('The page re-fresh', function (callback) {
        this.LoginPage.getCurrentUrlPage();
        callback();
    });

    // close browser 
    this.Then('I close browser', function (callback) {
        browser.close();
        callback();
    });




};

module.exports = BankTestCaseSteps;