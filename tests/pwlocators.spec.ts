import{test, expect, Locator} from "@playwright/test";

test("Verify Playwright locators", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //1. page.getByAltText()- indentifies images based on the alt atribute.
    //Use this locator when your element supports alt text such as img and area elements

    const logo:Locator=page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    //2. page.getByText() - find an element by the text it contains. locate by visible text
    // <p> <p>
    // <div> <div>

    // const text:Locator=page.getByText("Login");
    //  await expect(text).toBeVisible();

    await expect(page.getByText("Login")).toBeVisible;

    // page.getByRole() -locating by role, include buttons,checkbox,headings, links,lists, tables
    await page.getByRole("link",{name:`OrangeHRM, Inc`}).click();
   //await expect(page.getByRole("heading",{name:`Streamline All Your HR Needs on One `})).toBeVisible();//u can use getbytext

    //4. page.getByLabel()= locate form control by labels text, ideal for form fields with visible labels

    // await page.getByLabel(`Username `).fill("Admin");
    // await page.getByLabel(`Password `).fill("admin123");

    
    })