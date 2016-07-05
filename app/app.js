angular.module('app', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'partials/home.html'
            })
            .when('/callback', {
                controller: 'CallbackCtrl',
                controllerAs: 'vm',
                templateUrl: 'partials/callback.html'
            })
            .otherwise({
                redirectTo: '/'
            });


    })
    .controller('HomeCtrl', function($routeParams, $location, $http) {
        var vm = this;
        vm.test = "Hello World!";
        vm.code = $routeParams.code ? $routeParams.code : '';

        if (vm.code !== '') {
            getToken();
        }

        function getToken() {
            $http({
                method: 'POST',
                url: 'https://api.createsend.com/oauth/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {
                    grant_type: 'authorization_code',
                    client_id: 104361,
                    client_secret: 'i55YRQ5o50585r0CLM5i58jjl5y5EoTM8pDJtZig5DRlTw5I555RHzRtYk5Wb5VJ550y855B655HfCHq',
                    code: vm.code,
                    redirect_uri: 'http://tiny.cc/rj4pcy/'
                }
            }).success(function(data) {
                console.log(JSON.stringify(data));
            });
        }

    })
    .controller('CallbackCtrl', function($routeParams, $location) {
        var vm = this;
        vm.test = "Test";
        console.log(JSON.stringify($routeParams));
        console.log($location.search());
    });
