$(function () {

  //  鼠标经过和离开下载app模块
  $('.loadApp').hover(function (e) {
    $('.app,.app::before').stop().slideToggle();
  });


  // 鼠标经过和离开购物车模块
  $('.shopping').hover(function (e) {
    $('.shoppingbox').stop().slideToggle(800);
  });


  // container导航模块中间的导航模块显示和隐藏
  // 鼠标经过'.navlist' ，里面的孩子'.nav_box' 显示
  $('.container_nav ul').on('mouseenter', '.navlist', function () {
    $(this).children('.nav_box').show();
  });


  // 鼠标离开'.navlist' ，里面的孩子'.nav_box' 隐藏
  $('.container_nav ul').on('mouseleave', '.navlist', function () {
    $(this).children('.nav_box').hide();
  });


  // container导航模块最右面的搜索模块js代码
  $('.search input').on(
    {
      'focus': function () {
        $('.search_message').fadeIn();
        $('.search input,.search button').css('border', '1px solid #ff6700');
        $('.search button').css('border-left', '0');
      },
      'blur': function () {
        $('.search_message').fadeOut(500);
        $('.search input,.search button').css('border', '1px solid #b0b0b0');
        $('.search button').css('border-left', '0');
      }
    });


  // 搜索框信息自动变化
  {
    let timer = setInterval(function () {
      let arr = ['红米', '笔记本', '智能硬件', '路由器', '小米手环', '家电', '手机'];
      let num = Math.floor(Math.random() * arr.length);
      $('.search input').prop('placeholder', arr[num]);
    }, 3000)
  }

  // 侧边导航模块隐藏显示目录鼠标事件代码
  // 鼠标经过'.sider_item'，里面的孩子'.sider_hide' 显示
  $('.main_sidebar').on('mouseover', '.sider_item', function (e) {
    $(this).children('.sider_hide').show();
  });


  // 鼠标离开'.sider_item'，里面的孩子'.sider_hide' 隐藏
  $('.main_sidebar').on('mouseout', '.sider_item', function (e) {
    $(this).children('.sider_hide').hide();
  });


  // banner轮播图 swiper插件代码
  {
    let swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      loopAdditionalSlides: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //鼠标移入停止播放，鼠标离开  继续轮播
    swiper.el.onmouseover = function () {
      swiper.autoplay.stop();
    }
    swiper.el.onmouseleave = function () {
      swiper.autoplay.start();
    }
  }


  // 小米闪购倒计时模块
  {
    let timer2 = null;
    function times() {
      let nowTime = +new Date();
      let [h, m, s, cha] = [null, null, null, null];
      cha = parseInt(inputTime - nowTime) / 1000;
      h = parseInt(cha / 60 / 60 % 24) < 10 ? '0' + parseInt(cha / 60 / 60 % 24) : parseInt(cha / 60 / 60 % 24);
      m = parseInt(cha / 60 % 60) < 10 ? '0' + parseInt(cha / 60 % 60) : parseInt(cha / 60 % 60);
      s = parseInt(cha % 60) < 10 ? '0' + parseInt(cha % 60) : parseInt(cha % 60);
      let arr = [h, m, s];
      $('.count_down span').each(function (i, ele) {
        $(ele).html(arr[i]);
      });
      if (cha < 0) {
        clearInterval(timer2);
        alert('时间到了！')
      }
    }
    let inputTime = +new Date('2050-08-20 00:00:00');
    times();
    timer2 = setInterval(times, 1000);
  }


  // 家电模块tab栏切换
  $('.hd_jiadian .r_title').on('mouseover', 'a', function (e) {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.r_jiadian .r_goods').eq(index).stop().slideDown(600).siblings().stop().slideUp(600);
  });

  // 智能模块tab栏切换
  $('.hd_intle .r_title').on('mouseover', 'a', function (e) {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.r_intel .r_goods').eq(index).stop().show().siblings().stop().hide();
  });

  // 搭配模块tab栏切换
  $('.hd_match .r_title').on('mouseover', 'a', function (e) {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.r_match .r_goods').eq(index).stop().show().siblings().stop().hide();
  });

  // 配件模块tab栏切换
  $('.hd_parts .r_title').on('mouseover', 'a', function (e) {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.r_parts .r_goods').eq(index).stop().show().siblings().stop().hide();
  });

  // 周边模块tab栏切换
  $('.hd_round .r_title').on('mouseover', 'a', function (e) {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.r_round .r_goods').eq(index).stop().show().siblings().stop().hide();
  });


  // 左侧楼层区域电梯导航和右侧返回顶部导航条固定区域 
  {
    // 函数节流阀
    // 左侧
    let flag = true;
    // 点击导航条，页面滚动到对应区域
    $('.left_fixedbox').on('click', '.l_fixed_item', function (e) {
      flag = false;
      let index = $(this).index();
      // console.log(index);
      // 对应索引号楼层区域的top值
      let moveY = $('.floors .floor').eq(index).offset().top;
      // 该导航条添加类，兄弟移除类
      $(this).addClass('current').siblings().removeClass('current');
      // console.log(moveY);
      $('html').animate({ scrollTop: moveY }, () => flag = true);
    });

    // 页面滚动到某个区域，对应的导航条也会添加类
    $(window).on('scroll', function (e) {
      // 当页面滚动到小米秒杀模块显示电梯导航栏，反之隐藏
      displayFixedbox($('.left_fixedbox'));
      // 当页面滚动到小米秒杀模块显示回到顶部盒子，反之隐藏
      displayFixedbox($('.right_fixedbox .goTop'));
      if (flag) {
        $.each($('.floors .floor'), function (i, ele) {
          let moveY = $(ele).offset().top;
          // console.log(moveY);
          if ($(document).scrollTop() >= moveY - 200) {
            $('.left_fixedbox .l_fixed_item').eq(i).addClass('current').siblings().removeClass('current');
          }
        });
      }
    });

    // 当页面滚动到小米秒杀模块显示电梯导航栏，反之隐藏
    function displayFixedbox(ele) {
      if ($(document).scrollTop() >= $('.mi_kill').offset().top) {
        ele.slideDown();
      } else {
        ele.fadeOut();
      }
    }
    // 页面加载就直接调用函数,防止刷新页面盒子不出来
    displayFixedbox($('.left_fixedbox'));
    displayFixedbox($('.right_fixedbox .goTop'));

    // 右侧固定区域 个人中心，返回顶部
    // 点击回到顶部盒子事件
    $('.right_fixedbox .goTop').on('click', function () {
      $('html').animate({ scrollTop: 0 });
    });

    // 鼠标经过及离开事件
    $('.right_fixedbox').on('mouseover', '.r_fixed_item', function (e) {
      let index = $(this).index();
      $('.r_fixed_item span').eq(index).stop().delay(500).show();
    });
    $('.right_fixedbox').on('mouseleave', '.r_fixed_item', function (e) {
      let index = $(this).index();
      // console.log($('.r_fixed_item span').eq(index));
      $('.r_fixed_item span').eq(index).fadeTo('slow', 0.8).delay(2000).hide();
    });
  }


  // 小米闪购图片滚动效果插件代码
  {
    jQuery(".picScroll-left").slide(
      {
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        vis: 4,
        easing: "swing",
        trigger: "click",
        scroll: 4,
        interTime: 4000
      }
    );
  }


  // 图片懒加载插件代码
  {
    function Limg() {
      let viewHeight = document.documentElement.clientHeight // 可视区域的高度
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let limg = document.querySelectorAll("img[data-src]")
      // Array.prototype.forEach.call()是一种快速的方法访问forEach，并将空数组的this换成想要遍历的list
      Array.prototype.forEach.call(limg, function (item, index) {
        let rect;
        if (item.getAttribute("data-src") === "")
          return
        //getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
        rect = item.getBoundingClientRect()
        // 图片一进入可视区，动态加载
        if (rect.bottom >= 0 && rect.top < viewHeight) {
          ; (function () {
            let img = new Image()
            img.src = item.getAttribute("data-src")
            item.src = img.src;
            //给图片添加过渡效果，让图片显示
            // let j = 0
            // setInterval(function () {
            //   j += 0.2
            //   if (j <= 1) {
            //     item.style.opacity = j
            //     return
            //   }
            // }, 100)
            item.style.opacity = 1;
            item.removeAttribute('data-src');
          })();
        }
      })
    }
  }

  // 图片懒加载函数，当进入页面，刷新页面和滚动页面时都要执行
  Limg();

  window.addEventListener('load', function () {
    let img = document.querySelectorAll("img[data-src]")
    for (let i = 0; i < img.length; i++) {
      img[i].style.opacity = "0";
    }
    Limg();
  });

  window.addEventListener('scroll', function () {
    Limg();
  });

  // 登录注册协议声明显示隐藏事件
  {
    // 点击登录链接以及注册链接弹出协议声明模块
    $('.login_btn').on('click', function () {
      $('.agreement_statement_box').show();
    });

    // 点击登录关闭按钮以及不同意按钮隐藏协议声明模块
    $('.option .not_consent,.close_ag').on('click', function () {
      $('.agreement_statement_box').hide();
    });

  }
})



