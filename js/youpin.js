//原生JS部分
//banner区域·轮播图
window.addEventListener("load", function () {
  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
  //点击登录弹出 声明与政策  框 同时背景变灰色
  var login = document.querySelector('.yp_login')
  var reg = document.querySelector('.yp_reg')
  //由于登录和注册都要调用 封装一个函数 
  login.addEventListener('click', policyShow)
  reg.addEventListener('click', policyShow)

  function policyShow() {
    var ypMask = document.querySelector('.yp_alert_mask')
    ypMask.style.display = 'block'
    // 同意不同意css模块
    var agree = document.querySelector('.agree')
    var disagree = document.querySelector('.disagree')
    agree.addEventListener('mouseenter', function () {
      this.style.opacity = '.5'
    })
    agree.addEventListener('mouseleave', function () {
      this.style.opacity = '1'
    })
    disagree.addEventListener('mouseenter', function () {
      this.setAttribute('class', 'disagree agree_active')
    })
    disagree.addEventListener('mouseleave', function () {
      this.setAttribute('class', 'disagree')
    })
    //当点击同意 跳转至登录或注册页面 ，不同意 返回本页面功能
    agree.addEventListener('click', function () {
      location.href = '../html/yp-login.html'
    })
    disagree.addEventListener('click', function () {
      location.reload()
    })

  }
  //  小米秒杀  点击左右箭头移动图片

  //秒杀倒计时模块
  var countDown = document.querySelector(".countDown ");
  // 计算倒计时函数
  countTime();
  setInterval(countTime, 1000);

  function countTime() {
    var now = +new Date();
    var stop = +new Date("2020-10-23 00:00");
    var sec = (stop - now) / 1000;
    if (sec < 0) {
      return false;
    }
    var d = parseInt(sec / 60 / 60 / 24);
    d = d > 10 ? d : "0" + d;
    var h = parseInt((sec / 60 / 60) % 24);
    h = h > 10 ? h : "0" + h;
    var m = parseInt((sec / 60) % 60);
    m = m > 10 ? m : "0" + m;
    var s = parseInt(sec % 60);
    s = s > 10 ? s : "0" + s;
    countDown.children[0].innerHTML = d;
    countDown.children[1].innerHTML = h;
    countDown.children[2].innerHTML = m;
    countDown.children[3].innerHTML = s;
  }
});
//引入jq部分
$(function () {
  //资质证照 / 协议规则下拉菜单部分
  $(".lt_side_nav").on("mouseenter", ".yp_tab_list", function () {
    $(this).find(".yp_tab_item").show();
  });
  $(".lt_side_nav").on("mouseleave", ".yp_tab_list", function () {
    $(this).find(".yp_tab_item").hide();
  });

  $(".protocol").hover(function () {
    $(".protocol_list").stop().slideToggle();
  });
  //鼠标移入轮播图  停止播放 移开 自动轮播

  //右侧固定导航栏 yp_fixed_inner1 部分 鼠标经过显示板块
  $(".yp_fixed_bar").on("mouseenter", "li", function () {
    $(this).find(".yp_fixed_inner1").stop().fadeIn();
    $(this).siblings().find(".yp_fixed_inner1").stop().fadeOut();
  });
  $(".yp_fixed_bar").on("mouseleave", "li", function () {
    $(this).find(".yp_fixed_inner1").stop().hide();
  });
  //右侧固定导航栏 点击 返回顶部
  //当页面滚动到 有品秒杀的时候 goTop模块显示
  $(window).on("scroll", function (e) {
    if ($(document).scrollTop() >= $(".yp_skill_hd").offset().top) {
      $(".goTop").stop().fadeIn();
      $(".yp_fixed_bar ul li:nth-child(4)").css(
        "border-bottom",
        "1px solid #ccc"
      );
    } else {
      $(".goTop").stop().fadeOut();
      $(".yp_fixed_bar ul li:nth-child(4)").css("border-bottom", "none");
    }
  });
  $(".goTop").on("click", function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });
});