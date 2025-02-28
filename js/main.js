$(function($){
    $('a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 200;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    $('.firstview').bgSwitcher({
        images:['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg'],
        interval: 5000,
        loop: true,
    });

    $(window).scroll(function () {
        $('.fadein').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        })
    })

    particlesJS('particles-js', {
        particles: {
            "number": {
            "value": 12,
            "density": {
                "enable": true,
                "value_area": 100
                }
            },

            "shape":{
                "type": "circle",
                "stroke": {
                    "width": 0, 
                    "color": "#ffcc00" 
                }
            },

            "color": {
                "value": "#ffffff" 
            },

            "opacity": {
                "value": 1, 
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            
            "size":{
                "value": 3,
                "random":true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "size_min": 0.1,
                    "sync": false
                }
            },

            "line_linked":{
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },

            "move":{
                "speed": 4,
                "straight": false,
                "direction": "none",
                "out_mode": "out"
            }

        },

        "retina_detect": true,
        "resize": true
    });
    

    $('.slider').slick({
        slidesToShow: 4, //slidesToShowNumに設定した値が入る
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        dots: true,
    });
});
