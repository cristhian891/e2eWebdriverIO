describe('Get URL from save',() =>{
    it('Get URL', () => {
        browser.url('https://etfscreener.ig.com/');
        let popBtn = $('.btn.cta-btn.primary-investments-cta');
        popBtn.waitForDisplayed();
        popBtn.click();
        let saveBtn = $('.hideIE9.function-button.save-button');
        saveBtn.click();
        let URL = browser.getUrl();
        browser.pause(2000);
        let closeBtn = $('.btn.btn-default');
        closeBtn.click();
        browser.newWindow(URL)
        browser.pause(3000);
        popBtn.waitForDisplayed();
        popBtn.click();
        console.log($('h1').getText());

        let tt = browser.execute( () => {
           //$('h1').css({color: 'red'})
            return $('h1').context.URL
        });
        console.log(tt)
        browser.pause(5000)


    })
});