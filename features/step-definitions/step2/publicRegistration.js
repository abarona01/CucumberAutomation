const { Given, When, Then } = require('@wdio/cucumber-framework');
    
Given(/^user is on the Cvent public registration form$/, async () => {
    await browser.url('https://web.cvent.com/event/37cac248-ea46-4bbe-9f97-f6c88c413065/regProcessStep1')
});
              
When(/^user inputs the (.*),(.*),(.*),(.*),(.*) and (.*)$/, async (firstName,lastName,emailaddress,phone,jobtitle,organization) => {
    await $('[aria-label="First Name"]').setValue(firstName)
    await $('[aria-label="Last Name"]').setValue(lastName)
    await $('[aria-label="Email Address"]').setValue(emailaddress)
    await $('[aria-label="Phone"]').setValue(phone)
    await $('[aria-label="Job Title"]').setValue(jobtitle)
    await $('[aria-label="Organization"]').setValue(organization) 
});
 
When(/^user sets the value for (.*) and (.*)$/, async (country,states) => {
    await $('//*[@id="3f73520a-a5be-4619-9619-61fdf43a0db9"]').setValue(country);
    await $('//div[@id="react-select-2-option-1"]').click();
    await $('//*[@id="43021fa4-de93-491a-9954-4c4ccfcea144"]').setValue(states);
    await $('//div[@id="react-select-3-option-1"]').click();
});

When(/^user inputs the values for the assistant <FN><LN><AsstPhone><AsstEmail>$/, async () => {
	await $('//*[@id="79b8475d-ee95-4607-897c-c73ac44cb244"]').setValue("Jess");
    await $('//*[@id="a626d025-804e-4b40-99fd-cfdab482c678"]').setValue("Lim");
    await $('//*[@id="eca4e9ca-cc7a-4225-a988-25b31e062083"]').setValue("+19785128451")
    await $('//*[@id="5b1f5ccc-6c46-4ce8-bc87-a40fab4e15cd"]').setValue("jesslim@gmail.com")
});

When(/^user clicks the next button$/, async () => {
    await $('#forward').click();
});

When(/^user selects sessions$/, async () => {
    const select1stButton = await $("//button[contains(@aria-label,'Session 1, Free')]//span[contains(text(),'Select')]");
    await select1stButton.click();
    const select2ndButton = await $("//button[contains(@aria-label,'Session 2, Free')]//span[contains(text(),'Select')]");
    await select2ndButton.click();
})

When(/^user clicks the next button in the Session page$/, async () => {
    const nextButton = await $('#forward');
    await nextButton.waitForClickable({ timeout: 10000 });
    await nextButton.click();
});

When(/^user clicks the next button in the Marketing Preferences$/, async () => {
    const nextButton = await $('#forward');
    await nextButton.waitForClickable({ timeout: 10000 });
    await nextButton.click();
});

When(/^user clicks the next button in the Event Sponsor data use$/, async () => {
    const nextButton = await $('#forward');
    await nextButton.waitForClickable({ timeout: 10000 });
    await nextButton.click();
});

When(/^user clicks the submit button in the Registration Summary$/, async () => {
	const submitBtn = await $('#complete');
    await submitBtn.waitForClickable({ timeout: 10000 });
    await submitBtn.click();

});

Then(/^user should see the processed message to confirm the registration$/, async () => {
    const statusMessage = $("div[role='status'] h2");
    await statusMessage.waitForDisplayed({ timeout: 10000 });
    await expect(statusMessage).toHaveText("Processed");
});


        








