(function () {    
    angular.module('divToggle').directive('divToggle', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            transclude: true,
            scope: true,
            templateUrl: 'modules/divToggle/divToggleTemplate.html',
            link: function (scope, ele, attr, ctrl, trans) {                
                scope.element = ele;               
            }
        }
    }])    
    .directive('divToggleButton', function () {
        return {
            restrict: 'E',            
            templateUrl: 'modules/divToggle/divToggleButtonTemplate.html',
            link: function (scope, ele, attr) {
                scope.isVisible = true;
                scope.toggleClicked = function () {
                    scope.element.find('ng-transclude').slideToggle();;
                    scope.isVisible = !scope.isVisible;
                };
            }
        }
    }
    );
})();