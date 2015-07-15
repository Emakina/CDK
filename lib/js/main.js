/**
 * BOOTSTRAP CAROUSEL AUTO GENERATE INDICATORS 
 * Generate auto indicators for the carousel
 */
var carouselAutoIndicators = function() {
    var carousel = $(".case .carousel"); 

    carousel.each(function(){

        var carouselID = $(this).attr("id");

        $(this).prepend("<ol class='carousel-indicators'></ol>");
        var indicators = $(this).find(".carousel-indicators");
        
        var nbItem = $(this).find('.item').length;
        indicators.addClass('indicators' + nbItem);

        $(this).find(".carousel-inner").children(".item").each(function(index) {
            
            var name = $(this).attr("data-slide");
            if(name === undefined) {
                var name = "";
            }

            (index === 0) ? 
            indicators.append("<li data-target='#"+carouselID+"' data-slide-to='"+index+"' class='active'>"+name+"</li>") : 
            indicators.append("<li data-target='#"+carouselID+"' data-slide-to='"+index+"'>"+name+"</li>");
        });

    });
}


/**
 * BOOTSTRAP CAROUSEL HEIGHT 
 * Set same height to all items & to the carousel 
 */
var carouselHeight = function(){
  var carousel = $(".case .carousel");

    $('head').append('<style id="generated-carousel-bs">.carousel-inner .item{display:inline-block!important;height:auto !important;width:100%!important;}</style>');
    
    carousel.each(function() {
    
        var carouselWidth = $(this).find('.carousel-inner').width();
        var items = $(this).find('.item');
        var heights = [];
        var tallest;
        
        if (items.length) {
            items.each(function() { //add heights to array
                
                var itemHeight = $(this).height();
                heights.push(itemHeight); 
                tallest = Math.max.apply(null, heights); //cache tallest value
                
                $(this).css('width',carouselWidth + 'px');
                $(this).parents('.carousel-inner').css('height',tallest + 'px');
                
            });
        }
        
    })
    
    $('#generated-carousel-bs').remove();
}

/**
 * BOOTSTRAP CAROUSEL SLIDE ON CLICK  
 * Carousel changes by clicking on it 
 */
var carouselClick = function(){
    
    var carousel = $(".case .carousel"); 
    
    carousel.on( "click", function() {
          $(this).carousel('next');
    });
    
}

$(document).ready(function() {

    skrollr.init();

    carouselHeight();
    carouselAutoIndicators();
    carouselClick();
    $('.case .carousel').carousel({
        interval: false
    });

});


$(window).resize(function() {
    
    carouselHeight();
    
});


