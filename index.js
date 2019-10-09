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
        x: 11,
        y: 2,
        width: 2,
        height: 2,
        name: 'component 1',
        img: 'https://www.newpages2u.com/img/15704212675.png'
    }, {
        x: 0,
        y: 2,
        width: 10,
        height: 2,
        name: 'component 2',
        img: 'https://www.newpages2u.com/img/15704220675.png',
        template: 'file:///C:/Users/User/Desktop/hibiki/dragAndDorpHibikiVer/components/template_2/template_default/test.html'
    }, {
        x: 0,
        y: 0,
        width: 12,
        height: 1,
        name: 'component 3',
        template: 'file:///C:/Users/User/Desktop/hibiki/dragAndDorpHibikiVer/components/template_1/template_default/test.html'
    }, {
        x: 0,
        y: 3,
        width: 12,
        height: 3,
        name: 'component 4',
        template: 'file:///C:/Users/User/Desktop/hibiki/dragAndDorpHibikiVer/components/template_3/template_default/test.html'
    }, {
        x: 12,
        y: 6,
        width: 1,
        height: 1,
        name: 'component 5'
    }];

    $('.grid-stack').each(function() {
        var grid = $(this).data('gridstack');

        _.each(items, function(node) {
            grid.addWidget($('<div><div class="grid-stack-item-content" data-name-id="' + node.name + '"><p>' + node.name + '</p><div class="iframe_frame"><iframe src="' + node.template + '"></iframe></div></div></div>'),
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

$('#save_layout').on('click', function() {
    this.serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function(el) {
        el = $(el);
        var node = el.data('_gridstack_node');
        let x = $(el).find('.grid-stack-item-content');
        return {
            x: node.x,
            y: node.y,
            width: node.width,
            height: node.height,
            name: x.data('nameId')
        };
    }, this);
    console.log(this.serializedData)
        // $('#saved-data').val(JSON.stringify(this.serializedData, null, '    '));
    return false;
})

$('#clear_layout').on('click', function() {
    this.grid = $('.grid-stack').data('gridstack');
    this.grid.removeAll();
    return false;
})

// $(function() {
//     var options = {};
//     $('.grid-stack').gridstack(options);

//     new function() {
//         this.serializedData = [
//             { x: 0, y: 0, width: 2, height: 2 },
//             { x: 3, y: 1, width: 1, height: 2 },
//             { x: 4, y: 1, width: 1, height: 1 },
//             { x: 2, y: 3, width: 3, height: 1 },
//             { x: 1, y: 4, width: 1, height: 1 },
//             { x: 1, y: 3, width: 1, height: 1 },
//             { x: 2, y: 4, width: 1, height: 1 },
//             { x: 2, y: 5, width: 1, height: 1 }
//         ];

//         this.grid = $('.grid-stack').data('gridstack');

//         this.loadGrid = function() {
//             this.grid.removeAll();
//             var items = GridStackUI.Utils.sort(this.serializedData);
//             _.each(items, function(node) {
//                 this.grid.addWidget($('<div><div class="grid-stack-item-content" /><div/>'),
//                     node.x, node.y, node.width, node.height);
//             }, this);
//             return false;
//         }.bind(this);

//         this.saveGrid = function() {
//             this.serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function(el) {
//                 el = $(el);
//                 var node = el.data('_gridstack_node');
//                 return {
//                     x: node.x,
//                     y: node.y,
//                     width: node.width,
//                     height: node.height
//                 };
//             }, this);
//             $('#saved-data').val(JSON.stringify(this.serializedData, null, '    '));
//             return false;
//         }.bind(this);

//         this.clearGrid = function() {
//             this.grid.removeAll();
//             return false;
//         }.bind(this);

//         $('#save-grid').click(this.saveGrid);
//         $('#load-grid').click(this.loadGrid);
//         $('#clear-grid').click(this.clearGrid);

//         this.loadGrid();
//     };
// });