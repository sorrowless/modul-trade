


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