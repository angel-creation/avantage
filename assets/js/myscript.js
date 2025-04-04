$('.avt-testimonials-wrapper').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
})


$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$("avt-header").addClass("header-fix");
		} else {
			//remove the background property so it comes transparent again (defined in your css)
			$(".avt-header").removeClass("header-fix");
		}
	});
});

$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$(".avt-header").addClass("active");
		} else {
			//remove the background property so it comes transparent again (defined in your css)
			$(".avt-header").removeClass("active");
		}
	});
});

$('.avt-our-partners-wrapper').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 4
		},
		1000: {
			items: 4
		}
	}
})

$('.avt-services-wrapper').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	autoplay: true,
	autoplayTimeout: 1000,
	autoplayHoverPause: false,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 4
		}
	}
})


const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
const bsCollapse = new bootstrap.Collapse('#myCollapse', {
	toggle: false,
})