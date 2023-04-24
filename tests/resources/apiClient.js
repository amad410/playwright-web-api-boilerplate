const request  = require('@playwright/test');
const logindata = require('../data/login.json');
class APIClient{

    baseUri;
    token;

    constructor(baseUri) {
            this.baseUri = baseUri;
    }

   async getToken(){
    
    const response = await request.post(this.baseUri + "/api/auth/login",{
        data:logindata

    });
    return response;
   }
    




}

export default APIClient