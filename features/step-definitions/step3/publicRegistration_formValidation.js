const { Given, When, Then } = require('@wdio/cucumber-framework');
const { timeout } = require('async');
const { title } = require('process');


Given(/^user is on the public registration form$/, async () => {
	// await browser.url ('https://cvent.me/55NkrL');
    await browser.url ('https://web.cvent.com/event/37cac248-ea46-4bbe-9f97-f6c88c413065/regProcessStep1');
});

When(/^user tries to proceed to the next page$/, async () => {
	await $('#forward').click();
});

Then(/^error message should be displayed that the field is required$/, async () => {
	// await expect($('div[data-cvent-id="error-message"')).toHaveText("First Name is required.");
    await setTimeout(async () => {
        await expect($('div[data-cvent-id="error-message"')).toHaveText("First Name is required.");
    }, 10000); // 10000 milliseconds = 10 seconds
});


When(/^user sets values for (.*),(.*),(.*),(.*),(.*) and (.*)$/, async (Fname,Lname,emailad,mobile,title,org) => {
	await $('[aria-label="First Name"]').setValue(Fname)
    await $('[aria-label="Last Name"]').setValue(Lname)
    await $('[aria-label="Email Address"]').setValue(emailad)
    await $('[aria-label="Phone"]').setValue(mobile)
    await $('[aria-label="Job Title"]').setValue(title)
    await $('[aria-label="Organization"]').setValue(org) 
});

When(/^user selects the value for (.*) and (.*)$/, async (Ctry,States) => {
    await $('//*[@id="3f73520a-a5be-4619-9619-61fdf43a0db9"]').setValue(Ctry);
    await $('//div[@id="react-select-2-option-1"]').click();
    await $('//*[@id="43021fa4-de93-491a-9954-4c4ccfcea144"]').setValue(States);
    await $('//div[@id="react-select-3-option-1"]').click();
});

When(/^user inputs the values for <AsstFirstName><AsstLastNAme><AsstPhone><AssstEmail>$/, async () => {
	await $('//*[@id="79b8475d-ee95-4607-897c-c73ac44cb244"]').setValue("Jess");
    await $('//*[@id="a626d025-804e-4b40-99fd-cfdab482c678"]').setValue("Lim");
    await $('//*[@id="eca4e9ca-cc7a-4225-a988-25b31e062083"]').setValue("+19785128451");
    await $('//*[@id="5b1f5ccc-6c46-4ce8-bc87-a40fab4e15cd"]').setValue("jesslim@gmail.com");
});

When(/^user clears the values in the personal information$/, async () => {
    await $('[aria-label="First Name"]').clearValue();
    await $('[aria-label="Last Name"]').clearValue();
    await $('[aria-label="Email Address"]').clearValue();
    await $('[aria-label="Phone"]').clearValue();
    await $('[aria-label="Job Title"]').clearValue();
    await $('[aria-label="Organization"]').clearValue();
    await $('//*[@id="3f73520a-a5be-4619-9619-61fdf43a0db9"]').clearValue();
    await $('//*[@id="43021fa4-de93-491a-9954-4c4ccfcea144"]').clearValue();
	await $('//*[@id="79b8475d-ee95-4607-897c-c73ac44cb244"]').clearValue();
    await $('//*[@id="a626d025-804e-4b40-99fd-cfdab482c678"]').clearValue();
    await $('//*[@id="eca4e9ca-cc7a-4225-a988-25b31e062083"]').clearValue();
    await $('//*[@id="5b1f5ccc-6c46-4ce8-bc87-a40fab4e15cd"]').clearValue();
});

When(/^user set the values again for (.*),(.*),(.*),(.*),(.*) and (.*)$/, async (Fname,Lname,emailad,mobile,title,org) => {
	await $('[aria-label="First Name"]').setValue(Fname)
    await $('[aria-label="Last Name"]').setValue(Lname)
    await $('[aria-label="Email Address"]').setValue(emailad)
    await $('[aria-label="Phone"]').setValue(mobile)
    await $('[aria-label="Job Title"]').setValue(title)
    await $('[aria-label="Organization"]').setValue(org) 
});

When(/^user selects the values again for (.*) and (.*)$/, async (Ctry,States) => {
	await $('//*[@id="3f73520a-a5be-4619-9619-61fdf43a0db9"]').setValue(Ctry);
    await $('//div[@id="react-select-2-option-1"]').click();
    await $('//*[@id="43021fa4-de93-491a-9954-4c4ccfcea144"]').setValue(States);
    await $('//div[@id="react-select-3-option-1"]').click();
});

// When(/^user inputs the values again for <AsstFirstName><AsstLastNAme><AsstPhone><AssstEmail>$/, async () => {
//     await $('//*[@id="79b8475d-ee95-4607-897c-c73ac44cb244"]').setValue("Jess");
//     await $('//*[@id="a626d025-804e-4b40-99fd-cfdab482c678"]').setValue("Lim");
//     await $('//*[@id="eca4e9ca-cc7a-4225-a988-25b31e062083"]').setValue("+19785128451");
//     await $('//*[@id="5b1f5ccc-6c46-4ce8-bc87-a40fab4e15cd"]').setValue("jesslim@gmail.com");
// });

When(/^user proceeds to the sessions page$/, async () => {
	// await $('#forward').click();
    const nBtn = await $('#forward');
    await nBtn.waitForClickable({ timeout: 10000 });
    await nBtn.click();
});

When(/^user selects multiple sessions$/, async () => {
    //button[@aria-label="Select  Forum, Free"]
    const Btn1 = await $("//button[(@aria-label='Session 1, Free')]");
    await Btn1.waitForClickable({timeout: 10000});
    await Btn1.click();
    const Btn2 = await $("//button[(@aria-label='Session 2, Free')]");
    await Btn2.waitForClickable({timeout: 10000});
    await Btn2.click();

    // const Btn1 = await $("//button[contains(@aria-label,'Session 1, Free')]//span[contains(text(),'Select')]");
    // await Btn1.click();
    // const Btn2 = await $("//button[contains(@aria-label,'Session 2, Free')]//span[contains(text(),'Select')]");
    // await Btn2.click();
});

When(/^user deselect a session$/, async () => {
    const Btn3 = await $("//button[(@aria-label='Session 1, Free')]");
    await Btn3.waitForClickable({timeout: 10000});
    await Btn3.click();
    // const Btn2 = await $("//button[(@aria-label='Session 2, Free')]");
    // await Btn2.waitForClickable({timeout: 10000});
    // await Btn2.click();
    // const FirstBtnn = await $("//button[contains(@aria-label,'Session 1, Free')]//span[contains(text(),'Select')]");
    // await FirstBtn.click();
    // const SecondBtn = await $("//button[contains(@aria-label,'Session 2, Free')]//span[contains(text(),'Select')]");
    // await SecondBtn.click();
});

When(/^user proceeds to the Marketing page$/, () => {
	return true;
});

// When(/^user proceeds to the Event Sponsor data use page$/, () => {
// 	return true;
// });

// When(/^user submits the Registration$/, () => {
// 	return true;
// });

// Then(/^user should see the registrarion confirmation message$/, () => {
// 	return true;
// });














