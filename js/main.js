$(document).ready(function () {
    console.log("ready!");


    var $grid = $('.grid').masonry({

        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-item',
        percentPosition: true
    });
// layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });



// filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

// bind filter button click
    $('#filters').on('click', 'a', function () {
        var link_a = $(this);
        $('#filters li a').removeClass("active");
        link_a.addClass("active");
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({filter: filterValue});
    });


});


