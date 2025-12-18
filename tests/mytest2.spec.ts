 import {test, expect} from "@playwright/test";

//Syntax
// test("title", ()=>
// {

// });

//fixture- global variable : page, browser 
test("Verify page URL",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let url:string=await page.url();
    console.log("URL: ", url);

    await expect(page).toHaveURL(/orangehrmlive.com/);
} )

