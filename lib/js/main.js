/**
 * BOOTSTRAP CAROUSEL AUTO GENERATE INDICATORS
 * Generate auto indicators for the carousel
 */
var carouselAutoIndicators = function () {
    var $carousel = $(".case .carousel");

    $carousel.each(function () {

        var carouselID = $(this).attr("id");

        $(this).prepend("<ol class='carousel-indicators'></ol>");
        var $indicators = $(this).find(".carousel-indicators");

        var nbItem = $(this).find('.item').length;
        $indicators.addClass('indicators' + nbItem);

        $(this).find(".carousel-inner").children(".item").each(function (index) {
            var name = $(this).attr("data-slide");
            if (typeof name === 'undefined') {
                name = '';
            }

            if (index === 0) {
                $indicators.append('<li data-target="#' + carouselID + '" data-slide-to="' + index + '" class="active">' + name + '</li>');
            } else {
                $indicators.append('<li data-target="#' + carouselID + '" data-slide-to="' + index + '">' + name + '</li>');
            }
        });
    });
};


/**
 * BOOTSTRAP CAROUSEL HEIGHT
 * Set same height to all items & to the carousel
 */
var carouselHeight = function () {
    var $carousel = $(".case .carousel");

    $('head').append('<style id="generated-carousel-bs">.carousel-inner .item{display:inline-block!important;height:auto !important;width:100%!important;}</style>');

    $carousel.each(function () {

        var carouselWidth = $(this).find('.carousel-inner').width();
        var $items = $(this).find('.item');
        var heights = [];
        var tallest;

        if ($items.length) {
            $items.each(function () { //add heights to array

                var itemHeight = $(this).height();
                heights.push(itemHeight);
                tallest = Math.max.apply(null, heights); //cache tallest value

                $(this).css('width', carouselWidth + 'px');
                $(this).parents('.carousel-inner').css('height', tallest + 'px');

            });
        }

    });

    $('#generated-carousel-bs').remove();
};

/**
 * BOOTSTRAP CAROUSEL SLIDE ON CLICK
 * Carousel changes by clicking on it
 */
var carouselClick = function () {

    var $carousel = $(".case .carousel");

    $carousel.on("click", function () {
        $(this).carousel('next');
    });

};

$(document).ready(function () {

    // Initialize Carousel
    $('.case .carousel').carousel({
        interval: false
    });

    // Wait for all assets to be loaded
    $(window).on('load', function () {
        // Calculate carousel height
        carouselHeight();
        // Display carousel indicators
        carouselAutoIndicators();
        // Display next carousel item on click
        carouselClick();
        // Initialize Skrollr when all assets are loaded
        skrollr.init();
    });

    // Update the carousel height when the window is resized
    $(window).resize(function () {
        carouselHeight();
    });
});





