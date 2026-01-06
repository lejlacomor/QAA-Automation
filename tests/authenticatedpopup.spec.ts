// import{test,expect, Page} from "@playwright/test";

// test("Authenticated popups:", async({browser})=>
// {
//    const context=await browser.newContext({httpCredentials:{username:'admin', password:'admin'}}); 
//    const page=context.newPage();
// //    await (await page).goto("https://the-internet.herokuapp.com/basic_auth");

// //     await (await page).waitForLoadState();//waiting to load page completely
// //    (await page).waitForTimeout(5000);

// //approach2; pass the login along with browser context

// (await page).goto("https://the-internet.herokuapp.com/basic_auth");

// (await page).waitForLoadState();
// await expect((await page).locator('text=Congratulations')).toBeVisible();

// (await page).waitForTimeout(5000);
// })