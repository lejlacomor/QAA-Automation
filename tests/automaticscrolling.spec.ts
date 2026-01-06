import{test,expect} from "@playwright/test";

test ("Scrolling to footer",async ({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');
    //Footer element- automaticlly scrolled beforedoing any action

    const footerText:string=await page.locator('.footer-disclaimer').innerText();
    console.log("Footer text captured: ",footerText);
    await page.waitForTimeout(5000);
    
})

test.only ("Scrolling into dropdown",async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.locator("#combobox").click();
    
    const option=await page.locator('#dropdown div:nth-child(100)');
    console.log("Option captured from Dropdown: ", await option.innerText());

    await option.click();
})

// test.only ("Scrolling inside the table",async ({page})=>
// {
//     await page.goto('https://datatables.net/examples/basic_init/scroll?xy.html');
    
   
//     const name=await page.locator('tbody tr:nth-child(10) td:nth-child(2)');
//     console.log("Last Name from 10th Row and 2nd Column: ", name);

//     const email=await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText();
//     console.log("Email from 10th row and 9th column: ", email);
// })