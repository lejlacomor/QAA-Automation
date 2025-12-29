import{test,expect, chromium} from "@playwright/test";

test("Browser context demoo", async()=>
{
    const browser=await chromium.launch();//Create browser
    const context=await browser.newContext(); //Create context

    //Creating 2 pages
    const page1=await context.newPage();
     const page2=await context.newPage();
     console.log("Numer of pages created:", context.pages().length);//2

     await page1.goto("hhtps://playwright.dev/");
     await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

     await page1.goto("hhtps://www.selenium.dev/");
     await expect(page2).toHaveTitle("Selenium");

     await page1.waitForTimeout(5000);
      await page2.waitForTimeout(5000);
    })