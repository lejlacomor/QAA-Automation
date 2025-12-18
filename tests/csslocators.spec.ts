import {test, expect, Locator } from "@playwright/test";


   test("Verify Playwright Locators", async ({ page }) => {
 
  await page.goto("https://demo.nopcommerce.com/");
 
 
  await page.route("**/turnstile/**", route => route.abort());
  await page.route("**cloudflare**", route => route.abort());
  await page.route("**/challenge**", route => route.abort());
 
   
 
await page.getByRole("link", { name: "Register" }).click();
await page.waitForTimeout(1000);
 

 
await page.getByLabel("First name").fill("John");
await page.waitForTimeout(1000);
 
await page.getByLabel("Last name").fill("Kenedy");
await page.waitForTimeout(1000);
 
});
    

