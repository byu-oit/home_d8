jQuery(document).ready(function($) {
    var alreadyAnimated = false;
    var $window = $(window);
    var $branchTop = $('#branchpath-top-div');
    var noOverlapCheck = 0;
    animateBranchesIfVisible();

    $window.scroll(animateBranchesIfVisible);
    $window.resize(function() {
        alreadyAnimated = false;
        animateBranchesIfVisible();
    });

    function animateBranchesIfVisible() {
        if (alreadyAnimated) {
            return;
        }
        if ($branchTop.hasClass('in-view')) {
            alreadyAnimated = true;
            drawBranch('top');
        }
    }

    function drawBranch(id, fullBranch) {
        var $div = $('#branchpath-' + id + '-div');
        var width = $div.outerWidth();
        var height = $div.outerHeight();
        var x = width / 2.0;
        var y = height / 2.0;
        var strokeWidth = 8.0;
        var strokeSpace = 18.5;
        var ySpeed = height * 2.0;
        var xSpeed = width * 2.0;

        if (id == 'top') {
            Snap('#branchpath-undergrad').clear();
            Snap('#branchpath-grad').clear();
        }
        var s = Snap('#branchpath-' + id)
            .attr({
                stroke: '#c5c5c5',
                'stroke-width': strokeWidth,
                'stroke-dasharray': '0, ' + strokeSpace,
                'stroke-linecap' : 'round',
                width: width,
                height: height});
        s.stop();
        s.clear();

        var localOverlap;
        if (id == 'top') {
            noOverlapCheck++;
            localOverlap = noOverlapCheck;
        }
        //delay the animation just a tad to let the whole thing be in view
        window.setTimeout(function() {
            if (id == 'top' && localOverlap != noOverlapCheck) {
                //Another resize happened before animation started, so abort this one
                return;
            }
            if (height < 60) {
                /* no branching, just vertical line */
                var top = strokeWidth / 2;
                s.line(x, top - height, x, top).animate({y1: top, y2: height}, ySpeed);
            } else {
                var stepSize = strokeSpace;
                //Tweak the step size so that dots line up *exactly* with div width
                var floor = Math.floor((x - (strokeWidth / 2.0)) / stepSize);
                var diff = (x - (strokeWidth / 2.0) - (floor * stepSize)) / floor;
                stepSize += diff;
                s.attr({'stroke-dasharray': '0, ' + stepSize});
                var halfWidth = Math.floor((x - (strokeWidth / 2.0)) / stepSize) * stepSize;
                var halfHeight = Math.floor((y - (strokeWidth / 2.0)) / stepSize) * stepSize;
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
        }, (id == 'top' ? 500 : 0));
    }
});