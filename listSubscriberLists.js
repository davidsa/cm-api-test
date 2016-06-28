/* jshint esversion:6 */
const Client = require('node-rest-client').Client;
const util = require('util');
const API_KEY = "fa90983082fa2c92635b35566e5f3c77";
const CLIENT_ID = "37c50c6b8bd00a4f426b497c4c8782a6";
const TEMPLATE_URL = "7ce6ca46cb7fa7f4c77573b47b5f36c9";
//   f9c66617c64ce48e7d52245748ee5abc
const client = new Client({
    user: API_KEY,
    password: ''
});

// var url = `https://api.createsend.com/api/v3.1/templates/${CLIENT_ID}.json`;
var url = `https://api.createsend.com/api/v3.1/clients/${CLIENT_ID}/lists.json`;

client.get(url, (data, res) => {
    console.log("Data " + JSON.stringify(data, null, 2));
});
