// 播放视频

window.addEventListener('load', function () {
    var btn = document.querySelectorAll('.play-btn');
    var show = document.querySelectorAll('.videoShow');
    var closebtn = document.querySelectorAll('.close-btn');

    var btnSound = document.querySelector('.btn');
    var audio = document.querySelector('audio');
    var flag = 1;
    //   video  

    btn[0].addEventListener('click', function () {
        show[0].style.display = 'block';
        // window.style.overflow-x: hidden;
        document.body.style.overflowX = "hidden"
        document.body.style.overflowY = "hidden"

    });
    closebtn[0].addEventListener('click', function () {
        show[0].style.display = 'none';
        document.body.style.overflowX = "auto"
        document.body.style.overflowY = "auto"
    })
    btn[1].addEventListener('click', function () {
        show[1].style.display = 'block';
    });
    closebtn[1].addEventListener('click', function () {
        show[1].style.display = 'none';
    })
    btn[2].addEventListener('click', function () {
        show[2].style.display = 'block';
    });
    closebtn[2].addEventListener('click', function () {
        show[2].style.display = 'none';
    })

    closebtn[3].addEventListener('click', function () {
        show[2].style.display = 'none';
    })

    btnSound.addEventListener('click', function () {
        //  console.log(111)
        if (flag === 1) { //节流阀控制
            audio.play();

            flag = 0;
            //  console.log(flag)
        } else {
            audio.pause();
            //  console.log(flag)
            flag = 1
        }

    })


    /* 发现更多小米妙享功能 */
    var more = document.querySelector('.btn-more');
    var morefunction = document.querySelector('.morefunction')
    var a = 0,
        b = 0;
    more.addEventListener('click', function () {
        morefunction.style.display = 'block';
        var a = Math.floor($(document).scrollTop())
        $(window).scroll(function () {
            b = Math.floor($(document).scrollTop()) - a
            console.log(b);
            if (b >= 1100) {
                b = 1100
            } else if (b <= 0) {
                b = 0
            }
            morefunction.style.top = -b + 'px'
        })



    })
    closebtn[2].addEventListener('click', function () {

        morefunction.style.display = 'none';
    })


})





// 轮播图
window.addEventListener('load', function () {

    var swiper = new Swiper('.swiper-container', {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
//  轮播图结束

//文字滑入滑出效果
$(function () {

    // 页面滚动事件
    //  var imageTop = $('.image-box').offset().top;
    $(window).scroll(function () {
        //  console.log(111);
        // console.log($(document).scrollTop());
        if ($(document).scrollTop() > 550) {
            // $('.content').fadeIn(800);
            $('.image-box .content').animate({
                bottom: 280,
            }, 1000)
        }
        //  var imageTop = $('.image-box2').offset().top;
        if ($(document).scrollTop() > 1300) {
            $('.content2').fadeIn(1000);
        }
        if ($(document).scrollTop() > 1800) {
            $('.content3').fadeIn(1000);
        }
        if ($(document).scrollTop() > 2400) {
            $('.content4').fadeIn(1000);
        }
        //  if ($(document).scrollTop() > 3500) {
        //      $('.image1-box .content ').fadeIn(1000);
        //  }
        if ($(document).scrollTop() > 6100) {
            $('.caption2').fadeIn(1000);
        }
        if ($(document).scrollTop() > 6100) {
            $('.sound').fadeIn(1000);
        }
        if ($(document).scrollTop() > 9000) {
            $('.explain1').fadeIn(1000);
        }

    })
})


$(function () {
    $('.menu').on('click', function () {
        $('.first').addClass('xuanzhuan')
        $('.second').addClass('xuanzhuan1')
        $('.third').stop().animate({
            bottom: 0
        }, 200, function () {
            $('.third').stop().fadeOut(0)
        })
        $('.box1').show()
        $('.page-container').fadeIn()
        $('body').css({
            "overflow-x": "hidden",
            "overflow-y": "hidden"
        });
    })
    $('.box1').on('click', function (e) {
        e.stopPropagation()
        $('.first').removeClass('xuanzhuan')
        $('.second').removeClass('xuanzhuan1')
        $('.third').stop().fadeIn(0, function () {
            $('.third').stop().animate({
                bottom: 18
            }, 200)
        })
        $(this).hide()
        $('.page-container').fadeOut()
        $('body').css({
            "overflow-x": "auto",
            "overflow-y": "auto"
        });
    })
})
function fnn() {
    $(this).children('div').addClass('show')
}
function fnu() {
    $(this).children('div').removeClass('show')
}
$('.page-container li').on('mouseenter', fnn)
$('.page-container li').on('mouseleave', fnu)
function move() {
    $('.page-container div').removeClass('show')
    $('.wudi').each(function (i, n) {
        if ($(document).scrollTop() >= $(n).offset().top - 1) {
            $('.page-container div').hide()
            $('.page-container div').eq(i).show()
        }
    })
}
move();
$('.page-container li').on('click', function () {
    $('.page-container div').removeClass('show')
    var juli = $('.wudi').eq($(this).index()).offset().top
    $('body,html').scrollTop(juli)

    // <-- 按钮切换 -->

    $('.first').removeClass('xuanzhuan')
    $('.second').removeClass('xuanzhuan1')
    $('.third').stop().fadeIn(0, function () {
        $('.third').stop().animate({
            bottom: 18
        }, 200)
    })
    $('.box1').hide()
    $('.page-container').fadeOut()
    $('body').css({
        "overflow-x": "auto",
        "overflow-y": "auto"
    });
})
$(window).scroll(move)


