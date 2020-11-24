"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, doubleClick, link,tap, waitFor, scrollTo } = require('taiko');
const assert = require("assert");
const headless = false;

describe('Search For Book', () => {

    describe('Book Search Scenario', () => {

      it('Search for Books', async () => {
       await write('A Philosophy of Software Design', into($('#twotabsearchtextbox')));
        await click($('#nav-search-submit-text'));
    });

        it('Click A Philosophy of Software Design Book in the UI', async () => {

          await click($("//a/span[contains(text(),'A Philosophy of Software Design')]"));

        });


        it('Validate the Details Page', async () => {
           assert.ok($('#productTitle').text(), 'A Philosophy of Software Design');
          });

          it('Click On the Paperback', async () => {
           waitFor("Paperback", 10000)
           await click(text('Paperback'));
          });
          it('Click On the Add to Cart', async () => {
            await click(text('Add to Cart'));
          }); 


    });

});
