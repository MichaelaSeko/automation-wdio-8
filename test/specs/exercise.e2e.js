import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        await browser.url('/registrace');

        //await browser.saveScreenshot('login_page_test.png');

        //const emailField = await $('button');
        const name = await $('#name');
        const email = await $('#email');
        const password = await $('#password');
        const passwordConfirm = await $('#password-confirm');
        const submit = await $('[type="submit"]');
        

        console.log(name);
        console.log(email);
        console.log(password);
        console.log(passwordConfirm);
        console.log(submit);

    
        await browser.pause(5000);

    });

});
