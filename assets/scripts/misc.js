$(document).ready(function() {
    
	// MOBILE MENU
    $('.menu, .overlay').click(function () {
        $('.menu').toggleClass('active');
        if ($('.menu').hasClass('active')) {
            $('header .nav').show();
            $('header').addClass('menu-active');
            $('html, body').animate({ scrollTop: '0px' }, 0);

            $("body").css({ left: '-320px' });
            $("header .nav").css({ right: '-320px' });

            $('.header-gap').addClass('none');
            $('.overlay').fadeIn();
        }
        else {
            $('header .nav').hide();
            $('header').removeClass('menu-active');

            $("body").css({ left: '0px' });
            $("header .nav").css({ right: '0px' });

            $('.header-gap').removeClass('none');
            $('.overlay').fadeOut();
        }
    });
    
    new WOW().init();
    $(window).resize();
    setTimeout(function(){ $(window).resize(); }, 3000);
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100)
    {
        $('header').addClass('active');
    }
    else
    {
        $('header').removeClass('active');
    }
});

$(window).resize(function() {
    if($(window).width() <= 991) $('header .nav').height( $('body').outerHeight() );
        else $('header .nav').css('height','auto');
    
    var block_height = 0;
    $(".serviceblocks .block").each(function() {
        if($(this).height() > block_height) block_height = $(this).height();
    });
    $('.serviceblocks .block').height(block_height);
});