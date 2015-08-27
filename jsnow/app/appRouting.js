(function () {
    angular.module('jsnow').config(['$routeProvider', function ($routeProvider) {
        var routes = [
            { path: '/item1', config: { template: '<p>Route 1 selected</p>' } },
            { path: '/slider', config: { templateUrl: '/views/slider.html' } },
            { path: '/scroll', config: { templateUrl: '/views/scroll.html' } },
            { path: '/widgets', config: { templateUrl: '/views/widgets.html' } },
            { path: '/toggle', config: { templateUrl: '/views/toggle.html' } }
        ]

        angular.forEach(routes, function (route) {
            $routeProvider.when(route.path, route.config);
        })

        $routeProvider.otherwise({ template: '<p>No route selected' });
    }])
})();