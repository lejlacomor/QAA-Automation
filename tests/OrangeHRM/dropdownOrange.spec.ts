import{test, expect, Locator} from "@playwright/test";

// This test will work only if we have a user with Leave type and leave balance, because each time when we logged in we are
//logged as a different user

test("Verify that the dropdown is enabled and visible", async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
    //await page.waitForTimeout(5000);

    //Insert username
    const name= await page.locator("input[name='username']");
    await expect(name).toBeVisible();
    await name.fill('Admin');
    //await page.waitForTimeout(5000);
    
    //Insert password
    const password= await page.locator("input[name='password']");
    await expect(password).toBeVisible();
    await password.fill("admin123");
    //await page.waitForTimeout(2000);

    //Click on the login button
    const button=await page.locator("button[type='submit']");
    await expect(button).toBeVisible();
    await button.click();
    await page.waitForTimeout(4000);

    //Click on the Leave link in nav bar
    const leave=await page.getByRole('link', { name: 'Leave' })
    await leave.click();
    //await page.waitForTimeout(5000);

    //Click on the Apply link in nav menu
   await page.getByText('Apply').click();
   await page.waitForTimeout(3000);

   //The dropdown is enabled and visible
   const dropdown=await page.locator('.oxd-select-text');
    await dropdown.click();

    const dropdownMenu=await page.locator(" div[role='listbox']");
    await expect(dropdownMenu).toBeVisible();
   

})
