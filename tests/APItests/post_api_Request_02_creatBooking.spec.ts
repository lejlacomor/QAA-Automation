//Test: create booking
//Request type: POST
//Request body: JSON file

import{test,expect} from "@playwright/test";
import fs from 'fs';

test("Create Post request using JSON file body", async({request})=>
{
    //rread data ftom json file(request body)
    const jsonFile="testdata/post_request_body.json";
    const requestBody:any=JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
    

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