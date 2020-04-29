const chai = require('chai');
const assert = chai.assert;

describe.only('check for the main scenarios for client manager', () => {
    const JiraURL = 'https://jira2.iggroup.local/secure/TempoUserBoard!timesheet.jspa?v=1&filterIds=-1001&periodType=BILLING&periodView=PERIOD&period=0420';
    const user = 'preciac';
    const pass = 'Password123';
    const date = '29/Apr/20';
    const issue = 'QA-4';
    const hours = '8h';

    it('Log hours', () => {
        browser.url(JiraURL);
        const usernameInput = $('#login-form-username');
        const passwordInput = $('#login-form-password');
        usernameInput.setValue(user);
        passwordInput.setValue(pass);
        const loginBtn = $('#login-form-submit');
        loginBtn.click();
        const logHoursBtb = $('#tempo-add-button');
        logHoursBtb.click();
        const issueInput = $('#tempo-issue-picker-1-field');
        const dateInput = $('#datefield-1');
        const timeInput = $('#time-1');
        const logWorkBtn = $('[accesskey=s]');
        issueInput.setValue(issue);
        dateInput.clearValue();
        dateInput.click();
        dateInput.setValue(date);
        timeInput.click();
        timeInput.click();
        timeInput.setValue(hours);
        logWorkBtn.click();
        browser.pause(3000);
    });
});