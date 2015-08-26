(function () {
    angular.module('rspMenu').directive('rspMenuItem', ["$rootScope", function ($rootScope) {
        return {
            scope: {
                label: '@',
                icon: '@',
                route: '@'
            },
            require: '^rspMenu',
            templateUrl: '/modules/rspMenu/rspMenuItemTemplate.html',
            link: function (scope, ele, attr, ctrl) {               
                scope.menuItemClicked = function () {
                    ctrl.selectItem(ele);
                    $rootScope.$broadcast('rsp-menu-item-clicked', {element: ele, route: scope.route})
                }

                scope.isSelected = function () {
                    return ctrl.isItemSelected(ele);
                }                
            },
            transclude: true
        }
    }])
})();