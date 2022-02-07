describe('title demo', () => {
    it('first test', () => {
      browser.url("https://nightwatchjs.org");
      browser.assert.title("Nightwatch.js | Node.js powered End-to-End testing framework");
    });



    it('demo test', () => {
       
        browser
                .waitForElementVisible('.houses-right > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)')
                .assert.containsText('#top-section > div > div > div > div > div:nth-child(1) > p','End-to-end testing, the easy way.')

      });


  });