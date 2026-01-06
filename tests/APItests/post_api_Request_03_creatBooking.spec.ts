//Test: create booking
//Request type: POST
//Request body: random/dynamic data(faker) file
//install faker  npm install @faker-js/faker
//Install luxon npm install luxon

import{test,expect} from "@playwright/test";
import {faker} from "@faker-js/faker";
import {DateTime} from 'luxon';

test("Create Post request using JSON file body", async({request})=>
{
    
    const firstname=faker.person.firstName();
     const lastname=faker.person.lastName();
      const totalprice=faker.number.int({min:100, max:5000});
       const depositpaid=faker.datatype.boolean();

    const checkindate=DateTime.now().toFormat("yyyy-MM-dd");
    const checkoutdate=DateTime.now().plus({day:5}).toFormat("yyyy-MM-dd");
        
    const additionalneeds="Breakfast";
     //request body(faker)
    const requestBody={
        firstname : firstname,
    lastname : lastname,
    totalprice : totalprice,
    depositpaid : depositpaid,
    bookingdates : {
        checkin : checkindate,
        checkout : checkoutdate,
    },
    additionalneeds : additionalneeds,
    }


    

    //send post request
    const response=await request.post("/booking",{data:requestBody});

    const responseBody=await response.json();
    console.log(responseBody);

    //validate status code
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response body
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody).toHaveProperty("booking.additionalneeds");

    //validate booking details
    const booking=responseBody.booking;


    expect(booking).toMatchObject({
        firstname: requestBody.firstname,
        lastname: requestBody.lastname,
        totalprice: requestBody.totalprice,
        depositpaid:requestBody.depositpaid,
        additionalneeds: requestBody.additionalneeds
    
    });

    expect(booking.bookingdates).toMatchObject({
        checkin : requestBody.bookingdates.checkin,
        checkout : requestBody.bookingdates.checkout,
    });

})