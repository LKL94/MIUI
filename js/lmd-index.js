window.addEventListener('load', function() {
    // 轮播图插件
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 轮播图自动轮播
    var sbtn = document.querySelector('.swiper-button-next');
    var timer = setInterval(function() {
        sbtn.click();
    }, 3000);
    $('.main').hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            sbtn.click();
        }, 3000);
    })

    // 平台区无缝滚动
    $('.logo-col').each(function() {
        var lis = $(this).children().clone();
        $(this).append(lis);
    })

    // 播放视频
    var vbtn = document.querySelector('.video-button');
    var vshow = document.querySelector('.video-show');
    var clobtn = document.querySelector('.close-btn');
    var vpause = document.querySelector('video')
    vbtn.addEventListener('click', function() {
        vshow.style.display = 'block';
        zymedia('video', {
            autoplay: true
        })
    });
    clobtn.addEventListener('click', function() {
        vshow.style.display = 'none';
        vpause.pause();
    })

    // 鼠标经过导航栏高亮显示
    var as = document.querySelectorAll('.header-items a');
    var lis = document.querySelectorAll('.header-items li');
    for (var j = 0; j < lis.length; j++) {
        lis[j].onmouseenter = function() {
            for (var i = 0; i < as.length; i++) {
                as[i].className = '';
            }
            this.children[0].className = 'current';
        }
        lis[j].onmouseleave = function() {
            this.children[0].className = '';
            as[0].className = 'current';
        }
    }
    //返回顶部
    var ptop = $('.process').offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() >= ptop) {
            $('.goback').stop().fadeIn();
        } else {
            $('.goback').stop().fadeOut();
        }
    });
    $('.goback').on('click', function() {
        $('html,body').stop().animate({
            scrollTop: 0
        })
    })

})