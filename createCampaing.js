/* jshint esversion:6 */
const Client = require('node-rest-client').Client;
const util = require('util');
const API_KEY = "fa90983082fa2c92635b35566e5f3c77";
const CLIENT_ID = "37c50c6b8bd00a4f426b497c4c8782a6";
const TEMPLATE_ID = "8c87b39b87b23f5a465d427deab765dc";

const client = new Client({
    user: API_KEY,
    password: ''
});

var url = `https://api.createsend.com/api/v3.1/campaigns/${CLIENT_ID}/fromtemplate.json`;
var args = {
    data: {
        "Name": "My Campaign Test from API",
        "Subject": "Testing API",
        "FromName": "David from UruIT",
        "FromEmail": "david.sttivend@uruit.com",
        "ReplyTo": "david.sttivend@uruit.com",
        "ListIDs": [
            "7acdc350e15ba4144ee61b588d046c96"
        ],
        "TemplateID": TEMPLATE_ID,
        "TemplateContent": {
            "Singlelines": [{
                "Content": "This is the campaing title"
            }],
            "Images": [{
                "Content": "https://authoring.wrap.co/images/wrap-icon-nav.png",
                "Alt": "This is alt text for an image",
                "Href": "https://wrap.co/wraps/bd0c5656-5be2-41ed-994e-607ebfa229fc"
            }]
        }
    },
    headers: {
        "Content-Type": "application/json"
    }
};
client.post(url, args, (data, res) => {
    console.log("Data " + JSON.stringify(data));
});
