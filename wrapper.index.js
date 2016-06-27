var createsend = require('createsend-node');
var auth = {
    apiKey: 'fa90983082fa2c92635b35566e5f3c77'
};
var api = createsend(auth);

api.account.getClients(function(err, clientList) {

    for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        console.log('    ' + client.name);
        var addP = {
            "EmailAddress": "test@test.com",
            "Name": "John Snow",
            "AccessLevel": 23,
            "Password": "password"
        };

    }

});
