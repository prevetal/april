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
})