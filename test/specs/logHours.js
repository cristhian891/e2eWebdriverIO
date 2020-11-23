const chai = require('chai');
const assert = chai.assert;

describe.only('check for the main scenarios for client manager', () => {
    const JiraURL = 'https://jira2.iggroup.local/secure/TempoUserBoard!timesheet.jspa?v=1&filterIds=-1001&periodType=BILLING&periodView=PERIOD&period=0420';
    const user = '';
    const pass = '';
    const month = 'May';
    const year = '20';
    const issue = 'QA-4';
    const hours = '8h';
    const days = ['04', '05', '06', '07', '08'];
    const convert = (d) => {
        for(let i = 0; i < d.length; i++) {
            d[i] = d[i] + '/' + month + '/' + year;
        }
        return d
    };
        it('Log hours', () => {
            browser.url(JiraURL);
            const usernameInput = $('#login-form-username');
            const passwordInput = $('#login-form-password');
            usernameInput.setValue(user);
            passwordInput.setValue(pass);
            const loginBtn = $('#login-form-submit');
            loginBtn.click();
            for(let dat of convert(days)) {
                const logHoursBtb = $('#tempo-add-button');
                logHoursBtb.click();
                const issueInput = $('#tempo-issue-picker-1-field');
                const dateInput = $('#datefield-1');
                const timeInput = $('#time-1');
                const logWorkBtn = $('[accesskey=s]');
                issueInput.setValue(issue);
                dateInput.clearValue();
                dateInput.click();
                dateInput.setValue(dat);
                timeInput.click();
                timeInput.click();
                timeInput.setValue(hours);
                logWorkBtn.click();
                browser.pause(3000);
            }
        });


});
