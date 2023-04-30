
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

download.forEach( (button)=> {
    button.addEventListener("click", () => {
        let fileUrl = "assets/downFIle.pdf"
        let link = document.createElement("a");

        link.setAttribute("href", fileUrl);
        link.setAttribute("download", "downFile.pdf");

        link.style.display = "none";

        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    });
});

if (window.innerWidth > 768) {
    let swiperMain = new Swiper(".swiper--main", {
        spaceBetween: 0,
        slidesPerView: 1,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
})};



function checkScreenWidth() {
    if (window.innerWidth < 768) {
        swiperMain.destroy();
    } else {
        swiperMain.init();
    }
}

window.addEventListener('resize', checkScreenWidth);

if (window.innerWidth > 768) {
    swiperMain.on('slideChange', function () {
        let header = document.querySelector(".header");
        let activeSlide = swiperMain.activeIndex;

        header.className = '';
        header.classList.add("header");

        if (activeSlide == 1) {
            header.classList.add("header--second");
        } else if (activeSlide == 2) {
            header.classList.add("header--third");
        } else if (activeSlide == 3) {
            header.classList.add("header--fourth");
        }
        ;

    swiperDotsChangeActive(activeSlide);
});

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
}


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
            if(newOffset < -150) {
                newOffset = -150;
            } else if(newOffset > 0) {
                newOffset = 0;
            }
            wrapper.style.transform = "translate3d(" + newOffset + "px, 0px, 0px)";
        }
    }
});
var swiper2 = new Swiper(".image-slider", {


    on: {
        slideChange: function () {
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

let swiperDotsChangeActive = (activeSlide) => {
    let dots = document.querySelectorAll('.scroll-menu .scroll-page');
    let made = document.querySelector(".company__madeContainer");

    dots.forEach((el) => {
        el.classList.remove("active");

    })

    made.style.visibility = activeSlide == 1 || activeSlide == 2 ? "hidden" : "visible";

    dots[activeSlide].classList.add("active")
};



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

let initNav = () => {
    let navLinks = document.querySelectorAll(".nav__link");
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

let darknessStart = () => {
    let darkness = document.querySelectorAll(".text-slider .swiper-slide");

    let indexActive = swiper2.activeIndex;
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

let initDarkness = () => {
    let darkness = document.querySelectorAll(".text-slider .swiper-slide");


    swiper.on('slideChange', () => {
        darknessStart();
    });

    darknessStart();
}





initDarkness();

