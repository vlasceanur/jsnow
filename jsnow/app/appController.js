angular.module('jsnow').controller('ApplicationCtrl', ['$rootScope', '$location', '$timeout', function ($rootScope, $location, $timeout) {        
    $rootScope.$on('rsp-menu-item-clicked', function (evt, param) {
        console.log(param);
        $location.path(param.route);
    });
}]);