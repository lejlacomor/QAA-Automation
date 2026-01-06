//data; JSON file
//create token

//Create a booking(Post)--->bookingId
//Partial Update booking(Patch) //Required token

import{test,expect} from "@playwright/test";
import fs from 'fs';


function readJson(filePath:string)
{
    return JSON.parse(fs.readFileSync(filePath,'utf-8'));
}

test('Partial Update Booking(Patch)',async({request})=>
{
    //create a booking (Post) ---->bookingId

    const requestBody=readJson('testdata/post_request_body.json')
    const createResponse=await request.post('/booking',{data:requestBody})

    //expect(createResponse.ok()).toBeTruthy();

    const responsebody=await createResponse.json();

    console.log(responsebody);
    const bookingid=responsebody.bookingid;
    console.log('Booking id=====>',bookingid);

    //Partial update booking (patch)
        //token creation

    const tokenrequestBody=readJson('testdata/token_request_body.json');
    const tokenResponse=await request.post('/auth',{data:tokenrequestBody})
    expect(tokenResponse.ok()).toBeTruthy();

    const tokenresponsebody=await tokenResponse.json();
    const token=tokenresponsebody.token;
    console.log('Token ===>', token);

    //sending update(Put)
    const patchRequestbody=readJson('testdata/patch_request_body.json')
    const partialupdateresponse=await request.patch(`/booking/${bookingid}`,
        {
            headers:{'Cookie':`token=${token}`},
            data:patchRequestbody
        }
    );
    expect(partialupdateresponse.ok()).toBeTruthy();
    expect(partialupdateresponse.status()).toBe(200);

    const partialupdateresponsebody=partialupdateresponse.json();
    console.log(partialupdateresponsebody)
    console.log("Booking details updated successfully....")
})