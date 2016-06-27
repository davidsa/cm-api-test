/* jshint esversion:6 */
const http = require('http');
const querystring = require('querystring');

var options = {
    host: "api.createsend.com",
    port: 80,
    path: "/api/v3.1/clients.json",
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + new Buffer('fa90983082fa2c92635b35566e5f3c77:test').toString('base64')
    }
};

var postData = querystring.stringify({
    "CompanyName": "My Test Company",
    "Country": "Australia",
    "TimeZone": "(GMT+10:00) Canberra, Melbourne, Sydney"
});

var req = http.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();
