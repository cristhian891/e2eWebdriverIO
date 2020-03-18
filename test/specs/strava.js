const chai = require('chai');
const assert = chai.assert;

describe('Get different metrics from Strava account', () => {
    it('Gets Fitness current level ',  () => {
        browser.url('https://www.strava.com');
        const loginBtn = $('.btn.btn-default.btn-login');
        loginBtn.click();
        const emailInput = $('#email');
        emailInput.setValue('cristianprec@hotmail.com');
        const passwordInput = $('#password');
        passwordInput.setValue('London2018..');
        const loginpageBtn = $('#login-button');
        loginpageBtn.click();
        browser.pause(3000);
        browser.url('https://www.strava.com/athlete/fitness');
        browser.pause(3000);

        const getStartedBtn = $('.btn.btn-primary.ftue-button');
        getStartedBtn.click();

        const currentFitness = $('#ff-fitness');
        currentFitness.waitForDisplayed();
        let fitness = currentFitness.getText();
        console.log(fitness);

    });
});