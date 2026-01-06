//Test: create booking
//Request type: POST
//Request body: static

import{test,expect} from "@playwright/test";

test("Create Post request using static body", async({request})=>
{
    //request body
    const requestBody={
        firstname : "Jim",
    lastname : "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    },
    additionalneeds : "Breakfast"
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
        "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "additionalneeds" : "Breakfast",
    
    });

    expect(booking.bookingdates).toMatchObject({
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01",
    });

})