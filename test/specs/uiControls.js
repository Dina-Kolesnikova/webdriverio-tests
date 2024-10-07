import { expect as chaiExpect } from 'chai';

describe('UI controls Test Suite', async () => {

    xit('UI Controls', async()=> {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $("#username").setValue("rahulshettyacademy");
        await $("//input[@type = 'password']").setValue("learning");
        // const radioButtons = await $$(".radiotextsty"); //all the matching elements
        // const userDropdown = radioButtons[1];
        // await userDropdown.click();
        await $('//input[contains(@value, "user")]').click();
        await browser.pause(3000);
        // const modal = await $(".modal-body");
        // await modal.waitForDisplayed();
        await $(".modal-body").waitForDisplayed();
        await $('#cancelBtn').click();

        await $('//input[contains(@value, "admin")]').isSelected();
        await $('//input[contains(@value, "user")]').click();

        await $(".modal-body").waitForDisplayed();
        await $('#okayBtn').click();
        // validate that pop up is not shown when select Admin again
        await $('//input[contains(@value, "admin")]').click();
        //await browser.pause(3000);
        const modal = await $(".modal-body"); 
        await expect(modal).not.toBeDisplayed();
        //await browser.pause(3000);
        const dropDown = await $("select.form-control"); // select tag
        await dropDown.selectByAttribute('value', 'teach');
        await browser.pause(3000);
        await dropDown.selectByVisibleText('Consultant');
        await browser.pause(3000);
        await dropDown.selectByIndex(0);
        await browser.pause(3000);
    
        await chaiExpect(await dropDown.getValue()).to.equal('stud');
        await browser.pause(3000);
    })


    xit('Dynamic drop box', async()=> {

        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await $('#autocomplete').setValue('ind');
        await browser.pause(3000);
        // let items = await $$("[class='ui-menu-item'] div");
        // for (var i = 0; i < await items.length; i++) {
        //     console.log(await items[i].getText());
        //     if(await items[i].getText() === 'India'){
        //         await items[i].click();
        //         await browser.pause(3000);
        //     }
        // }




    })

} )