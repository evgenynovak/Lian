$(document).ready(function() {
  $('.nav__burger').on('click', function(){
    $('.nav__list').toggleClass('nav__list_burger');
    $('.nav__burger-line').toggleClass('nav__burger-line_open');
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    margin: 1,
    nav: true,
    navText : ["",""],
    responsive:{
        0:{
            items:1
        }
    }
  });

  $('.portfolio__list').masonry({
    itemSelector: '.portfolio__item',
    columnWidth: 360,
    gutter: 30,
    isResizable: true,
    isAnimated: true
  });

  $('.blog__posts').masonry({
    itemSelector: '.post',
    columnWidth: 360,
    gutter: 30,
    isResizable: true,
    isAnimated: true
  });
});