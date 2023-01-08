$(function() {
	
	$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});
	
	//main slide
      var swiper = new Swiper(".main-slide", {
        pagination: {
          el: ".swiper-pagination",
        },
		  loop: true,
		 autoplay: {
          delay: 2800,
          disableOnInteraction: false,
        },
      });
	
	//menu
	$('.menu').on('click', function(){
		$('nav').fadeIn(200);
	})
	$('.close').on('click', function() {
		$('nav').fadeOut(200);
		$('.gnb > .depth1 > .depth2').slideUp();
		$('.gnb > .depth1 > .depth3').slideUp();
	})
	
	$('.depth1').each(function() {
		
		$('.depth1 > li > a').on('click', function() {
			var li = $(this).parent('li'),
				depth2 = $('.depth1').find('.depth2');
			
			if (li.hasClass('on')) {
				li.removeClass('on');
				li.siblings(li).removeClass('on');
				li.find(depth2).slideUp();
				li.siblings(li).children('.depth2').slideUp();
				
				
			} else {
				li.addClass('on');
				li.find('.depth2').slideDown();
				li.siblings(li).removeClass('on');
				li.siblings(li).children('.depth1').slideUp();
				li.siblings(li).find(depth2).removeClass('on');
				li.siblings(li).find(depth2).slideUp();			
			}
		})
		
		$('.depth2 > li > a').on('click', function() {
			var li = $(this).parent('li'),
				depth2 = $('.depth2'),
				depth3 = depth2.find('.depth3');
			
			if (li.hasClass('on')) {
				li.removeClass('on');
				li.siblings(li).removeClass('on');
				li.find(depth3).slideUp();
				li.siblings(li).find(depth3).slideUp;
			} else {
				li.addClass('on');
				li.find(depth3).slideDown();
				li.siblings(li).removeClass('on');
				li.siblings(li).find(depth3).removeClass('on');
				li.siblings(li).find(depth3).slideUp();
			}
		});
	});
	
/*	var swiper = new Swiper(".mon-slide", {
        watchSlidesProgress: true,
        slidesPerView: 3,
      });*/
	
	
	
	/*var swiper = new Swiper(".tab-slide", {
        watchSlidesProgress: true,
        slidesPerView: 3,
      });*/
	
	
	//monthly
	  var swiper = new Swiper(".mon-slide", {
        slidesPerView: 2,
        centeredSlides: true,
		  watchSlidesProgress: true,
        spaceBetween: 10,
        
		  
      });
	
	//comb
	$('#comb').each(function(){
		var cont = $(this).find('.comb-cont'),
			anchor = $(this).find('.comb-tab > a'),
			num = $(this).find('.num > span');
		
		anchor.on('click', function(e) {
			e.preventDefault();
			
			if ($(this).hasClass('on')) {
				return;
			};
			
			
			cont.siblings(cont).fadeToggle(0);
			num.siblings(num).fadeToggle(0); 
			
			/*anchor.removeClass('on');
			$(this).addClass('on');
			cont.hide();
			cont.siblings(cont).show();
			num.hide();
			num.siblings(num).show();*/
			
			
			
		/*	if (cont.hasClass('on')) {
				cont.removeClass('on');
				cont.siblings(cont).addClass('on');
				num.removeClass('on');
				num.siblings(num).addClass('on');
			} */
		})
			
	})
	
	//tab
	$('#select').each(function() {
		var anchor = $('#select .tab-list > li > a'),
			tabCont = $('#select .tab-cont');
		
		anchor.on('click', function(e) {
			e.preventDefault();

			if ($(this).hasClass('on')) {
				return;
			};

			anchor.removeClass('on');
			$(this).addClass('on');
			tabCont.hide();
			$($(this).attr('href')).fadeIn(150);
		});
	});
	
	//tab slide
	var swiper = new Swiper(".tab-slide", {
        slidesPerView: 2,
        centeredSlides: true,
		  watchSlidesProgress: true,
        spaceBetween: 10,
        
      });
	
	
	
	//search oepn / close
	$('.search').on('click', function() {
		$('.search-box').fadeIn(200);
		$(this).hide();
		$('.s-close').show();
	})
	$('.s-close').on('click', function() {
		$('.search-box').fadeOut(200);
		$(this).hide();
		$('.search').show();
	})
	
	//search tab
	$('.search-box').each(function() {
		var list = $(this).find('.s-list'),
			anchor = list.find('a'),
			tabDiv = $(this).find('.tab-search');
		
		anchor.on('click', function(e){
			e.preventDefault();
			
			if ($(this).hasClass('on')) {
				return;
			};
			
			anchor.removeClass('on');
			$(this).addClass('on');
			tabDiv.hide();
			$($(this).attr('href')).fadeIn();
		});
	});
});

	

	