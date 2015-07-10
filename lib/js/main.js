/**
 * CAROUSEL AUTO GENERATE INDICATORS 
 * Generate auto indicators for the carousel
 */
var carouselAutoIndicators = function() {
    var carousel = $(".carousel"); 

    carousel.each(function(){

        var carouselID = $(this).attr("id");

        $(this).prepend("<ol class='carousel-indicators'></ol>");
        var indicators = $(this).find(".carousel-indicators"); 

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

var FCSliders = function(){

	$('.jc-wrapper').each(function(){

	var _caseslider = $(this)
    	.find('.jc-viewport')
  		.on('jcarousel:reload jcarousel:create', function () {
      		var _width = $(this).innerWidth();
      		$(this).jcarousel('items').css('width', _width + 'px');
    	})
  		.jcarousel({  
      		wrap: "circular"
    	})
    	.css({'cursor': 'pointer'})
    	.on('click',function(){
      		if (typeof editmode === 'undefined') {
				_caseslider.jcarousel("scroll","+=1",true);
        	}
    	});
  	
  	$(this)
    	.find('.jc-pager').jcarouselPagination({
        	carousel: _caseslider,
      		item: function(page) {
          		return '<div class="jc-pager-item"><a href="#' + page + '" class="jc-pager-link" onClick="return false">' + page + '</a></div>';
      		}
    	})
    	.on('jcarouselpagination:active', '.jc-pager-item', function() {
        	$(this).find('a').addClass('active');
    	})
    	.on('jcarouselpagination:inactive', '.jc-pager-item', function() {
        	$(this).find('a').removeClass('active');
    	})
    	.find('.jc-pager-item:first-child a').addClass('active');
       
   	$(this)
    	.find('.jc-prev').on("click",function(){
      		_caseslider.jcarousel("scroll","-=1",true);
    	});
        
    $(this)
    	.find('.jc-next').on("click",function(){
      		_caseslider.jcarousel("scroll","+=1",true);
    });
       
       
  });
        
}
var FCSlidersMenu = function(){
    
	$('.jcarousel-pagination ul').jcarouselPagination({
		'item': function(page, carouselItems) {
			return '<li class="pager-item"><a href="#' + page + '" onClick="return false"> ' + carouselItems.attr('data-name') + '</a></li>';
		}
	})
    .on('jcarouselpagination:active', '.pager-item', function() {
        $(this).find('a').addClass('active');
    })
    .on('jcarouselpagination:inactive', '.pager-item', function() {
        $(this).find('a').removeClass('active');
    })
    .find('.pager-item:first-child a').addClass('active');
  
}


$(document).ready(function() {

	//skrollr Init
	skrollr.init();

  carouselAutoIndicators();
  $('.carousel').carousel();

	if ($('.case .jc-wrapper').length) {
    FCSliders();
  }
  if ($('.case .slider-menu').length) {
    FCSlidersMenu();
  }

});