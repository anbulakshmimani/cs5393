"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, doubleClick, link,tap, waitFor, scrollTo, scrollDown } = require('taiko');
const assert = require("assert");
const headless = false;
const { perf,logger,log } = require('./global');

describe('Validate Accounts Scenario', () => {

    describe('Validate User Accounts', () => {
        it('Hover Over Accounts', async () => {
            await hover('Account & Lists');
        });
        it('Click Accounts in the Accounts Drop Down', async () => {
            await click(text('Account'));
           
          });

          it('Validate the Your Text Present in the Accounts UI', async () => {  
            await text('All things Alexa').exists();
          });

    });

});
