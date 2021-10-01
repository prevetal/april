$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
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
	if ($('.text_block .swiper-container').length) {
		new Swiper('.text_block .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
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
					if ($('.stocks .swiper-container').length) {
						let sliders = []

						$('.stocks .swiper-container').each(function (i) {
							let slides = $(this).find('.slide').length,
								this_ID = $(this).attr('id'),
								options = {
									loop: false,
									speed: 500,
									watchSlidesVisibility: true,
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
	if ($('.groups .swiper-container').length) {
		let sliders = []

		$('.groups .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
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
	if ($('.services .swiper-container').length) {
		let sliders = []

		$('.services .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
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
})