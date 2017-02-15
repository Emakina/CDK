/**
 * BOOTSTRAP CAROUSEL AUTO GENERATE INDICATORS
 * Generate auto indicators for the carousel
 */
var carouselAutoIndicators = function () {
    var carousel = $(".case .carousel");

    carousel.each(function () {

        var carouselID = $(this).attr("id");

        $(this).prepend("<ol class='carousel-indicators'></ol>");
        var indicators = $(this).find(".carousel-indicators");

        var nbItem = $(this).find('.item').length;
        indicators.addClass('indicators' + nbItem);

        $(this).find(".carousel-inner").children(".item").each(function (index) {

            var name = $(this).attr("data-slide");
            if (name === undefined) {
                name = "";
            }

            (index === 0) ?
                indicators.append("<li data-target='#" + carouselID + "' data-slide-to='" + index + "' class='active'>" + name + "</li>") :
                indicators.append("<li data-target='#" + carouselID + "' data-slide-to='" + index + "'>" + name + "</li>");
        });

    });
};


/**
 * BOOTSTRAP CAROUSEL HEIGHT
 * Set same height to all items & to the carousel
 */
var carouselHeight = function () {
    var carousel = $(".case .carousel");

    carousel.each(function () {
        var carouselWidth = $(this).find('.carousel-inner').width();
        var items = $(this).find('.item');
        var heights = [];
        var tallest;

        if (items.length) {
            setTimeout(function () {

                $('head').append('<style id="generated-carousel-bs">.carousel-inner .item{display:inline-block!important;height:auto !important;width:100%!important;}</style>');

                items.each(function () { //add heights to array
                    var itemHeight = $(this).height();
                    heights.push(itemHeight);
                    tallest = Math.max.apply(null, heights); //cache tallest value

                    $(this).css('width', carouselWidth + 'px');
                    $(this).parents('.carousel-inner').css('height', tallest + 'px');

                });

                $('#generated-carousel-bs').remove();

            }, 400);
        }

    })

};

var carouselClick = function () {

    var carousel = $(".case .carousel");
    carousel.each(function () {
        var next = $(this).find('.carousel-control.right');
        var prev = $(this).find('.carousel-control.left');

        var link = $(this).find('a');


        next.on("click", function () {
            $(this).carousel('next');
        });

        prev.on("click", function () {
            $(this).carousel('prev');
        });

        link.on("click", function () {
            window.location.href = $(this).attr('href');
        });

    });

};

$(document).ready(function () {

    carouselHeight();
    carouselAutoIndicators();
    carouselClick();

    var carousel = $('.case .carousel');
    carousel.each(function () {
        if ($(this).hasClass('autoSlide')) {
            $(this).carousel({
                interval: 3000
            });
        } else if ($(this).hasClass('autoSlideSlow')) {
            $(this).carousel({
                interval: 6000
            });
        } else {
            $(this).carousel({
                interval: false
            });
        }
    });

});

$(window).resize(function () {
    carouselHeight();
});
