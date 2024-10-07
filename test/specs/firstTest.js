// describe('Ecommerce Application', async () => {
// // npx wdio run wdio.conf.js
//     it('Login Fail Case', async () => {

//         await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
//         //console.log(await browser.getTitle());
//         await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
//         await $("#username").setValue("qa23april@outlook.com");
//         await browser.pause(3000);
//         await $("//input[@type = 'password']").setValue("learning");
//         const password = $("//input[@type='password']");
//         await password.setValue('learningssss');
//         await $("#signInBtn").click();
//         await browser.pause(3000);
//         await console.log(await $(".alert-danger").getText());
//         await expect($("p")).toHaveText("(username is rahulshettyacademy and Password is learning)");

//     })

//     it('Login Sucess Case', async () => {
//         await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
//         await $("#username").setValue("rahulshettyacademy");
//         await $("//input[@type = 'password']").setValue("learning");
//         await $("//input[@id = 'signInBtn']").click();
//         await $(".btn-primary").waitForExist();

//         //await browser.url('https://webdriver.io/')
//         await expect(browser).toHaveUrl(expect.stringContaining('shop'));
//         await expect(browser).toHaveTitle("ProtoCommerce");
//         await browser.pause(3000);

//     })


// })