import{test,expect,Locator} from "@playwright/test";
import { text } from "stream/consumers";

test("Verify dropdown contains duplicates", async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropDownOptions:Locator=page.locator('#colors>options'); //having duplicates
    //const dropDownOptions:Locator=page.locator('#animals>option');//not having duplicates

    const optionsText:string[]=(await dropDownOptions.allTextContents()).map(text=>text.trim());

    const myset=new Set<string>(); //Set- duplicates are not allowed
    const duplicates:string[]=[]; //Array - duplicates allowed

    for(const text of optionsText)
    {
        if(myset.has(text))
        {
            duplicates.push(text);
        }
        else
        {
            myset.add(text);
        }
    }

    console.log("Duplicate options are==>", duplicates);

    if(duplicates.length>0)
    {
        console.log("Duplicate options are found", duplicates)
    }
    else{
        console.log("No duplicates options found");
    }
    //expect(duplicates.length).toBe(0);
})