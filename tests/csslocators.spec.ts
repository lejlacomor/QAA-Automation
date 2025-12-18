import {test, expect, Locator } from "@playwright/test";

test("Verify CSS locators",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //tag#id
    // const searchbox: Locator= page.locator("input#small-searchterms");
    // await searchbox.fill("T-Shirts");

    // expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("#small-searchterms").fill("T-Shirt");

    
    //tag.class
    //await page.locator("input.search-box-text").fill("T-Shirt");
//     await page.locator(".search-box-text").fill("T-Shirt");

//tag [atribute=value]

    // await page.locator("[name=''q']").fill("T-Shirts");
    // await page.waitForTimeout(2000);

    //tag.class[atribute=value]
    await page.locator("input.search-bpx-text[value='Search store']").fill("T-Shirts");
    await page.waitForTimeout(2000);

})