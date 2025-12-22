import {test,expect,Locator} from"@playwright/test";

test("Autosuggest dropdown",async({page})=>
{
    await page.goto("https://www.flipkart.com/");
    await page.locator("input[name='q']").fill("smart");//Search text

    //Get all suggested options => Ctrl+shift+P on DOM =>emulate focused page
    const options:Locator=page.locator("ul>li");

    await page.waitForTimeout(5000);

    const count=await options.count();
    console.log("Number of options :",count);

    //printing all suggested options in the console

    console.log("Printing all the autosuggested options: ")
    for(let i=0; i<count; i++)
    {
        // console.log(i+1,".", await options.nth(i).innerText());
        console.log(i+1,".", await options.nth(i).textContent());
    }

    //select/click on the smartphone option
     for(let i=0; i<count; i++)
    {
        const text=await options.nth(i).innerText();
        if(text==="smartphone")
        {
            options.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(3000);
})