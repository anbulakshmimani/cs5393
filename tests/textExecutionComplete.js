"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, doubleClick, link,tap, waitFor, scrollTo, scrollDown } = require('taiko');
const assert = require("assert");
const headless = false;
const { perf,logger,log } = require('./global');

describe('Completing the Testing', () => {
    describe('Closing the Broswer and Logging the Test Execution', () => {
        it('Final Test of the Test Execution', async () => {
            await closeBrowser();
            var results = perf.stop();
               log.info( 'Time taken to complete this test execution in milli seconds ',
               results.time, '   in words   ', results.preciseWords );    
        });
    });
});
