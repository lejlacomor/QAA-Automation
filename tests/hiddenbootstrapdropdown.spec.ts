import{test,expect, Locator}from "@playwright/test";

test("Bootstrap hidden dropdown",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Automate the Login steps
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(3000);

    //click on the PIM
    await page.getByText('PIM').click();
    //click on the job title dropdown
    await page.locator('form i').nth(2).click();
    await page.waitForTimeout(2000);

    //capture all options from the dropdown
    const options:Locator=await page.locator("div[role='listbox'] span ");
    //count
    const count:number=await options.count();
    console.log("Number of the options in the dropdown: ", count);

    //print all options

    //2.nacina
    
    console.log("Printing all text contents: ", await options.allTextContents());
    
    console.log("Printing all options: ")
    for(let i=0; i<count; i++)
    {
        console.log(await options.nth(i).innerText());
    }

    //Select/Click on the option
     for(let i=0; i<count; i++)
    {
      const text= await options.nth(i).innerText();
      if(text==='Automaton Tester')
      {
        await options.nth(i).click();
        break;
      }
    }
await page.waitForTimeout(5000);
})