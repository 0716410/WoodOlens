$(document).ready(function(){

    $(".ham").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });


    $('.topbtn').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 400);
    });
    
    //스크롤트리거
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });

});//end