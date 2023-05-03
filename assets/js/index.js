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

const menuToggleScroll = document.querySelector('.menu-toggle');
const menuScroll = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a[href^="#"]');

// обработчик клика на ссылке в меню
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // отменяем стандартное поведение ссылки
        const targetId = link.getAttribute('href'); // получаем id целевого элемента
        const targetElement = document.querySelector(targetId); // получаем целевой элемент

// вычисляем смещение относительно верхней части страницы
        const offset = 140; // задаем необходимый отступ
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetTop = rect.top + scrollTop - offset;

// скрываем меню и удаляем класс 'open' после клика
        menuToggleScroll.classList.remove('open');
        menuScroll.classList.remove('open');
        headerInner.style.height = '64px';
        menu.style.display = 'none';

// плавно скроллим до целевого элемента с учетом отступа
        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});

const translations = {
    "ru": {
        "company": "Компания",
        "engineering": "Инжиниринг",
        "equipment": "Оборудование",
        "contacts": "Контакты",
        "company__title": "Ваш успех - наша миссия!",
        "company__prop-title-1": "Мы - производитель",
        "company__prop-title-2": "Инжиниринг",
        "company__prop-title-3": "Сервисное обслуживание",
        "company__prop-subtitle-1": "высокотехнологичного и качественного оборудования для горной, химической, пищевой промышленности и коммунального хозяйства.",
        "company__prop-subtitle-2": "объектов под ключ, техническое перевооружение и модернизация производятся нашими технологами на основании научных знаний, расчётов и проектирования процессов.",
        "company__prop-subtitle-3": "оборудования осуществляется профессионалами нашей компании с большим опытом работы в самых нестандартных ситуациях.",
        "company__description": "“Наша компания - глобальное, опытное и технологичное звено на рынке горно-шахтного оборудования для обогатительных фабрик. У нас работают  высококвалифицированные специалисты с многолетним опытом в сфере переработки полезных ископаемых, а также мы гордимся сотрудничеством с международными институтами нашего дела. Мы не стоим на месте, мы находимся в режиме постоянного развития, улучшения и совершенствования. Наша цель - надежно и оперативно обеспечивать наших клиентов оборудованием для успешного производства их продукции!”",
        "leader__name": "Титов Виталий",
        "leader__subtitle": "Директор",
        "company__year": "Технология и механика © 2023",
        "engineering__title": "ИНЖИНИРИНГ",
        "company__title-engineering": "Применение инновационных техник и оборудования в процессах обогащения полезных ископаемых позволяет достигать потрясающих результатов!",
        "engineering__description-1": "Главное в этом деле - это правильно подобрать оборудование и провести точный расчет для получения высококачественного концентрата. Но не переживайте, наши технологи прекрасно знают свое дело! Они имеют колоссальный опыт в обогащении углей разных марок, который подкреплен международным опытом и практикой работы на обогатительных фабриках на протяжении 10 лет.",
        "engineering__description-2": "Кроме того, наша компания готова предложить численные решения и техническую экспертизу, чтобы обеспечить максимальную эффективность и надежность в технологических процессах. Автоматизация процессов также является нашей сильной стороной, что позволяет нам обеспечить более точный контроль и высокую точность в работе. В целом, мы прекрасно знаем, как создать идеальную систему обогащения полезных ископаемых для наших партнеров.",
        "equipment__title": "ОБОРУДОВАНИЕ",
        "equipment__description-1": "В настоящее время мы открыты для сотрудничества с теми, кто ищет самые надежные и эффективные технологические решения для обогащения полезных ископаемых. У нас есть масса высококачественного оборудования для различных технологических процессов, включая такие сложные и точные методы, как классификация и флотация.",
        "equipment__description-2": "Наши мощности находятся по всей России, и мы можем предложить собственное производство, а также оборудование от наших партнеров из Китая и Индии. Конечно, мы сделали все возможное, чтобы обеспечить надежность и эффективность нашего оборудования, и мы рады поделиться этим с нашими партнерами. Будьте уверены, что у нас есть все, что нужно для того, чтобы помочь вам в решении любых технологических задач!",
        "equipment__link__title": "Презентация основного оборудования:",
        "download": "СКАЧАТЬ",
        "swiper__item-1": "ГРОХОТЫ",
        "swiper__item-2": "ФЛОТОМАШИНЫ",
        "swiper__item-3": "ДРОБИЛКИ",
        "swiper__item-4": "ЦЕНТРИФУГИ",
        "social__address": "630051, Российская Федерация, Новосибирск, ул. Ползунова, 3В, офис 201",
        "": ""
    },
    "en": {
        "company": "COMPANY",
        "engineering": "ENGINEERING",
        "equipment": "EQUIPMENT",
        "contacts": "CONTACTS",
        "company__title": "Our mission is your success!",
        "company__prop-title-1": "We manufacture",
        "company__prop-title-2": "Engineering",
        "company__prop-title-3": "After-sales service",
        "company__prop-subtitle-1": "high-tech and high-quality equipment for mining, chemical, and food industries, as well as for public utilities.",
        "company__prop-subtitle-2": "solutions, technical upgrade and modernisation – our process engineers use advanced scientific knowledge, calculations, and process design skills for all these tasks.",
        "company__prop-subtitle-3": "of our equipment is provided  by our experts that have extensive experience even in the most unconventional scenarios.",
        "company__description": "“Our company is a global, experienced, and advanced member in the market of mining equipment for processing plants. Our experts have many years of experience in mineral processing. We are also proud to cooperate with global organisations in the industry. We keep moving forward and strive for constant development and improvement. Our goal is to provide our partners with process equipment in a  prompt and reliable manner so that they can achieve greater success!”",
        "leader__name": "Vitaliy Titov",
        "leader__subtitle": "Director",
        "company__year": "Process and Mechanic © 2023",
        "engineering__title": "ENGINEERING",
        "company__title-engineering": "Innovative methods and equipment for mineral processing bring outstanding results!",
        "engineering__description-1": "The key steps are to select proper equipment and make accurate calculations to achieve high-quality concentrate. That is where our process engineers come into play. They have extensive expertise in processing and refinement of various grades of coal, which is further reinforced by 10 years of global practical experience in refinement plants.",
        "engineering__description-2": "In addition, our company can provide calculation and technical review services to maximise process efficiency and reliability. Process automation is another area of our expertise, which enables more precise operation control and a high level of accuracy. Overall, we know perfectly well how to create a perfect mineral processing system for our partners.",
        "equipment__title": "EQUIPMENT",
        "equipment__description-1": "We are currently looking for new partnerships with those interested in the most effective and reliable technological solutions for mineral processing. We offer a wide variety of high-quality equipment for different processes, including such complex and precise ones as elutriation and flotation.",
        "equipment__description-2": "Our production facilities are located all over Russia. We can provide in-house solutions, as well as equipment from our partners in India and China. We have made every effort to ensure that our equipment is reliable and effective, and we are happy to share it with our partners. Rest assured: we are ready to assist you with any process issues you may have.",
        "equipment__link__title": "Main Equipment Presentation:",
        "download": "DOWNLOAD",
        "swiper__item-1": "SCREENS",
        "swiper__item-2": "FLOTATION MACHINES",
        "swiper__item-3": "CRUSHERS",
        "swiper__item-4": "CENTRIFUGES",
        "social__address": "3V, Polzunova St, Office 201, Novosibirsk, 630051 Russian Federation",
        "": ""
    }
};

// const languageButtons = document.querySelectorAll(".language");
// languageButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         languageButtons.forEach((button) => {
//             button.classList.toggle('active', button === event.target);
//         });
//
//         const lang = event.target.dataset.lang;
//         switchLanguage(lang);
//     });
// });
//
// // Функция, которая переводит элементы с атрибутом data-translate
// function translatePage(language) {
//     // Находим все элементы на странице с атрибутом data-translate
//     const elementsToTranslate = document.querySelectorAll('[data-translate]');
//     // Проходимся по каждому элементу и заменяем его текст на соответствующий перевод
//     elementsToTranslate.forEach(element => {
//         const width = element.offsetWidth;
//         const height = element.offsetHeight;
//         element.style.maxWidth = width;
//         element.style.maxHeight = height;
//         element.style.opacity = 0;
//         const translationKey = element.dataset.translate;
//         const translation = translations[language][translationKey];
//         setTimeout(() => {
//
//             element.textContent = translation;
//             element.style.opacity = 1;
//             }, 500);
//
//     });
// }

// Пример вызова функции для перевода страницы на русский язык


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
    loadTranslations(lang, function (translations) {
        elements.forEach(function (element) {
            const height = element.offsetHeight;
            const width = element.offsetWidth;
            const key = element.dataset.translate;
            element.style.opacity = 0;
            element.style.maxWidth = width;
            element.style.maxHeight = height;
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
    xhr.onload = function () {
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
            simulateTouch: true,
            speed: 1500,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: true,
            //     waitForTransition: true,
            // },
            on: {
                slideChange: function () {

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
            width: 1100,
            watchSlidesProgress: true,
            on: {
                slideChange: function () {

                    swiper2.slideTo(this.activeIndex);

                    var wrapper = this.$wrapperEl[0];
                    var activeSlide = this.slides[this.activeIndex];
                    var activeSlideOffsetLeft = activeSlide.offsetLeft;
                    console.log(activeSlideOffsetLeft);
                    let newOffset = activeSlideOffsetLeft /  (-1);
                    // if (newOffset < -200) {
                    //     newOffset = -200;
                    // } else if (newOffset > 0) {
                    //     newOffset = 0;
                    // }
                    wrapper.style.transform = "translate3d(" + newOffset + "px, 0px, 0px)";
                }
            }
        });
        var swiper2 = new Swiper(".image-slider", {
            spaceBetween: 1,
            simulateTouch: true,
            touchRatio: 0.5,
            speed: 1000,
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
    } else if (screenWidth <= 1024 && screenWidth > 450) {
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
    } else if (screenWidth <= 450) {
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

window.addEventListener('resize', function () {
    initSwiper();
});

initSwiper();

if (swiperMain) {
    swiperMain.on('slideChange', function () {
        let header = document.querySelector(".header");
        let headerNav = document.querySelectorAll(".header__nav .nav__link ");
        let footerNav = document.querySelector(".footer__inner");
        let activeSlide = swiperMain.activeIndex;
        footerNav.className = '';
        header.className = '';
        header.classList.add("header");
        footerNav.classList.add("footer__inner");

        if (activeSlide == 1) {
            header.classList.add("header--second");
        } else if (activeSlide == 2) {
            header.classList.add("header--third");

            footerNav.classList.add("footer--third");
        } else if (activeSlide == 3) {
            header.classList.add("header--fourth");
        }
        ;

        headerNav.forEach((el) => {
            el.classList.remove("active");
        })

        headerNav[activeSlide].classList.add("active");

        swiperDotsChangeActive(activeSlide);
    });
}

//
// // получаем элемент swiper-wrapper
// var wrapper = document.querySelector('.swiper--main .swiper-wrapper');
//
// // подписываемся на событие скролла на элементе
// document.addEventListener('wheel', function (e) {
//     e.preventDefault(); // отменяем стандартное поведение скролла
//
//     // определяем направление скролла
//     var direction = (e.deltaY > 0) ? 'next' : 'prev';
//
//     // вызываем метод slideTo с нужным индексом слайда
//     if (direction == 'next') {
//         swiperMain.slideNext();
//     } else {
//         swiperMain.slidePrev();
//     }
// });
//
// var touchStartX, touchStartY;
//
// document.addEventListener('touchstart', function (e) {
//     touchStartX = e.touches[0].clientX;
//     touchStartY = e.touches[0].clientY;
// });
//
// document.addEventListener('touchend', function (e) {
//     var touchEndX = e.changedTouches[0].clientX;
//     var touchEndY = e.changedTouches[0].clientY;
//     var dx = touchEndX - touchStartX;
//     var dy = touchEndY - touchStartY;
//
//     // определяем направление свайпа
//     var direction;
//     if (Math.abs(dx) > Math.abs(dy)) {
//         direction = dx > 0 ? 'prev' : 'next';
//     } else {
//         direction = dy > 0 ? 'prev' : 'next';
//     }
//
//     // вызываем метод slideTo с нужным индексом слайда
//     if (direction == 'next') {
//         swiperMain.slideNext();
//     } else {
//         swiperMain.slidePrev();
//     }
// });


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
    let navLinksArr = Array.from(navLinks);

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
    let scrollLinksArr = Array.from(scrollMenu);
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


function zoomImage() {
    let screenWidth = window.innerWidth;
    if (screenWidth <=1280) {
        return
    }
    let bg = document.querySelector('.scale');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    });
}

zoomImage();

let svg1 = document.querySelector('.image-right object');
let svg2 = document.querySelector('.image-left object');

let svg1CoeffX = 0.01;
let svg1CoeffY = 0.01;
let svg2CoeffX = -0.01;
let svg2CoeffY = -0.01;


document.addEventListener('mousemove', function (e) {
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

let params = (new URL(document.location)).searchParams;
console.log(params.get("data"));

