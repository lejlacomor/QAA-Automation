import{test,expect,Locator} from "@playwright/test";

test("Verify Crhome CPU load in dynamic table", async({page})=>
{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table:Locator=page.locator("table.table tbody");
    await expect(table).toBeVisible();

    //Select all the rows and find number of rows
    const rows:Locator[]=await table.locator("tr").all();
    console.log("Number of rows in the table: ", rows.length);
    expect(rows).toHaveLength(4);

    //Step no.1 --> For Chrome get value of CPU load
    //Read each row to check Chrome presence

    let cpuLoad='';
    for(const row of rows)
    {
        const ProcessName:string=await row.locator("td").nth(0).innerText();
        if(ProcessName==='Chrome')
        {
            cpuLoad=await row.locator('td:has-text("%")').innerText(); //css syntax
            //cpuLoad=await row.locator("td",{hasText:'%'}).innerText();//playwright syntax
            console.log("CPU Load of Chrome", cpuLoad);
            break;
        }
        await page.waitForTimeout(3000);
    }

    //Step no2 --->Compare with the value in the yellow field
    let yellowboxtext:string=await page.locator("#chrome-cpu").innerText();
    console.log("Chrome CPU lOad from yellow box ", yellowboxtext);

    if(yellowboxtext.includes(cpuLoad))
    {
        console.log("CPU load of Chrome is equal");

    }
    else{
        console.log("CPU load of Chrome is NOT equal");
    }

    expect(yellowboxtext).toContain(cpuLoad);
    await page.waitForTimeout(3000);
})
