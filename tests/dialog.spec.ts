//alert(), confirm(), prompt()dialogs/JSalerts
//Reference : https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialos

//1.By default, dialogs are auto dismissed by playwright, so u dint need to handke them
//2.However, u can register a dialog handler before the action that trigers the diaog to either
//dialog.accept() or dialog.dismiss() it

import{ test, expect, Locator} from "@playwright/test";

test("Simple dialog",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog)=>
    {
        console.log("Dialog type is: ", dialog.type);//returns type of dialog
        expect(dialog.type()).toContain('alert');
        console.log("Dialog text", dialog.message);//returns message from dialog
        expect(dialog.message()).toContain("I am in an alert box!");
        dialog.accept();
    })
    
    await page.locator("#alertBtn").click();//opens dialog
    await page.waitForTimeout(5000);


})

