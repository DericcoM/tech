
let headerInner = document.querySelector('.header__inner');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    menu.classList.toggle('open');

    if (menu.classList.contains('open')) {
        headerInner.style.height = '+200px';
        menu.style.display = 'flex'; // добавляем правило display: block
    } else {
        headerInner.style.height = '64px';
        menu.style.display = 'none'; // скрываем меню
    }
});

// выбираем нужные элементы
const menuToggleScroll = document.querySelector('.menu-toggle');
const menuScroll = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a[href^="#"]');

// обработчик клика на ссылке в меню
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // отменяем стандартное поведение ссылки
        const targetId = link.getAttribute('href'); // получаем id целевого элемента
        const targetElement = document.querySelector(targetId); // получаем целевой элемент

        // скрываем меню и удаляем класс 'open' после клика
        menuToggleScroll.classList.remove('open');
        menuScroll.classList.remove('open');
        headerInner.style.height = '64px';
        menu.style.display = 'none';

        // плавно скроллим до целевого элемента
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const languageButtons = document.querySelectorAll(".language");

languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        languageButtons.forEach((button) => {
            button.classList.toggle('active', button === event.target);
        });

        const lang = event.target.dataset.lang;
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    loadTranslations(lang, function(translations) {
        elements.forEach(function(element) {
            const key = element.dataset.translate;
            element.style.opacity = 0;
            setTimeout(() => {
                element.textContent = translations[key];
                element.style.opacity = 1;
            }, 500);
        });
    });
}

function loadTranslations(lang, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './assets/lang.json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            const translations = JSON.parse(xhr.responseText);
            const langTranslations = translations[lang];
            callback(langTranslations);
        }
    };
    xhr.send();
}

const download = document.querySelectorAll(".download");



let swiperMain;
var swiper;
var swiper2;
var swiperDots;

let darknessStart = (activeIndex) => {

        let darkness = document.querySelectorAll(".text-slider .swiper-slide");
        let indexActive = activeIndex;
        let opacity = 1;

        darkness[indexActive].style.opacity = opacity;

        // обход массива от заданного индекса до начала
        for (let i = indexActive - 1; i >= 0; i--) {
            opacity -= 0.3;
            darkness[i].style.opacity = opacity;
        }

        opacity = 1;

        // обход массива от заданного индекса до конца
        for (let i = indexActive + 1; i < darkness.length; i++) {
            opacity -= 0.3;
            darkness[i].style.opacity = opacity;
        }

}



function initSwiper() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 1280 && !swiperMain) {
        swiperMain = new Swiper('.swiper--main', {
            simulateTouch: false,
            on: {
                slideChange: function() {

                    const activeSlideIndex = this.activeIndex;
                    const text = document.querySelector('.equipment__title');
                    const textFirst = document.querySelector('.engineering__title');
                    if (textFirst && activeSlideIndex === 1) {
                        textFirst.classList.add('animate__animated');
                    } else if (textFirst) {
                        textFirst.classList.remove('animate__animated');
                    }
                    if (text && activeSlideIndex === 2) {
                        text.classList.add('animate__animated');
                    } else if (text) {
                        text.classList.remove('animate__animated');
                    }
                }
            }
        });

        var textSlides = document.querySelectorAll('.swiper__item');

        textSlides.forEach(function (slide, index) {
            slide.addEventListener('click', function () {
                swiper.slideTo(index);
            });
        });

        let pagination = document.querySelectorAll('.swiper__dot');
        pagination.forEach(function (slide, index) {
            slide.addEventListener('click', function () {
                swiperDots.slideTo(index);
            });
        });


    } else if (screenWidth <= 1280 && swiperMain) {
        swiperMain.destroy();
        swiperMain = undefined;
    }

    if (screenWidth > 1280) {
        var swiper = new Swiper(".text-slider", {
            spaceBetween: 10,
            slidesPerView: 4,

            watchSlidesProgress: true,
            on: {
                slideChange: function () {

                    swiper2.slideTo(this.activeIndex);

                    var wrapper = this.$wrapperEl[0];
                    var activeSlide = this.slides[this.activeIndex];
                    var activeSlideOffsetLeft = activeSlide.offsetLeft;
                    let newOffset = activeSlideOffsetLeft / 2 * (-1);
                    if(newOffset < -200) {
                        newOffset = -200;
                    } else if(newOffset > 0) {
                        newOffset = 0;
                    }
                    wrapper.style.transform = "translate3d(" + newOffset + "px, 0px, 0px)";
                }
            }
        });
        var swiper2 = new Swiper(".image-slider", {
            spaceBetween: 10,

            on: {
                slideChange: function () {
                    darknessStart(this.activeIndex);
                    swiper.slideTo(this.activeIndex);
                    swiperDots.slideTo(this.activeIndex);
                }
            }
        });

        var swiperDots = new Swiper(".swiper-pagination", {
            spaceBetween: 10,
            slidesPerView: 4,
            virtualTranslate: true,
            on: {
                slideChange: function () {
                    swiper.slideTo(this.activeIndex);

                }
            }
        });
        darknessStart(0);
    } else if (screenWidth <= 1280 && screenWidth > 1024) {
        var swiper = new Swiper(".text-slider", {
            spaceBetween: 10,
            slidesPerView: 2,
            navigation: {
                nextEl: ".next-text",
                prevEl: ".prev-text",
            },
            watchSlidesProgress: true,
            on: {
                slideChange: function () {

                    swiper2.slideTo(this.activeIndex);

                    var wrapper = this.$wrapperEl[0];
                    var activeSlide = this.slides[this.activeIndex];
                    var activeSlideOffsetLeft = activeSlide.offsetLeft;
                    let newOffset = -activeSlideOffsetLeft;
                    wrapper.style.transform = "translate3d(" + newOffset + "px, 0px, 0px)";
                }
            }
        });
        var swiper2 = new Swiper(".image-slider", {
            spaceBetween: 18,
            slidesPerView: 2,
            on: {
                slideChange: function () {
                    swiper.slideTo(this.activeIndex);
                }
            }
        });
    }else if (screenWidth <= 1024 && screenWidth > 450) {
        var swiper = new Swiper(".text-slider", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".next-text",
                prevEl: ".prev-text",
            },
            watchSlidesProgress: true,
            on: {
                slideChange: function () {

                    swiper2.slideTo(this.activeIndex);

                    var wrapper = this.$wrapperEl[0];
                    var activeSlide = this.slides[this.activeIndex];
                    var activeSlideOffsetLeft = activeSlide.offsetLeft;
                    let newOffset = -activeSlideOffsetLeft;
                    wrapper.style.transform = "translate3d(" + newOffset + "px, 0px, 0px)";
                }
            }
        });
        var swiper2 = new Swiper(".image-slider", {
            spaceBetween: 10,
            on: {
                slideChange: function () {
                    swiper.slideTo(this.activeIndex);
                }
            }
        });
    }else if (screenWidth <= 450) {
        var swiper = new Swiper(".text-slider", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".next-text",
                prevEl: ".prev-text",
            },
            watchSlidesProgress: true,
            on: {
                slideChange: function () {

                    swiper2.slideTo(this.activeIndex);

                    var wrapper = this.$wrapperEl[0];
                    var activeSlide = this.slides[this.activeIndex];
                    var activeSlideOffsetLeft = activeSlide.offsetLeft;
                    let newOffset = -activeSlideOffsetLeft;
                    wrapper.style.transform = "translate3d(" + newOffset + "px, 0px, 0px)";
                }
            }
        });
        var swiper2 = new Swiper(".image-slider", {
            spaceBetween: 10,
            on: {
                slideChange: function () {
                    swiper.slideTo(this.activeIndex);
                }
            }
        });
    }



}

window.addEventListener('resize', function() {
    initSwiper();
});

initSwiper();

if(swiperMain) {
    swiperMain.on('slideChange', function () {
        let header = document.querySelector(".header");
        let headerNav = document.querySelectorAll(".header__nav .nav__link ");
        let footerNav = document.querySelector(".footer__inner");
        let activeSlide = swiperMain.activeIndex;
        footerNav.className = '';
        header.className = '';
        header.classList.add("header");
        footerNav.classList.add("footer__inner");

        if(activeSlide == 1) {
            header.classList.add("header--second");
        }else if(activeSlide == 2) {
            header.classList.add("header--third");
            footerNav.classList.add("footer--third");
        }else if(activeSlide == 3) {
            header.classList.add("header--fourth");
        };

        headerNav.forEach((el) => {
            el.classList.remove("active");
        })

        headerNav[activeSlide].classList.add("active");

        swiperDotsChangeActive(activeSlide);
    });
}


// получаем элемент swiper-wrapper
var wrapper = document.querySelector('.swiper--main .swiper-wrapper');

// подписываемся на событие скролла на элементе
wrapper.addEventListener('wheel', function(e) {
    e.preventDefault(); // отменяем стандартное поведение скролла

    // определяем направление скролла
    var direction = (e.deltaY > 0) ? 'next' : 'prev';

    // вызываем метод slideTo с нужным индексом слайда
    if (direction == 'next') {
        swiperMain.slideNext();
    } else {
        swiperMain.slidePrev();
    }
});






let swiperDotsChangeActive = (activeSlide) => {
    let dots = document.querySelectorAll('.scroll-menu .scroll-page');
    let made = document.querySelector(".company__madeContainer");

    dots.forEach((el) => {
        el.classList.remove("active");

    })

    made.style.visibility = activeSlide == 1 || activeSlide == 2 ? "hidden" : "visible";

    dots[activeSlide].classList.add("active")
};






let initNav = () => {
    let navLinks = document.querySelectorAll(".header__main .nav__link");
    let navLinksArr =  Array.from(navLinks);

    navLinks.forEach((el) => {
        el.addEventListener("click", (e) => {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            })
            e.target.classList.add("active");

            swiperMain.slideTo(navLinksArr.indexOf(e.target))
        })
    })

    let scrollMenu = document.querySelectorAll(".scroll-page");
    let scrollLinksArr =  Array.from(scrollMenu);
    scrollMenu.forEach((el) => {
        el.addEventListener("click", (e) => {

            let activeSlide = scrollLinksArr.indexOf(e.target);
            scrollMenu.forEach((link) => {
                link.classList.remove("active");
            })
            e.target.classList.add("active");

            swiperMain.slideTo(activeSlide);
        })
    })

}

initNav();


let svg1 = document.querySelector('.image-right object');
let svg2 = document.querySelector('.image-left object');

let svg1CoeffX = 0.05;
let svg1CoeffY = 0.05;
let svg2CoeffX = -0.05;
let svg2CoeffY = -0.05;

document.addEventListener('mousemove', function(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let svg1X = mouseX * svg1CoeffX;
    let svg1Y = mouseY * svg1CoeffY;
    let svg2X = mouseX * svg2CoeffX;
    let svg2Y = mouseY * svg2CoeffY;

    svg1.style.transform = 'translate(' + svg1X + 'px, ' + svg1Y + 'px)';
    svg2.style.transform = 'translate(' + svg2X + 'px, ' + svg2Y + 'px)';
});



const navLinks = document.querySelectorAll('.nav__link');
const headerSecond = document.querySelector('.header--second');
const secondLink = navLinks[1];

if (secondLink.classList.contains('active')) {
    headerSecond.style.opacity = '0.9';
}

window.addEventListener("resize", saveCurrentSlide);

function saveCurrentSlide() {
    let currentPosition = swiperMain.realIndex;
    localStorage.setItem('currentPosition', currentPosition);
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    let savedPosition = localStorage.getItem('currentPosition');
    if (savedPosition !== null) {
        swiperMain.slideTo(savedPosition);
        localStorage.clear();
    }


});


