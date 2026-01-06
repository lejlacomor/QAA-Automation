//data; JSON file
//create token

//Create a booking(Post)--->bookingId
//Update booking(Put) //Required token

import{test,expect} from "@playwright/test";
import fs from 'fs';


function readJson(filePath:string)
{
    return JSON.parse(fs.readFileSync(filePath,'utf-8'));
}

test('Update Booking(Put)',async({request})=>
{
    //create a booking (Post) ---->bookingId

    const requestBody=readJson('testdata/post_request_body.json')
    const createResponse=await request.post('/booking',{data:requestBody})

    //expect(createResponse.ok()).toBeTruthy();

    const responsebody=await createResponse.json();

    console.log(responsebody);
    const bookingid=responsebody.bookingid;
    console.log('Booking id=====>',bookingid);

    //update booking (put)
        //token creation

    const tokenrequestBody=readJson('testdata/token_request_body.json');
    const tokenResponse=await request.post('/auth',{data:tokenrequestBody})
    expect(tokenResponse.ok()).toBeTruthy();

    const tokenresponsebody=await tokenResponse.json();
    const token=tokenresponsebody.token;
    console.log('Token ===>', token);

    //sending update(Put)
    const updateRequestbody=readJson('testdata/put_request_body.json')
    const updateresponse=await request.put(`/booking/${bookingid}`,
        {
            headers:{'Cookie':`token=${token}`},
            data:updateRequestbody
        }
    );
    expect(updateresponse.ok()).toBeTruthy();
    expect(updateresponse.status()).toBe(200);

    const updateresponsebody=updateresponse.json();
    console.log(updateresponsebody)
    console.log("Booking details updated successfully....")
})