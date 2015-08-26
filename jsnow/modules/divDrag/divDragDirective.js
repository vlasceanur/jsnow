(function () {
    angular.module('divDrag').directive('divDrag', function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attr) {
                ele.css({ position: 'absolute' });

                var offset = {
                    x: 0,
                    y: 0
                };
                function mouseDown(evt) {
                    $(window).on('mousemove', mouseMove);
                    $(window).on('mouseup', mouseUp);
                    offset.x = evt.offsetX;
                    offset.y = evt.offsetY;
                }

                function mouseMove(evt) {
                    ele.addClass('dir-drag-moving');
                    ele.css('left', evt.clientX - offset.x);
                    ele.css('top', evt.clientY - offset.y);
                }

                function mouseUp(evt) {
                    ele.removeClass('dir-drag-moving');
                    $(window).off('mousemove', mouseMove);
                    $(window).off('mouseup', mouseUp);
                }

                ele.on('mousedown.divDrag', mouseDown);
            }
        }
    });
})();