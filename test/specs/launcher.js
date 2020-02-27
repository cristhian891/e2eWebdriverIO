const chai = require('chai');
const assert = chai.assert;

describe('Test different functionalities in the launcher', () => {
    it('Verifies I can open a Japanese Account',  () => {

        browser.url('https://web.ig.com/static-content-bootstrap/inhouseusers');
        browser.maximizeWindow();
        const IGcompanyDropdown = $('.form-control.form-control-sm');
        const getUserBtn = $('._2pEp4a6PWddl5jZxfLeMl8.btn.btn-info');

        IGcompanyDropdown.selectByVisibleText('IGJP');
        getUserBtn.click();


        const userNameValue = $('div > .table > tbody > tr:nth-child(2) > td');
        const passwordValue = $('div > .table > tbody > tr:nth-child(3) > td');

        user = userNameValue.getText();
        passw = passwordValue.getText();

        browser.url('https://net.ig.com/wtp-launcher#/');
        browser.switchWindow('https://net.ig.com/wtp-launcher#/');

        const addBtn = $('.credentials_header a:nth-child(2)');
        addBtn.click();

        const envDropDown = $("[name='environment']");
        envDropDown.selectByVisibleText('UAT');

        browser.pause(3000)

        const usernameInput = $("[name='username']");
        usernameInput.setValue(user);

        const passwordInput = $("[name='password']");
        passwordInput.setValue(passw);

        const AddBtn = $('.btn-group :nth-child(1)');
        AddBtn.click();


        const accountLabel = $('.list_item-main');

        accountLabel.click();

        browser.pause(3000)
        console.log('something');
        // Opens an specific platform given by 2 params, account and platform
        function openPlatform (account, platform) {
            const accountNames = $$('.list-container_item');

            for (let i = 0; i < accountNames.length; i++) {
                if (accountNames[i].$('h3').getText().includes(account)) {
                    const buttonArray = accountNames[i].$$('.credentials-new_login-buttons__placeholder button span');
                    console.log(buttonArray);
                    for (let j = 0; j < buttonArray.length; j++) {
                        let nameBtn = buttonArray[j].getText();
                        console.log(nameBtn);
                        if (nameBtn === platform) {
                            buttonArray[j].click();
                            browser.pause(4000)
                        }
                    }
                }
            }
        }
        openPlatform('FX', 'WTP');

    });
});