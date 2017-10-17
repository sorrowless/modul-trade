


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

    var users_amount__chart__percent = 1;
    var users_amount__chart__size = 180;
    var users_amount__chart__lineWidth = 20;
    var users_amount__chart__rotate =  0;
    var users_amount__chart__radius = (users_amount__chart__size - users_amount__chart__lineWidth) / 2;


    $('.users_amount__chart_line').each(function(){
      var users_amount__chart__percent = $(this).attr('line-width') / 100;
      var users_amount__chart__size = $(this).width();
      users_amount__chart__radius = (users_amount__chart__size - users_amount__chart__lineWidth) / 2;
      
      var canvas = document.createElement('canvas');
      canvas.width = canvas.height = users_amount__chart__size;
      var ctx = canvas.getContext('2d');
      $(this).append(canvas);
      ctx.translate(users_amount__chart__size / 2, users_amount__chart__size / 2); 
      ctx.rotate((-1 / 2) * Math.PI); 
      var drawCircle = function(color, lineWidth, percent) {
          percent = Math.min(Math.max(0, users_amount__chart__percent || 1), 1);
          ctx.beginPath();
          ctx.arc(0, 0, users_amount__chart__radius, 0, Math.PI * 2 * users_amount__chart__percent, false);
          ctx.strokeStyle = color;
          ctx.lineWidth = users_amount__chart__lineWidth;
          ctx.stroke();
      };

      drawCircle('#ffffff', users_amount__chart__lineWidth, 100 / 100);
      drawCircle('#ffaa01', users_amount__chart__lineWidth, users_amount__chart__percent / 100);
    })

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