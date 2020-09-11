var w = $('.lunbo img').width();
var index = 0;
var n = 0;
$('.pic_right').on('click', function () {
    if (index >= 5) {
        index = 0
        $('.lunbo').css('left', -index * w)
    }
    index++;
    $('.lunbo').stop().animate({
        left: -w * index
    })
    n++
    if (n >= 5) {
        n = 0
    }
    $('.pic ol li').eq(n).addClass('color').siblings().removeClass('color')
})
$('.pic_left').on('click', function () {
    if (index <= 0) {
        index = 5
        $('.lunbo').css('left', -index * w)
    }
    index--;
    $('.lunbo').stop().animate({
        left: -w * index
    })
    n--
    if (n < 0) {
        n = 4
    }
    $('.pic ol li').eq(n).addClass('color').siblings().removeClass('color')
})
$('.pic ol li').eq(0).addClass('color')
$('.pic ol li').on('click', function () {
    n = $(this).index()
    index = n
    $(this).addClass('color').siblings().removeClass('color')
    $('.lunbo').stop().animate({
        left: -n * w
    })
})
var move = setInterval(function () {
    $('.pic_right').click()
}, 2000)
$('.pic').hover(function () {
    clearInterval(move)
}, function () {
    clearInterval(move)
    move = setInterval(function () {
        $('.pic_right').click()
    }, 2000)
})
$('.pic_left,.pic_right').hover(function () {
    $(this).css('backgroundColor', '#e4e4e4')
}, function () {
    $(this).css('backgroundColor', '')
})



var num = $('.qian').html() - 0

$('.baoxian').change(function () {
    if ($(this).prop('checked')) {
        $('.zongjia').html(4999 + num)
    } else {
        $('.zongjia').html(4999);
    }
})


$(window).scroll(function () {
    if ($(document).scrollTop() >= $('.banben').offset().top) {
        $('.top').show();
    } else {
        $('.top').hide();
    }

})
$('.top').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    })
})

$('.lj span').hover(function () {
    $('.erweima').toggle()
})