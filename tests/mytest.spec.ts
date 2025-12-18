 import {test, expect} from "@playwright/test";

//Syntax
// test("title", ()=>
// {

// });

//fixture- global variable : page, browser 
test("Verify page title",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let title:string=await page.title();
    console.log("Title: ", title);

    await expect(page).toHaveTitle("OrangeHRM");
} )

