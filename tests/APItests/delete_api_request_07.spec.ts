/*
1)Create new booking
2)Get booking
3)Update booking
4)Delete booking
*/

import{expect,test} from "@playwright/test";
import fs from 'fs';

//Utulity function to read JSON data from file
function readJson(filePath: string)
{
    return JSON.parse(fs.readFileSync(filePath,'utf-8'));
}

test('Delete booking (end to end', async({request})=>
{
    
    //1)Create new booking

    const postrequestBody=readJson('testdata/post_request_body.json')
    const postresponse=await request.post("/booking",{data:postrequestBody});
    const postresponseBody=await postresponse.json();
    console.log(postresponseBody);
    const bookingid=postresponseBody.bookingid;
    console.log("Booking is created====> ", bookingid);

    //2)Get booking
    const getresponse=await request.get(`/booking/${bookingid}`);
    const getresponsebody=getresponse.json();
    console.log("Booking details are....");
    console.log(getresponsebody);

    //3)Update booking

    //Creating token
    
    const tokenrequestBody=readJson('testdata/token_request_body.json');
    const tokenResponse=await request.post('/auth',{data:tokenrequestBody});
    const tokenresponsebody=await tokenResponse.json();
    const token=tokenresponsebody.token;
    console.log('Token ===>', token);

    //Sending PUT request
    const updateRequestbody=readJson('testdata/put_request_body.json')
        const updateresponse=await request.put(`/booking/${bookingid}`,
            {
                headers:{'Cookie':`token=${token}`},
                data:updateRequestbody
            }
        );
        const updateresponsebody=updateresponse.json();
        console.log("Booking details updated successfully....");
        console.log(updateresponsebody);

    //4)Delete booking
    const deleterespones=await request.delete(`/booking/${bookingid}`,
        {
            headers:{"Cookie": `token=${token}`},
        });
        expect(deleterespones.statusText()).toBe("Created");
        expect(deleterespones.status()).toBe(201);

        console.log("Booking are deleted successfully....");
        
    


})