"use strict";
const { openBrowser, write, closeBrowser, 
    goto, press, text, focus, inputField, 
    toRightOf, click, hover,$,
    textBox,into, tap, waitFor, near } = require('taiko');
const assert = require("assert");
const { perf,log } = require('./global');
const headless = true;


describe('Amazon Login', () => {

    before(async () => {
        await openBrowser({ headless: headless,args: ["--start-fullscreen",'--no-sandbox', '--disable-setuid-sandbox'] });
       perf.start();
    });

    describe('Login', () => {
        it('Goto Amazon page', async () => {
            await goto('amazon.com');
        });

        it('Go to Sign In Page ', async () => {
            await hover('Account & Lists');
            await click('Sign in');
    
        });
        
        it('Validate Sign In exists', async () => {
            await text('Sign-In').exists();
        });

        it('Input the User emailid', async () => {
            await write('a_m2103@txstate.edu',into(near('Email or mobile phone number')));
            
        });

 
        it('Go To Password Page', async () => {
            await click('Continue'); 
        });

        it('Input the Password', async () => {
               await write('testAccount123',into(near('Password')));
               await click($('#signInSubmit'));
        });

it('Validate Successfull Login', async () => {
  //  await text('Hello, anbulakshmi').exists();
});

    });

   

});
