var UI_LOGIN_PAGE = {
    loginBtn:           "//button[@name='submitButton']",
    email:              "//div[@id]//input[@name='email']",
    password:           "//input[@name='password']",
    mgnError01:         "(//div[@class='invalid-popup-message']//li[contains(text(),'Required')])[1]",
    mgnError02:         "(//div[@class='invalid-popup-message']//li[contains(text(),'Required')])[2]",
    mgnErrorInvalid:    "//p[contains(text(), 'Invalid username or password.')]",
    mgnErrorInacitve:   "//p[contains(text(), 'User is inactive.')]",
    iconReviewPassword: "//img[@class='icon-input']",
    resendBtn:          "//button[contains(text(), 'Resend')]",
    mgnSuccessful:      "//p[contains(text(), 'The active email has been resent successfully.')]", 
    passwordType:       "//input[@value='Abcd@1234']",
}

module.exports = UI_LOGIN_PAGE;
