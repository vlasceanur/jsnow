(function () {
    angular.module('rspMenu').controller('rspMenuController', function ($scope) {
        var selectedItem = null;

        this.selectItem = function (item) {
            selectedItem = item;
        };

        this.isItemSelected = function (item) {
            return selectedItem === item;
        }
    });
})();