import{test,expect, Page} from "@playwright/test";

test("Handle popups:", async({browser})=>
{
   const context=await browser.newContext(); 
   const page=context.newPage();
   await (await page).goto("https://testautomationpractice.blogspot.com/");

   //Multiple popups

   await Promise.all([  (await page).waitForEvent('popup'),(await page).locator("#PopUp").click() ]);

   const allPopupWindows=context.pages();
   console.log("Number of pages/windows:", allPopupWindows.length);//3

   console.log(allPopupWindows[1].url());
   console.log(allPopupWindows[0].url());

   for( const pw of allPopupWindows)
   {
    const title=await pw.title();
    if(title.includes('Playwright'))
    {
        await pw.locator('.getStarted_Sjon').click();
        (await page).waitForTimeout(5000);
        //Preform any other actions...
        await pw.close();//this will close playwright popup window
    }
   }
   (await page).waitForTimeout(5000);
})