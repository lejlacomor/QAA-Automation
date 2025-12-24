import{test,expect,Locator} from "@playwright/test";

test("Comparing methods", async({page})=>{

        await page.goto('https://demowebshop.tricentis.com/');
       const products:Locator= page.locator('.product-title');
       
//1. innerText vs textContent
    //    console.log(await products.nth(1).innerText());
    //    console.log(await products.nth(1).textContent());

//   const count=await products.count();

//     for(let i=0; i<count; i++)
//     {
//          const productName:string=await products.nth(i).innerText();//Eliminating whitespace and empty
//         console.log(productName);

//          const productName:string | null=await products.nth(i).textContent(); //Extracts text including hidden elements
//         console.log(productName?.trim());
//     }



//2.Difference allInnerText() vs allTextContent()

    // console.log("Comparing allInnerText() vs allTextContent()");

//    const productNames:string[]=await products.allInnerTexts();
//    console.log("Product Names captured by allInnerText()", productNames);

    // const productNames:string[]=await products.allTextContents();
    // console.log("Product Names captured by allInnerText()", productNames);
    // const ProductNamesTrimmed:string[]=productNames.map(text=>text.trim());
    // console.log("Trimmed names are : ",ProductNamesTrimmed);



//3.all()---> converts Locator -->Locator[]
    //returns array of locators
   const productsLocators:Locator[]= await products.all();
   console.log(productsLocators);

   //console.log(await productsLocators[1].innerText());
    //for of loop
    // for(let productloc of productsLocators)
    // {
    //     console.log(await productloc.innerText());
    // }

    // for in loop
    for(let i in productsLocators)
    {
        console.log(await productsLocators[i].innerText());
    }

  })