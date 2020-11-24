"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, doubleClick, link,tap, waitFor, scrollDown } = require('taiko');
const assert = require("assert");
const headless = false;

describe('Search For Black Friday deals', () => {

    describe('Black Firday Deals', () => {

      it('Go To Black Firday Deals Page', async () => {
        await click('Black Friday Deals');
    });

          it('Validate the Page', async () => {
           await text('Black Friday Deals Week').exists();
          }); 
          it('Scroll Down 500 px', async () => {
            await scrollDown(500);
          }); 
    });

});
