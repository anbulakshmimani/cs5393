"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, doubleClick, link,tap, waitFor, scrollDown,clear } = require('taiko');
const assert = require("assert");
const headless = false;

describe('Setting Delivery Address', () => {

    describe('Go to Delveiry Address Set up Pop and Set up the address', () => {
          it('Go to Delivery Address Pop Up', async () => {
           await click('Deliver to');
          }); 

          it('Change the Delivery Address', async () => {
           await click('Change');
          }); 
          
          it('Clear the Existing Address', async () => {
           await clear();
          }); 
          it('Input the New Delivery Address', async () => {
           await write('78613');
          }); 

          it('Add the New Address', async () => {
           await click('Done');
          }); 
          it('Validate the Newly added Address', async () => {
           await text('Cedar Park 78613‌').exists();
          }); 
    });

});
