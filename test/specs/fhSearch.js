describe('Search Success', async () => {

    it('Search Round trip / Default Depart values', async () => {

        await browser.url("https://www.flighthub.com/");
 
        await browser.pause(3000);
        const searchInput =  await $('#seg0_to_display');
        await searchInput.click();
        //await browser.pause(3000);
        await searchInput.click()
        await browser.keys('N')
        //await searchInput.setValue('New York');
        await browser.pause(100000);
        // let searchInput = await $('#seg0_to_display');
        // await searchInput.setValue('New York');
        // await browser.pause(3000); // Wait for 3 seconds to allow network requests to complete
        // const dropdown = await $('.airport-autocomplete-list');
        // await dropdown.waitForDisplayed();
        // await browser.pause(3000);
        // let items = await $(".airport-autocomplete-list");
        // await items.waitForDisplayed({ timeout: 10000 });
        // await browser.pause(3000);
    })


})