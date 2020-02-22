const chai = require('chai');
const assert = chai.assert;

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        browser.setWindowSize(1200, 800)
        await browser.url('/');
        const title = await browser.getTitle();
        assert.equal(title, 'WebDriverUniversity.com')
    });

    it('Verify texbox in webdriver university', () => {
        browser.url('/');
        const contactUsLink = $('#contact-us');
        contactUsLink.click();
        browser.switchWindow('WebDriver | Contact Us')
        const title = browser.getTitle();
        assert.equal(title, 'WebDriver | Contact Us')
    });
});