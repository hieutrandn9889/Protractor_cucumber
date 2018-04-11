var UI_ABSTRACT_PAGE = {
    languageBtn:       "//a[@data-toggle='dropdown']",
    selectLangage:     "(//div[@class='dropdown languages nav-item mr-2 show']/div[@class='dropdown-menu show']/button[@type='button'])[1]",
    registrationBtn:   "//a[contains(text(),'JOIN FOR FREE')]",
    loginBtnHeader:    "//a[contains(text(),'LOG IN')]",
    logoLoginRegister: "//img[@class='logo']",
    logoDashboard:     "//a[@class='navbar-brand mx-auto']",
    summaryBtn:        "(//a[contains(text(),'SUMMARY ')])[2]",
    topUpBtn:          "(//a[contains(text(),'TOP UP')])[2]",
    transferBtn:       "(//a[contains(text(),'TRANSFER')])[2]",
    walletBtn:         "(//a[contains(text(),'WALLET')])[2]",
    bankCardsBtn:      "(//a[contains(text(),'BANK & CARDS')])[2]",
    activitiesBtn:     "(//a[contains(text(),'ACTIVITIES')])[2]",
    settingsBtn:       "(//a[contains(text(),'SETTINGS')])[2]",
    supportBtn:        "(//a[contains(text(),'SUPPORT')])[2]"
}

module.exports = UI_ABSTRACT_PAGE;
