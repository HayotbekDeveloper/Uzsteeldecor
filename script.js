window.addEventListener('load', function (e) {
    AOS.init();
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        simulateTouch: false,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoHeight: true,
    });
    const swiper2 = new Swiper('.swiper2', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        simulateTouch: false,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoHeight: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    });
    const filterItem = document.querySelector('.items');
    const filterImg = document.querySelectorAll('.gallery');
    const filterimage = document.querySelectorAll('.imageSlide');
    const body = document.body;

    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name")
            filterImg.forEach((gallery) => {
                let filterImages = gallery.getAttribute("data-name")
                if ((filterImages == filterName)) {
                    gallery.classList.remove("hide")
                    gallery.classList.add("show")
                } else {
                    gallery.classList.add("hide")
                    gallery.classList.remove("show")
                }
            });
            filterimage.forEach((slider) => {
                let filterImages = slider.getAttribute("data-name")
                if ((filterImages == filterName)) {
                    slider.classList.remove('hide')
                    slider.classList.add('show')
                } else {
                    slider.classList.add('hide')
                    slider.classList.remove('show')
                }
            })
        }
    }

    const scrollCont = {
        scrollPosition: 0,
        disabledScroll() {
            scrollCont.scrollPosition = window.scrollY;
            document.body.style.cssText = `
                overflow: hidden;
                position: fixed;
                top: -${scrollCont.scrollPosition}px;
                left: 0;
                height: 100vh;
                width: 100vw;
                padding-right: ${window.innerWidth - document.body.offsetWidth}px;
            `;
            document.documentElement.style.scrollBehavior = 'unset';
        },
        enabledScroll() {
            document.body.style.cssText = 'position: relative;'
            window.scroll({ top: scrollCont.scrollPosition })
            document.documentElement.style.scrollBehavior = ""
        },
    }

    document.querySelectorAll('.gallery-cataloge img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.preview-box').style.opacity = '1';
            document.querySelector('.preview-box').style.visibility = 'visible';
            document.querySelector('.preview-box img').src = image.getAttribute('src')
            document.querySelector('.shadow').style.display = 'block';
            scrollCont.disabledScroll();
        }
    })
    document.querySelector('.preview-box .icon').onclick = () => {
        document.querySelector('.preview-box').style.opacity = '0';
        document.querySelector('.preview-box').style.visibility = 'hidden';
        document.querySelector('.shadow').style.display = 'none';
        scrollCont.enabledScroll();
    }
    document.querySelector('.shadow').onclick = () => {
        document.querySelector('.preview-box').style.opacity = '0';
        document.querySelector('.preview-box').style.visibility = 'hidden';
        document.querySelector('.shadow').style.display = 'none';
        scrollCont.enabledScroll();

        // let pagePosition = parseInt(body.dataset.position, 10);
        // body.style.top = 'auto';
        // window.scroll({top: pagePosition, left: 0});
        // body.removeAttribute('data-position')
        // body.classList.remove('disable-scroll');
    }

    let mask = document.querySelector('.mask');

    mask.classList.add('scroll-hide');
    setTimeout(() => {
        mask.remove();
    }, 600)

    $('.scroll-to-top').on('click', function () {
        $(window).scrollTop(0)
    })

    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop()

        if (scroll >= 50) {
            $('.scroll-to-top').removeClass('hide')
        } else {
            $('.scroll-to-top').addClass('hide')
        }
    })

    $('.burger_menu').on('click', function () {
        $('.nav_mobile').toggleClass('active')
        $('.burger_menu').toggleClass('active')
        $('body').toggleClass('lock')
    })

});