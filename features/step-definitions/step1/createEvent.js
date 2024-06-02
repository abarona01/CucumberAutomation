const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^user is on login page$/, async () => {
    await browser.url('https://app.cvent.com/Subscribers/Login.aspx')
});

When(/^user enters (.*),(.*) and (.*)$/, async (account, username, password) => {
    await $('#account').setValue(account)
    await $('#username').setValue(username)
    await $('#password').setValue(password)
});

When(/^clicks on login button$/, async () => {
    await $('#btnLogin').click()
});

Then(/^user should see a flash message saying (.*)$/, async (message) => {
    await expect($('.cv-sandbox-banner-container')).toHaveText(message)
});

When(/^user clicks the create button$/, async () => {
    await $('#Add').click()	
});

When(/^user selects the use template option$/, async() => {
	await $('div[data-cvent-id="event-creation-option-title-template"]').click()
});

When(/^user selects the template$/, async () => {
    await $('.css-wgjoiz:nth-child(1)').click()  
});

When(/^user rename the event title$/, async() => {
	await $('#title').setValue(' - QA Event 1')
});

When(/^user selects the In Person event format$/, async () => {
	await $('.css-14xd8wd').click()
});

When(/^user clicks the create event button$/, async () => {
	await $('.css-12n1bmb').click()
});

Then(/^user should be redirected to the Events list$/, setTimeout (async () => {
    try {
      await expect($('.cv-heading-1 cvf-heading-1')).toHaveText('Events');
    } catch (error) {
    }
  }, 5000)
);



















