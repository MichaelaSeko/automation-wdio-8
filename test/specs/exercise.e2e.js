import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        await browser.url('/prihlaseni');

        await browser.saveScreenshot('login_page_test.png');

        await browser.pause(5000);

    });

});
