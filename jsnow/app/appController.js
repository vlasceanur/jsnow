angular.module('jsnow').controller('ApplicationCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.$on('rsp-menu-item-clicked', function (evt, param) {
        console.log(param);
    });
}]);