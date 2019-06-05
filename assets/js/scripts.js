

(function() {

  var body = document.querySelector('body')
  var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
  var menuContainer = document.querySelector('#main-menu-mobile');
  var social =

  menuTrigger.onclick = function() {
      menuContainer.classList.toggle('open');
      menuTrigger.classList.toggle('is-active')
      body.classList.toggle('lock-scroll')
  }

  $('.carousel').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $('.about-carousel').slick({
    dots: true,
    arrows: true,
    fade: true,
    prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>'
  });

})();
