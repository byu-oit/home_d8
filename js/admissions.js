jQuery(document).ready(function($) {
    function drawBranch(id, fullBranch) {
        var $div = $('#branchpath-' + id + '-div');
        var width = $div.outerWidth();
        var height = $div.outerHeight();
        var x = width / 2;
        var y = height / 2;
        var strokeWidth = 8.0;
        var strokeSpace = 18.5;
        var ySpeed = height * 2;
        var xSpeed = width * 2;

        var lineAttr = {
            'stroke-width': strokeWidth,
            'stroke-dasharray': '1, ' + strokeSpace,
            'stroke-linecap' : 'round'
        };

        if (id == 'top') {
            Snap('#branchpath-undergrad').clear();
            Snap('#branchpath-grad').clear();
        }
        var s = Snap('#branchpath-' + id)
            .attr({
                stroke: '#c5c5c5',
                'stroke-width': strokeWidth,
                'stroke-dasharray': '1, ' + strokeSpace,
                'stroke-linecap' : 'round',
                width: width,
                height: height});
        s.stop();
        s.clear();

        if (height < 60) {
            /* no branching, just vertical line */
            var top = strokeWidth / 2;
            s.line(x, top - height, x, top).animate({y1: top, y2: height}, ySpeed);
        } else {
            var stepSize = strokeSpace + 1.0;
            var halfWidth = Math.floor((x - (strokeWidth / 2)) / stepSize) * stepSize;
            var halfHeight = Math.floor((y - (strokeWidth / 2)) / stepSize) * stepSize;
            var top = y - halfHeight;
            var bottom = y + halfHeight + 1;
            var left = x - halfWidth;
            var right = x + halfWidth;

            s.line(x, top - y, x, top).animate({y1: top, y2: y}, ySpeed, function() { //top-to-middle
                s.line(x, y, x + 1, y).animate({x1: left}, xSpeed); //mid-to-left
                s.line(x, y, x, y).animate({x1: right}, xSpeed, function() { //mid-to-right
                    s.line(left, y, left, y).animate({y1: bottom}, ySpeed); //left-to-bottom
                    s.line(right, y, right, y).animate({y1: bottom}, ySpeed, function() { //right-to-bottom
                        if (id == 'top') {
                            drawBranch('undergrad');
                            drawBranch('grad');
                        }
                    });
                });
            });
        }
    }

    drawBranch('top');
    $(window).resize(function() {
        drawBranch('top');
    });
});