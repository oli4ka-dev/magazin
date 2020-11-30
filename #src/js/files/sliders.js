//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function sliders_bild_callback(params) {}

//================================== .mainslider
if (document.querySelector('.mainslider')) {
	let mainslider = new Swiper('.mainslider__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.mainslider__dotts',
			clickable: true,
		},
		// Arrows
		// navigation: {
		// 	nextEl: '.about__more .more__item_next',
		// 	prevEl: '.about__more .more__item_prev',
		// },
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
	//=================================
	let mainsliderImages = document.querySelectorAll('.mainslider__image');
	let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');

	for (let index = 0; index < mainsliderImages.length; index++) {
		const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
		mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
	}
}
//========================================= .products-slider   
if (document.querySelector('.products-slider')) {

	let productslider = new Swiper('.products-slider__item', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.products-slider__info',
			type: 'fraction',
			// clickable: true,
		},
		navigation: {
			nextEl: '.products-slider__arrow-next',
			prevEl: '.products-slider__arrow-prev',
		},

		on: {
			// lazyImageReady: function () {
			// 	ibg();
			// },
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}
//============================================== .brands-slider
if (document.querySelector('.brands-slider')) {

	let brandslider = new Swiper('.brands-slider__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Arrows
		navigation: {
			nextEl: '.brands-slider__arrow-next',
			prevEl: '.brands-slider__arrow-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				autoHeight: true,
			},
			480: {
				slidesPerView: 2,

			},
			600: {
				slidesPerView: 3,

			},
			768: {
				slidesPerView: 4,

			},
			992: {
				slidesPerView: 5,

			},
		},

		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}