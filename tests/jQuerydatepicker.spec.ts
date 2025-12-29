import{test, expect, Locator, Page} from "@playwright/test";

async function selectDate(targetYear:string, targetMonth:string, tagretDate:string,page:Page,isFuture:boolean)
{
    while(true)
    {
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();
    
        if(currentMonth===targetMonth && currentYear===targetYear)
        {
            break;
        }
        if(isFuture)
        {
            await page.locator(".ui-datepicker-next").click();
        }
        else{
            await page.locator('.ui-datepicker-prev').click();

        }
        await page.waitForTimeout(2000);
    
    }

    const allDates=await page.locator(".ui-datepicker-calendar td").all();

    for(let dt of allDates)
    {
        const dateText=await dt.innerText();
        if(dateText===tagretDate)
        {
            await dt.click();
            break;
        }
    }
}

test("JQuery datepicker",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput:Locator=page.locator('#datepicker');
    expect(dateInput).toBeVisible();

    await dateInput.click();
     const year='2026';
     const month='June';
     const date='15';

     selectDate(year,month,date,page,true);

     const expectedDate='06/15/2026';

     await page.waitForTimeout(5000);
})