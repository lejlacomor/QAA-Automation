import{test,expect,chromium}from "@playwright/test";

test("Handle tabls", async()=>
{
     const browser=await chromium.launch();//Create browser
    const context=await browser.newContext(); //Create context

    //creating  page
    const parentPage=await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

 
   const[childPage]=await Promise.all([context.waitForEvent('page'), parentPage.locator("button:has-text('New Tab')").click()]);

   //Approach1: switch between pages and get titles
   const pages=context.pages();
   console.log("Number of pages created: ", pages.length);

   console.log("Title of the Parent oage is: ", await pages[0].title());
   console.log("Title of the Parent oage is: ", await pages[1].title());

   //approach2: alternative
   console.log("Title of the Parent page:", await parentPage.title());
   console.log("Title of the Parent page:", await childPage.title());
})