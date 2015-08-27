(function () {
    angular.module('divSlider').directive('divSlider', function () {
        return {
            restrict: 'E',
            templateUrl: 'modules/divSlider/divSliderTemplate.html',
            link: function (scope, ele, attr) {
                scope.pointerLocation = 0;
            }
        }
    });
})();