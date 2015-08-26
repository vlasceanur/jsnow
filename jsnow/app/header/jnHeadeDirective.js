angular.module('jsnow').directive('jnHeader', function () {
    return {
        scope: {
            logoUrl: '@',
            title: '@'
        },
        templateUrl: 'app/header/jnHeaderTemplate.html'
    }
})