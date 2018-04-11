var UI_FORGOT_PASSWORD = {
    forgotPasswordBtn:     "//a[@class='forgot-password']",
    inputTextbox:          "(//input[@name='email'])[2]",
    switchForgotPassword:  "//div[@class='modal-content']",
    forgotPasswordNextBtn: "(//button[@name='submitButton'])[2]",
    mgnErrorInvalid:       "//li[contains(text(), 'Invalid email address')]",
    mgnError01:            "//li[contains(text(), 'Required')]",
    closeBtn:              "//button[@class='close']",
    OKBtn:                 "//button[contains(text(),'OK')]",
    resendBtn:             "//button[contains(text(),'Resend')]",
    mgnSuccessful:         "//p[contains(text(),'The active email has been resent successfully.')]",
}

module.exports = UI_FORGOT_PASSWORD;
