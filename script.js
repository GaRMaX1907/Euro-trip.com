// блоки
let links = document.querySelectorAll('.scroll');
let targetID; //переменная, в которую запишем id целевого элемента
links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault(); //отключить стандартное поведение
        targetID = element.getAttribute('href'); //получить id целевого элемента из атрибута href ссылки
        document.querySelector(targetID).scrollIntoView({ //метод для управления прокруткой
            behavior: 'smooth', //анимация прокрутки auto - резко, smooth - плавно
            block: 'start' //вертикальное выравнивание
        })
    })
})

// карусель
$(document).ready(function(){
    $('.slider').bxSlider({
      slideWidth: 200,
      minSlides: 1,
      maxSlides: 3,
      slideMargin: 10
    });
  });

// бургер-меню
let condition = true;
let start = 0;
let end = 0;
  
function forward() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false;
}
  
function backward() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}
  
$('.menu_small_icon').click(function() {
    if (condition) {
        forward();
    }
    else {
        backward();
    }
});
  
$('.container').on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
})
$('.container').on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    }
    else if (start - end >= 100 && !condition) {
        backward();
    }
})

