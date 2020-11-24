"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, doubleClick, link,tap, waitFor, scrollDown } = require('taiko');
const assert = require("assert");
const headless = false;

describe('Sign Out of the Application', () => {

    describe('Sign Out', () => {

      it('Hover over the User Name', async () => {
       await hover('Hello, anbulakshmi');
    });

          it('Click Sign Out', async () => {
           await click('Sign Out');
          }); 
          it('Validate Sign Out', async () => {
            await text('Email or mobile phone number').exists();
          }); 
    });

});
