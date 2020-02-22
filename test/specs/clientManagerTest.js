const chai = require('chai');
const assert = chai.assert;

describe('check for the main scenarions for client manager', () => {

    const demoURL = 'https://demo.marketdatasystems.com/clientmanager/';
    const prdURL = 'https://www.marketdatasystems.com/clientmanager/';
    const user = 'Michael5';
    const pass = '123456';

        it('First scenario: Login to client manager', () => {

        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        let wrapper = $('.clearFix')

        console.log(wrapper.$$('li').length);

        assert.isTrue(wrapper.$$('li').length  === 5);
        assert.equal(browser.getTitle(), 'CM - Reports');

        const logout = $('#btnLogout');
        logout.click();


    });

    it(' Second scenario: Verify Order history', () => {
        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        const orderHistoryLink = $('#orderHistory .boxHeader');
        orderHistoryLink.click();

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        assert.equal(browser.getTitle(), 'CM - Order History')

        const logout = $('#btnLogout');
        logout.click();

    });

    it(' Third scenario: Verify Client List', () => {
        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        const ClienListLink = $('#clientList .boxHeader');
        ClienListLink.click();

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        assert.equal(browser.getTitle(), 'CM - Client List')

        const logout = $('#btnLogout');
        logout.click();


    });

    it(' Fourth scenario: Verify Comission history', () => {
        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        const comissionHistoryLink = $('#clientCommission .boxHeader');
        comissionHistoryLink.click();

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        assert.equal(browser.getTitle(), 'CM - Commission History')

        const logout = $('#btnLogout');
        logout.click();


    });

    it(' Fifth scenario: Verify Client Ledger', () => {
        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        const clientLedgerListLink = $('#clientLedger .boxHeader');
        clientLedgerListLink.click();

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        assert.equal(browser.getTitle(), 'CM - Ledger History')

        const logout = $('#btnLogout');
        logout.click();


    });

    it('Check for a match row', () => {

        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        const orderHistoryLink = $('#orderHistory .boxHeader');
        orderHistoryLink.click();

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        //let arrayTime = browser.$$('table tr td:nth-child(2)');

        const logout = $('#btnLogout');
        logout.click();

    });

    it('FILTER BY ACCOUNT ID', () => {

        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        const orderClienListLink = $('#clientList .boxHeader');
        orderClienListLink.click();

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        const filterButton = $('.ig-table-addFilter');
        const filterTexField = $('input.inputBox');
        const accountIdLink = $('#yui-gen0accountId');

        filterButton.click();
        accountIdLink.click();
        filterTexField.setValue('ZNE3W');
        browser.keys("\uE007");

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        let arrayTime = browser.$$('table tr td:nth-child(1)');

        for( i of arrayTime){
            var ispresent = false;
            if(i.getText() === 'ZNE3W'){
                ispresent = true;
            }
        }

        assert.isTrue(ispresent)

        const logout = $('#btnLogout');
        logout.click();
    });

    it('Verify Position summary', () => {
        browser.url(demoURL);
        const username = $('#username');
        username.setValue(user);
        const password = $('#password');
        password.setValue(pass);
        const loginButton = $('button');
        loginButton.click();

        const PositionSummaryLink = $('#positionSummary .boxHeader');
        PositionSummaryLink.click();

        browser.waitUntil(() => {
            return $('table').isExisting()
        }, 3000, 'expected text to be different after 5s');

        assert.equal(browser.getTitle(), 'CM - Position Summary');

        const logout = $('#btnLogout');
        logout.click();
    });
});