const chai = require('chai');
const assert = chai.assert;

describe('Check the heigh of div container is exactly 300px', () => {
    it('Verify heigh in pixels', () =>{
        browser.url('/');
        let videoFrame = $('#udemy-promo-video');
        videoFrame.waitForExist(3000)
        let height = videoFrame.getCSSProperty('height');
        assert.equal(height.value , '340px')
        console.log(height.value);
    });
});