import{test, expect, Locator} from "@playwright/test";

test("XPath demo in playwright", async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    //1.Absolute XPath
    const logo: Locator= page.locator('xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]');
    await expect(logo).toBeVisible();

    //2.Relative XPath
    const relativelogo: Locator= page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativelogo).toBeVisible();

    //3.Contains
    const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const productsCount:number=await products.count();
    console.log('NO of Computer related products: ',productsCount);
    expect(productsCount).toBeGreaterThan(0);

   //console.log( await products.textContent()); Error strict mode vioaltion

  console.log( "prvi artikal:", await products.first().textContent());
  console.log( "zadnji artikal:", await products.last().textContent());
  console.log( "treci artikal:", await products.nth(3).textContent());

  let productTitles:string[]= await products.allTextContents();
    for(let pt of productTitles)
    {
        console.log(pt);
    }


    //4.Start-with
    const buildingProducts:Locator=page.locator("//h2/a[starts-with(@href,'build)}");//return multiple elements
}
)