(function () {
    angular.module('jsnow').config(['$routeProvider', function ($routeProvider) {
        var routes = [
            { path: '/item1', config: { template: '<p>Route 1 selected</p>' } },
            { path: '/item2', config: { template: '<p>Route 2 selected</p>' } },
            { path: '/item3', config: { template: '<p>Route 3 selected</p>' } },
            { path: '/item4', config: { template: '<p>Route 4 selected</p>' } },
            { path: '/item5', config: { template: '<p>Route 5 selected</p>' } }
        ]

        angular.forEach(routes, function (route) {
            $routeProvider.when(route.path, route.config);
        })

        $routeProvider.otherwise({ template: '<p>No route selected' });
    }])
})();