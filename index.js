$(function() {
    var options = {
        width: 12,
        float: false,
        removable: '.trash',
        removeTimeout: 100,
        acceptWidgets: '.grid-stack-item',
        resizable: {
            handles: 'e, se, s'
        },
    };
    $('#grid1').gridstack(options);
    $('#grid2').gridstack(_.defaults({
        float: true
    }, options));

    function resizeGrid() {
        var grid = $('.grid-stack').data('gridstack');
        if (isBreakpoint('xs')) {
            $('#grid-size').text('One column mode');
        } else if (isBreakpoint('sm')) {
            grid.setGridWidth(3);
            $('#grid-size').text(3);
        } else if (isBreakpoint('md')) {
            grid.setGridWidth(6);
            $('#grid-size').text(6);
        } else if (isBreakpoint('lg')) {
            grid.setGridWidth(12);
            $('#grid-size').text(12);
        }
    };

    var items = [{
        x: 0,
        y: 0,
        width: 2,
        height: 2,
        name: 'component 1',
        img: 'https://www.newpages2u.com/img/15704212675.png'
    }, {
        x: 3,
        y: 1,
        width: 1,
        height: 2,
        name: 'component 2',
        img: 'https://www.newpages2u.com/img/15704220675.png'
    }, {
        x: 4,
        y: 1,
        width: 1,
        height: 1,
        name: 'component 3'
    }, {
        x: 2,
        y: 3,
        width: 3,
        height: 1,
        name: 'component 4'
    }, {
        x: 2,
        y: 5,
        width: 1,
        height: 1,
        name: 'component 5'
    }];

    $('.grid-stack').each(function() {
        var grid = $(this).data('gridstack');

        _.each(items, function(node) {
            grid.addWidget($('<div><div class="grid-stack-item-content"><p>' + node.name + '</p><img src="' + node.img + '"></div></div>'),
                node.x, node.y, node.width, node.height);
        }, this);
    });

    $('.sidebar .grid-stack-item').draggable({
        revert: 'invalid',
        handle: '.grid-stack-item-content',
        scroll: false,
        appendTo: 'body'
    });
});