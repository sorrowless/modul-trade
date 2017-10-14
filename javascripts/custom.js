


$(document).ready(function () {
    var win_w = $('.body-wrap').width();


    $('.lang__item').click(function(){
      $('.lang__item').removeClass('active');
      $(this).addClass('active');
      $('.lang__wrap').toggleClass('open');

      return false;
    });
    $('.lang').click(function(){
      $('.lang__wrap').toggleClass('open');
    });

    var min_h_content = $(window).height() - $('.header').height() - $('.footer').height();
    $('.content').css('min-height', min_h_content);

    $('.supporters__slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-arrow slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-arrow slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
      // appendArrows: $('.simple_slider__nav_arr'),
      arrows: true,
      // fade: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1365,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1099,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 909,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 712,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $(document).click(function(event) {
     
      if (!$(event.target).closest(".lang").length){
        $('.lang__wrap').removeClass('open');
      }
    });
    $(window).resize(function(){
      min_h_content = $(window).height() - $('.header').height() - $('.footer').height();
      $('.content').css('min-height', min_h_content);

    });


  }
);