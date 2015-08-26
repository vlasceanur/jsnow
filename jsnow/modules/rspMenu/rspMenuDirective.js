(function () {
    angular.module('rspMenu').directive('rspMenu', function () {
        return {
            templateUrl: '/modules/rspMenu/rspMenuTemplate.html',
            controller: 'rspMenuController',
            transclude: true
        }
    })
})();