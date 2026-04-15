$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper').length) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Слайдер в тексте
	if ($('.text_block .swiper').length) {
		new Swiper('.text_block .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Акции
	$('body').on('click', '.stocks_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}], {
			on: {
				reveal: () => {
					if ($('.stocks .swiper').length) {
						let sliders = []

						$('.stocks .swiper').each(function (i) {
							let slides = $(this).find('.slide').length,
								this_ID = $(this).attr('id'),
								options = {
									loop: false,
									speed: 500,
									watchSlidesProgress: true,
									slideActiveClass: 'active',
									slideVisibleClass: 'visible',
									navigation: {
										nextEl: '.swiper-button-next',
										prevEl: '.swiper-button-prev'
									},
									breakpoints: {
										0: {
											spaceBetween: 24,
											slidesPerView: 1
										},
										768: {
											spaceBetween: 24,
											slidesPerView: 2
										},
										1280: {
											spaceBetween: 30,
											slidesPerView: 2
										}
									},
									on: {
										init: swiper => {
											setTimeout(() => {
												let thumbH = $(swiper.$el).find('.thumb').outerHeight()

												$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
												$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
											})
										},
										resize: swiper => {
											setTimeout(() => {
												let thumbH = $(swiper.$el).find('.thumb').outerHeight()

												$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
												$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
											})
										}
									}
								}

							sliders[i] = new Swiper('#' + this_ID, options)

							if (slides > sliders[i].params.slidesPerView) {
								options.loop = true
								sliders[i].destroy(true, true)
								sliders[i] = new Swiper('#' + this_ID, options)
							}
						})
					}
				}
			}
		})
	})


	// ГРУППЫ И РАСПИСАНИЕ
	if ($('.groups .swiper').length) {
		let sliders = []

		$('.groups .swiper').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 24,
							slidesPerView: 1
						},
						768: {
							spaceBetween: 24,
							slidesPerView: 2
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 28,
							slidesPerView: 4
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	$('.groups .group .info .price_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.info')

		if (!$(this).hasClass('active')) {
			$('.groups .group .info .price_info').hide()
			$('.groups .group .info .price_btn').removeClass('active')

			$(this).addClass('active')
			parent.addClass('open').find('.price_info').fadeIn(200)
		} else {
			$(this).removeClass('active')
			parent.removeClass('open').find('.price_info').hide()
		}
	})


	// Услуги
	if ($('.services .swiper').length) {
		let sliders = []

		$('.services .swiper').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 24,
							slidesPerView: 1
						},
						768: {
							spaceBetween: 24,
							slidesPerView: 2
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 28,
							slidesPerView: 4
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Школа
	if ($('.trainer_info .swiper').length) {
		new Swiper('.trainer_info .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.trainer_info_next_btn',
				prevEl: '.trainer_info_prev_btn'
			},
			on: {
				slideChange: swiper => {
					setTimeout(() => {
						let prevName = $(swiper.$el).find('.swiper-slide-prev').data('name'),
							prevThumb = $(swiper.$el).find('.swiper-slide-prev').data('thumb'),
							nextName = $(swiper.$el).find('.swiper-slide-next').data('name'),
							nextThumb = $(swiper.$el).find('.swiper-slide-next').data('thumb')

						$('.trainer_info .trainer_info_prev_btn span').html(prevName)
						$('.trainer_info .trainer_info_prev_btn .thumb img').attr('src', prevThumb)

						$('.trainer_info .trainer_info_next_btn span').html(nextName)
						$('.trainer_info .trainer_info_next_btn .thumb img').attr('src', nextThumb)
					})
				}
			}
		})
	}


	// Дополнительные услуги
	const additionalServicesSliders = []

	$('.additional_services .swiper').each(function (i) {
		$(this).addClass('additional_services_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: true,
				noSwiping: true,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 24,
						slidesPerView: 1
					},
					768: {
						spaceBetween: 24,
						slidesPerView: 2
					},
					1024: {
						spaceBetween: 24,
						slidesPerView: 3
					},
					1280: {
						spaceBetween: 40,
						slidesPerView: 3
					}
				},
				on: {
					init: swiper => {
						setTimeout(() => {
							let thumbH = $(swiper.$el).find('.thumb').outerHeight()

							$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
							setHeight($(swiper.$el).find('.item'))
						})
					},
					resize: swiper => {
						setTimeout(() => {
							let thumbH = $(swiper.$el).find('.thumb').outerHeight()

							$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)

							$(swiper.$el).find('.item').height('auto')
							setHeight($(swiper.$el).find('.item'))
						})
					}
				}
			}

		additionalServicesSliders.push(new Swiper('.additional_services_s' + i, options))

		if (slides > additionalServicesSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			additionalServicesSliders[i].destroy(true, true)
			additionalServicesSliders[i] = new Swiper('.additional_services_s' + i, options)
		}
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header > .close, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Кастомный select
	var selectsArr = [],
		selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => selectsArr.push(NiceSelect.bind(el)))
	}


	// Фильтр
	$('.catalog .filter .mob_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.catalog .filter form').slideToggle(300)
	})


	// Страница товара
	$('.product_data .head').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')
		parent.find('.data').slideToggle(300)
	})


	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			preloadImages: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	// Залипание блока
	if ($(window).width() > 1023) {
		new hcSticky('.sticky')
	}


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Video reviews
	const videoReviewsSliders = [],
		videoReviews = document.querySelectorAll('.video_reviews .swiper')

	videoReviews.forEach((el, i) => {
		el.classList.add('video_reviews_s' + i)
		el.setAttribute('data-slider-index', i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1,
					slidesPerGroup: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2,
					slidesPerGroup: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3,
					slidesPerGroup: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3,
					slidesPerGroup: 3
				}
			},
			on: {
				init: swiper => setHeight($(swiper.$el).find('.review')),
				resize: swiper => setHeight($(swiper.$el).find('.review')),
				changed: swiper => setHeight($(swiper.$el).find('.review'))
			}
		}

		videoReviewsSliders.push(new Swiper('.video_reviews_s' + i, options))
	})


	$('.video_reviews .spoler_btn').click(function(e) {
		e.preventDefault()

		let review = $(this).closest('.review'),
			swiperEl = $(this).closest('.swiper'),
			sliderIndex = swiperEl.data('slider-index')

		$(this).toggleClass('active')
		review.find('.awards .hide').slideToggle(300)

		setTimeout(() => {
			swiperEl.find('.review').css('min-height', '0px')

			videoReviewsSliders[sliderIndex].emit('changed')
		}, 300)
	})


	// Membership fitness table
	$('.membership_fitness_table .tooltip_btn').click(function(e) {
		e.preventDefault()
		e.stopPropagation()

		const tooltip = $(this).data('tooltip'),
			parent = $(this).closest('.block')

		parent.find('.membership_fitness_tooltip').hide()
		parent.find('.membership_fitness_tooltip.tooltip' + tooltip).fadeIn(300)
	})


	$('.membership_fitness_tooltip .close_btn').click(function(e) {
		e.preventDefault()

		$(this).closest('.membership_fitness_tooltip').hide()
	})


	$('.membership_fitness_table .item .col_service').click(function(e) {
		e.preventDefault()

		const WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

		if (WW < 768) {
			const parent = $(this).closest('.item'),
				block = $(this).closest('.block')

			parent.toggleClass('open')

			if (!parent.hasClass('open')) {
				block.find('.membership_fitness_tooltip').hide()
			}
		}
	})


	// Kids membership hockey table
	$('.kids_membership_hockey_table .head .col_details').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.item')

		parent.toggleClass('open')
		parent.find('.data').slideToggle(300)
	})


	$('.kids_membership_hockey_table .head .col_service').click(function(e) {
		e.preventDefault()

		const WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

		if (WW < 1024) {
			const parent = $(this).closest('.item')

			parent.toggleClass('open')
			parent.find('.data').slideToggle(300)
		}
	})


	// Ice field table - Zones
	$('.ice_field_table .item u').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.item')

		$('.ice_field_table .item u').removeClass('active')
		$('.ice_field_table .item .zone').removeClass('show')

		$(this).toggleClass('active')

		parent.find('.zone').toggleClass('show')
	})


	$('.ice_field_table .item .zone .close_btn').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.item')

		parent.find('u').removeClass('active')
		parent.find('.zone').removeClass('show')
	})


	$(document).click(e => {
		if ($(e.target).closest('.ice_field_table .item').length === 0) {
			$('.ice_field_table .item u').removeClass('active')
			$('.ice_field_table .zone').removeClass('show')
		}
	})


	// Court rental slider
	const courtRentalSliders = [],
		courtRental = document.querySelectorAll('.court_rental .swiper')

	courtRental.forEach((el, i) => {
		el.classList.add('court_rental_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 0,
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 7
				}
			},
		}

		courtRentalSliders.push(new Swiper('.court_rental_s' + i, options))
	})


	$('.court_rental .item .head').click(function(e) {
		e.preventDefault()

		$(this).closest('.item').toggleClass('active')
		$(this).next('.data').slideToggle(300)
	})


	$('.court_rental .item .day .price').hover(
		function () {
			highlight($(this).closest('.item'), this, false)
		},

		function () {
			const $item = $(this).closest('.item')

			if ($item.find('.price.selected').length) return

			$item.find('.price, .time > *').removeClass('highlighted')
		}
	)


	$('.court_rental .item .day .price').click(function () {
		const $price = $(this),
			$item = $price.closest('.item'),
			isSelected = $price.hasClass('selected')

		$item.find('.price, .time > *').removeClass('selected highlighted')

		if (isSelected) {
			$('.court_rental .order .empty').removeClass('hide')
			$('.court_rental .order .data').removeClass('show')
			return
		}

		highlight($item, this, true)

		$price
			.addClass('selected')
			.prevAll('.price')
			.addClass('highlighted')

		$('.court_rental .order .empty').addClass('hide')
		$('.court_rental .order .data').addClass('show')
	})
})


function highlight(item, priceEl, isClick = false) {
	const $price = $(priceEl),
		$slide = $price.closest('.swiper-slide')

	const priceIndex = $price.parent().children('.price').index($price)
	const slideIndex = $slide.index()

	if (!isClick && item.find('.price.selected').length) return

	item.find('.price, .time > *').removeClass('highlighted')

	$price
		.addClass('highlighted')
		.prevAll('.price')
		.addClass('highlighted')

	item.find('.time > *')
		.eq(priceIndex)
		.addClass('highlighted')

	item.find('.swiper-slide').each(function (i) {
		if (i >= slideIndex) return

		$(this)
			.find('.day .price')
			.eq(priceIndex)
			.addClass('highlighted')
	})
}