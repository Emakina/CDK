
var maskHide =  function(){
  
	var mask = $('.mask-fixed');
	mask.hide();
  
	$(window).scroll(function (event) {
    
	    var scroll = $(window).scrollTop();
	    var windowHeight = $(window).height();
	    
	    var box = $('.box-design');
	    var boxTop = box.offset().top;
	    var boxHeight = box.outerHeight();
	    var boxBottom = boxTop + boxHeight;
    
    
    
    
	    if( scroll > (boxTop - windowHeight) )  {
	      
	      if( scroll < boxBottom ){
	        mask.show();
	      } else {
	        mask.hide();
	      }
	      
	    } else {
			mask.hide();
	    }
  	});
  
};

$(document).ready(function() {
    
  	if ($('.case-ing').length) { 
    	maskHide();
  	}
  
});