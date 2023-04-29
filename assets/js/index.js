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


let swiperMain = new Swiper(".swiper--main", {
    spaceBetween: 0,
    slidesPerView: 1,

});


swiperMain.on('slideChange', function () {
    let header = document.querySelector(".header");
    let activeSlide = swiperMain.activeIndex;

    header.className = '';
    header.classList.add("header");

    if(activeSlide == 1) {
        header.classList.add("header--second");
    }else if(activeSlide == 2) {
        header.classList.add("header--third");
    }else if(activeSlide == 3) {
        header.classList.add("header--fourth");
    };

});

let swiper = new Swiper(".swiper", {
    spaceBetween: 10,
    slidesPerView: 9,
    freeMode: true,
    loop: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
let swiper2 = new Swiper(".swiper-text", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper,
    },
});



let initNav = () => {
    let navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach((el) => {
        el.addEventListener("click", (e) => {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            })
            e.target.classList.add("active");

            let navLinksArr =  Array.from(navLinks);
            swiperMain.slideTo(navLinksArr.indexOf(e.target))
        })
    })

    let scrollMenu = document.querySelectorAll(".scroll-page");

    scrollMenu.forEach((el) => {
        el.addEventListener("click", (e) => {
            let navLinksArr =  Array.from(scrollMenu);
            swiperMain.slideTo(navLinksArr.indexOf(e.target))
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

let initDarkness = () => {
    let darkness = document.querySelectorAll(".text-slider .swiper-slide");

    swiper1.on('slideChange', () => {
        let indexActive = swiper2.activeIndex;
        let opacity = 1;

        darkness[indexActive].style.opacity = opacity;

        // обход массива от заданного индекса до начала
        for (let i = indexActive - 1; i >= 0; i--) {
            opacity -= 0.3;
            darkness[i].style.opacity = opacity;
        }

        // обход массива от заданного индекса до конца
        for (let i = indexActive + 1; i < darkness.length; i++) {
            opacity -= 0.3;
            darkness[i].style.opacity = opacity;
        }
    });
}



initDarkness();




