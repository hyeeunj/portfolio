// $(function () {

// 	//gnb
// 	$('.depth1 > li > a:eq(0)').on('mouseenter', function () {
// 		$('.depth1 > li > .depth2:eq(0)').fadeIn(200)
// 	})
// 	$('.depth1 > li:eq(0)').on('mouseleave', function () {
// 		$('.depth1 > li > .depth2:eq(0)').fadeOut(200)
// 	})
// 	$('.depth1 > li > a:eq(1)').on('mouseenter', function () {
// 		$('.depth1 > li > .depth2:eq(1)').fadeIn(200)
// 	})
// 	$('.depth1 > li:eq(1)').on('mouseleave', function () {
// 		$('.depth1 > li > .depth2:eq(1)').fadeOut(200)
// 	})
// 	$('.depth1 > li:eq(2)').on('mouseenter', function () {
// 		$('.depth1 > li > .depth2:eq(2)').fadeIn(200)
// 	})
// 	$('.depth1 > li:eq(2)').on('mouseleave', function () {
// 		$('.depth1 > li > .depth2:eq(2)').fadeOut(200)
// 	})
// 	$('.depth1 > li > a:eq(3)').on('mouseenter', function () {
// 		$('.depth1 > li > .depth2:eq(3)').fadeIn(200)
// 	})
// 	$('.depth1 > li:eq(3)').on('mouseleave', function () {
// 		$('.depth1 > li > .depth2:eq(3)').fadeOut(200)
// 	})

// 	//loginbox
// 	$('.login > a').on('click', function () {
// 		$('.login > .login-box').fadeToggle(200)
// 	})

// 	//search open
// 	$('.search').on('click', function () {
// 		$('.search-box').slideToggle(200);
// 	});

// 	//search close
// 	$('.close').on('click', function () {
// 		$('.search-box').slideUp(200);
// 	});


// 	//search-tab
// 	$('.search-box').each(function () {
// 		var anchor = $(this).find('.s-list > p > a'),
// 			p = $(this).find('.s-list > p'),
// 			search = $(this).find('.tab-search');

// 		anchor.on('click', function (e) {
// 			e.preventDefault();

// 			if ($(this).hasClass('on')) {
// 				return;
// 			};
// 			anchor.removeClass('on');
// 			$(this).addClass('on');
// 			search.hide();
// 			$($(this).attr('href')).fadeIn(170);
// 		});
// 	});



// 	//monthly popup
// 	$('#monthly .color-slide .swiper-slide:eq(0) .popup > a').on('click', function () {
// 		$(this).siblings().fadeToggle(150);
// 	});
// 	$('#monthly .color-slide .swiper-slide:eq(1) .popup > a').on('click', function () {
// 		$(this).siblings().fadeToggle(150);
// 	});
// 	$('#monthly .color-slide .swiper-slide:eq(2) .popup > a').on('click', function () {
// 		$(this).siblings().fadeToggle(150);
// 	});
// 	$('#monthly .color-slide .swiper-slide:eq(3) .popup > a').on('click', function () {
// 		$(this).siblings().fadeToggle(150);
// 	});
// 	$('#monthly .color-slide .swiper-slide:eq(4) .popup > a').on('click', function () {
// 		$(this).siblings().fadeToggle(150);
// 	});

// 	//tab
// 	$('#select').each(function () {
// 		var anchor = $('#select .tab-tit > li > a'),
// 			tabCont = $('#select .tab-cont > div');

// 		anchor.on('click', function (e) {
// 			e.preventDefault();

// 			if ($(this).hasClass('on')) {
// 				return;
// 			};

// 			anchor.removeClass('on');
// 			$(this).addClass('on');
// 			tabCont.hide();
// 			$($(this).attr('href')).fadeIn(150);
// 		});
// 	});



// 	//swiper
// 	var swiper = new Swiper(".main-slide", {
// 		spaceBetween: 30,
// 		effect: "fade",
// 		centeredSlides: true,
// 		autoplay: {
// 			delay: 4000,
// 			disableOnInteraction: false,
// 		},
// 		/* pagination: {
// 			 el: ".swiper-pagination",
// 			 clickable: true,
// 		 },*/
// 		navigation: {
// 			nextEl: ".swiper-button-next",
// 			prevEl: ".swiper-button-prev",
// 		},
// 	});

// 	var swiper = new Swiper(".color-slide", {
// 		slidesPerView: 2,
// 		spaceBetween: 20,
// 		loop: true,
// 		autoplay: {
// 			delay: 2700,
// 			disableOnInteraction: false,
// 		},
// 		pagination: {
// 			el: ".swiper-pagination",
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: ".swiper-button-next",
// 			prevEl: ".swiper-button-prev",
// 		},
// 	});

// 	var swiper = new Swiper(".colorText-slide", {
// 		slidesPerView: 1,
// 		spaceBetween: 30,
// 		loop: true,
// 		autoplay: {
// 			delay: 2695,
// 			disableOnInteraction: false,
// 		},
// 		pagination: {
// 			el: ".swiper-pagination",
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: ".swiper-button-next",
// 			prevEl: ".swiper-button-prev",
// 		},
// 	});

// 	var swiper = new Swiper(".caseText-slide", {
// 		slidesPerView: 1,
// 		spaceBetween: 0,
// 		loop: true,
// 		autoplay: {
// 			delay: 2800,
// 			disableOnInteraction: false,
// 		},
// 		pagination: {
// 			el: ".swiper-pagination",
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: ".swiper-button-next",
// 			prevEl: ".swiper-button-prev",
// 		},
// 	});

// 	var swiper = new Swiper(".case-slide", {
// 		slidesPerView: 2,
// 		spaceBetween: 30,
// 		loop: true,
// 		autoplay: {
// 			delay: 2800,
// 			disableOnInteraction: false,
// 		},
// 		pagination: {
// 			el: ".swiper-pagination",
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: ".swiper-button-next",
// 			prevEl: ".swiper-button-prev",
// 		},
// 	});
// })

//header
const $anchor = document.querySelectorAll('.menu-list');
const $depth2 = document.querySelectorAll('.depth2');

$anchor.forEach((item, i) => {
	item.addEventListener('mouseenter', () => {
		for (let i = 0; i < $anchor.length; i++) {
			$depth2[i].classList.remove('on');
		}
		$depth2[i].classList.add('on');
	})

	item.addEventListener('mouseleave', () => {
		$depth2[i].classList.remove('on');
	})
})

//tab
const $tabBtn = document.querySelectorAll('.tab-tit > li > a');
const $tabCont = document.querySelectorAll('.tab-cont > div');

$tabBtn.forEach((item, index) => {
	item.addEventListener('click', () => {
		for (let i = 0; i < $tabBtn.length; i++) {
			$tabBtn[i].classList.remove('on');
			$tabCont[i].classList.remove('on');
		}
		item.classList.add('on');
		$tabCont[index].classList.add('on');
	})
})