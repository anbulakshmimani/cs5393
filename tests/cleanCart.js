"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, doubleClick, link,tap, waitFor, scrollTo, scrollDown,near } = require('taiko');
const assert = require("assert");
const headless = false;
const { perf } = require('./global');

describe('Testing the Cart', () => {

    describe('Clean the Cart', () => {
        it('Click Software Quality Assurance and Testing for Beginners', async () => {
            await click($('#nav-cart-count-container'));
           await click($("//input[contains(@aria-label,'Delete A Philosophy of Software Design')]"));
          });   
    });


});
