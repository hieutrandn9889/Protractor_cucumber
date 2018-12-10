/**
 * Created by hieutran on 08/10/2017.
 */

var expect = require('../../../expect.js');

var abstractPage = {};

//Find to element ==> DONE
abstractPage.findElement = function (controlName) {
    try {
        var elementFind = null;
        elementFind = element(By.xpath(controlName));
        return elementFind;
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

//Find to element has value
abstractPage.findElementValue = function (specialControl, value) {
    try {
        var elementFindValue = null;
        var controlName = format(specialControl, value);
        elementFindValue = element(By.xpath(controlName));
        return elementFindValue;
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// click to element ==> DONE
abstractPage.clickToElement = function (controlName) {
    try {
        var elementClick = abstractPage.findElement(controlName);
        elementClick.click();
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// click to element has value ==> DONE
abstractPage.clickToElementValue = function (controlName, value) {
    try {
        var elementClick = abstractPage.findElement(controlName);
        elementClick.click(value);
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// sendkey to element ==> DONE
abstractPage.sendkeyToElement = function (controlName) {
    try {
        var elementSendkey = abstractPage.findElement(controlName);
        elementSendkey.clear();
        elementSendkey.sendKeys();
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// sendkey to element has value ==> DONE
abstractPage.sendkeyToElementValue = function (controlName, value) {
    try {
        var elementSendkey = abstractPage.findElement(controlName);
        elementSendkey.clear();
        elementSendkey.sendKeys(value);
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// select Item Combobox
abstractPage.selectItemCombobox = function (controlName, item) {
    try {
        var elementSelectItemCombobox = abstractPage.findElement(controlName);
        select = new Select(elementSelectItemCombobox);
        select.selectByVisibleText(item);
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// select Item Combobox has value
abstractPage.selectItemCombobox = function (controlName, item, value) {
    try {
        var elementSelectItemCombobox = abstractPage.findElement(controlName);
        var select = new Select(elementSelectItemCombobox);
        select.selectByVisibleText(item);
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};
// get Item Selected Combobox
abstractPage.getItemSelectedCombobox = function (controlName) {
    try {
        var elementGetItemSelectedCombobox = abstractPage.findElement(controlName);
        var select = new Select(elementGetItemSelectedCombobox);
        var itemSelected = select.getFirstSelectedOption().getText();
        return itemSelected;
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// get Item Selected Combobox has value
abstractPage.getItemSelectedCombobox = function (controlName, value) {
    try {
        var elementGetItemSelectedCombobox = abstractPage.findElementValue(controlName, value);
        var select = new Select(elementGetItemSelectedCombobox);
        var itemSelected = select.getFirstSelectedOption().getText();
        return itemSelected;
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// isPresent to element 
abstractPage.ispresentToElement = function (controlName) {
    try {
        var elementIsPresent = abstractPage.findElement(controlName);
        elementIsPresent.isPresent();
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// Verify Present to element ==> DONE
abstractPage.presentToElement = function (controlName) {
    try {
        var elementPresent = abstractPage.findElement(controlName);
        expect(elementPresent).to.be.present;
        browser.sleep(1000);
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// Verify Assert to element has value ==> DONE
abstractPage.assertToElementValue = function (controlName, value) {
    try {
        var elementPresentValue = abstractPage.findElement(controlName);
        elementPresentValue.getText().then(function (text) {
            expect(text).to.equal(value);
            browser.sleep(1500);
        });
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// visible
abstractPage.getWhenVisible = function (locator, timeout) {
    try {
        var elementWhenVisible = null;
        var wait = new WebDriverWait(timeout);
        elementWhenVisible = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        return elementWhenVisible;
    } catch (error) {
        console.log('Message error: ', error);
    }
};
// invisible
abstractPage.getWhenInVisible = function (locator, timeout) {
    try {
        var elementWhenInVisible = null;
        var wait = new WebDriverWait(timeout);
        elementWhenInVisible = wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));
        return elementWhenInVisible;
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// switch pop-up
abstractPage.selectWindow = function () {
    try {
        browser.getAllWindowHandles().then(function (handles) {
            var popupHandle = handles[0];
            browser.switchTo().window(popupHandle);
        })
    } catch (error) {
        console.log('Message error: ', error);
    }
};

// get Current URL
abstractPage.getCurrentUrlPage = function () {
    try {
        browser.getCurrentUrl().then(function (url) {
            console.log(url);
        });

    } catch (error) {
        console.log('Message error: ', error);
    }
};

module.exports = abstractPage;