import{test, expect} from "@playwright/test";

test("Mouse hover", async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const pointme= page.locator('.dropbtn');
    await pointme.hover();

    const laptops=page.locator('.dropdown-content a:nth-child(2)');
    await laptops.hover();

    await page.waitForTimeout(5000);
})

test("Right click", async({page})=>
{
      await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

      const button=page.locator('span.context-menu-one');
      await button.click({button:'right'})//this will preform right click
      await page.waitForTimeout(5000);

})

test("Double click", async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const btncopy=page.locator("#button[odblclick='myFunction1()']");
    await btncopy.dblclick();//preform double click on the nutton

    const field2=page.locator('#field2');
    expect(field2).toHaveValue('Hello World');

    await page.waitForTimeout(5000);

})