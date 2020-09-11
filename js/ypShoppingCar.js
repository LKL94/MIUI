$(function () {
  //mycount下拉菜单
  $(".mycount_box").hover(function () {
    $(this).find(".mycount_item").stop().slideToggle().css("display", "flex");
  });

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
});
//购物车
window.addEventListener("load", function () {
  // 封装购物车按钮全选和分选按钮功能;
  chooseGoods();
  function chooseGoods() {
    var allBtn = document.querySelectorAll(".checkall");
    var jBtn = document.querySelectorAll(".j-checkbox");
    allBtn.forEach(function (val, i) {
      val.addEventListener("change", function () {
        jBtn.forEach(
          function (val, i) {
            val.checked = this.checked;
          }.bind(this)
        );
        allBtn.forEach(
          function (val, i) {
            val.checked = this.checked;
          }.bind(this)
        );
        //调用计算 总价和总数量的函数
        getPrice();
        getNum.bind(this)();
      });
    });
    var num = 0;
    jBtn.forEach(function (val, i) {
      val.addEventListener("change", function () {
        console.log();
        if ($(".j-checkbox:checked").length === jBtn.length) {
          allBtn.forEach(function (val) {
            val.checked = true;
          });
        } else {
          allBtn.forEach(function (val) {
            val.checked = false;
          });
        }
        //调用计算 总价和总数量的函数
        getPrice();
        getNum.bind(this)();
      });
    });
  }

  //购物车删除功能
  delGood();
  function delGood() {
    var del = document.querySelectorAll(".p-action");
    var allCart = document.querySelector(".cart-item-list");
    del.forEach(function (val, i) {
      val.addEventListener("click", function () {
        allCart.removeChild(this.parentNode);
        // 删除后判断购物车里面有没有内容，没有商品时取消全选按钮
        if (allCart.children.length === 0) {
          allBtn.forEach(function (val, i) {
            val.checked = false;
          });
        }
        //调用计算 总价和总数量的函数
        getPrice();
        getNum.bind(this)();
        // 购物车中数字
        getGoodNum();
      });
    });
  }
  //加减商品功能
  // 点加号或减号或则直接更改数量 金额跟随变化
  // 封装一个计算单个商品总额的函数
  // 当手动改数量和enter数量的时候重新计算
  changeNum();
  function changeNum() {
    var plus = document.querySelectorAll(".increment");
    var dec = document.querySelectorAll(".decrement");
    var itxts = document.querySelectorAll(".itxt");
    plus.forEach(function (val) {
      val.onclick = function () {
        var num = this.previousElementSibling.value;
        num++;
        num = num <= 1 ? 1 : num;
        this.previousElementSibling.value = num;
        var pSum = this.parentNode.parentNode.nextElementSibling;
        var pPrice = this.parentNode.parentNode.previousElementSibling.innerHTML.substr(
          1
        );
        pSum.innerHTML = "&yen; " + (pPrice * num).toFixed(2);
        //调用计算 总价和总数量的函数
        getPrice();
        getNum.bind(this)();
      };
    });
    dec.forEach(function (val) {
      val.onclick = function () {
        var num = this.nextElementSibling.value;
        num--;
        num = num <= 1 ? 1 : num;
        this.nextElementSibling.value = num;
        var pSum = this.parentNode.parentNode.nextElementSibling;
        var pPrice = this.parentNode.parentNode.previousElementSibling.innerHTML.substr(
          1
        );
        pSum.innerHTML = "&yen; " + (pPrice * num).toFixed(2);
        //调用计算 总价和总数量的函数
        getPrice();
        getNum();
      };
    });
    itxts.forEach(function (val) {
      val.addEventListener("blur", blurPrice);
      val.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
          this.blur();
        }
      });
    });
    function blurPrice() {
      //调用计算 总价和总数量的函数
      var num = this.value;
      var pSum = this.parentNode.parentNode.nextElementSibling;
      var pPrice = this.parentNode.parentNode.previousElementSibling.innerHTML.substr(
        1
      );
      pSum.innerHTML = "&yen; " + (pPrice * num).toFixed(2);

      getPrice();
      getNum();
    }
  }
  //获取总件数函数
  getNum();

  function getNum() {
    var itxt = document.querySelectorAll(".itxt");
    var amountSum = document.querySelector(".amount-sum em");
    var num = 0;
    itxt.forEach(function (val) {
      var flag =
        val.parentNode.parentNode.parentNode.children[0].children[0].checked;
      if (flag) {
        num += parseInt(val.value);
      }
    });
    amountSum.innerHTML = num;
  }

  //获取总价的函数
  getPrice();
  function getPrice() {
    var sum = [...document.querySelectorAll(".p-sum")];
    var priceSum = document.querySelector(".price-sum em");
    var cutNum = document.querySelector(".cut-number");
    var totalPrice = document.querySelector(".total-number");
    var btnArea = document.querySelector("#btnArea");
    var cut = 100;
    var total = 0;
    sum.forEach(function (val) {
      //只有当前面选择该商品时才计入总价
      if (val.parentNode.children[0].children[0].checked) {
        total += parseInt(val.innerHTML.substr(1));
      }
    });

    if (total == 0) {
      totalPrice.parentNode.style.display = "none";
      totalPrice.parentNode.previousElementSibling.style.lineHeight = "60px";
      btnArea.style.backgroundColor = "#e7e7e7";
      btnArea.style.cursor = "not-allowed";
      ///////
      ////
    } else {
      totalPrice.parentNode.style.display = "block";
      totalPrice.parentNode.previousElementSibling.style.lineHeight = "30px";
      btnArea.style.backgroundColor = "#bc0000";
      btnArea.style.cursor = "pointer";
      // btnArea.className = "btn-area";
    }
    cutNum.innerHTML = "&yen;" + (total > 150 ? cut : 0).toFixed(2);
    totalPrice.innerHTML = "&yen;" + total.toFixed(2);
    priceSum.innerHTML =
      "&yen;" + (total > 150 ? total - cut : total).toFixed(2);
  }

  //底部推荐商品添加模块
  //1.鼠标经过商品时 显示添加购物车按钮
  var lis = document.querySelectorAll(".yp_skill_bd li");
  lis.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      this.children[4].style.display = "block";
    });
    val.addEventListener("mouseleave", function () {
      this.children[4].style.display = "none";
    });
  });
  // 当点击添加按钮的时候 把商品信息添加至购物车 弹出添加成功对话框 3s后隐藏
  var addBtns = document.querySelectorAll(".add-car");
  addBtns.forEach(function (val) {
    val.addEventListener("click", function () {
      // 点击添加按钮，弹出成功对话框，1.5s后消失
      this.parentNode.children[0].style.display = "block";
      setTimeout(
        function () {
          this.parentNode.children[0].style.display = "none";
        }.bind(this),
        1500
      );
      //获取当前商品信息 1.图片地址proSrc  商品信息proName 商品价格proPrice
      var proSrc = this.parentNode.children[1].src;
      var proName = this.parentNode.children[2].innerHTML;
      var proPrice = parseInt(
        this.parentNode.children[3].children[0].innerHTML.substr(1)
      ).toFixed(2);
      // 调用添加商品至购物车的函数
      addGood(proSrc, proName, proPrice);
    });
  });

  //封装一个追加商品信息至购物车函数
  function addGood(proSrc, proName, proPrice) {
    var carList = document.querySelector(".cart-item-list");
    var div = document.createElement("div");
    div.className = "cart-item check-cart-item";
    div.setAttribute("data-index", 1);
    div.innerHTML = `  <div class="p-checkbox">
<input type="checkbox"  checked  name="" id="" class="j-checkbox">
</div>
<div class="p-goods">
<div class="p-img">
  <img src="${proSrc}" alt="">
</div>
<div class="p-msg">
${proName}
</div>
</div>
<div class="p-price">&yen; ${proPrice}</div>
<div class="p-num">
<div class="quantity-form">
  <a href="javascript:;" class="decrement">-</a>
  <input type="text" class="itxt" value="1">
  <a href="javascript:;" class="increment">+</a>
</div>
</div>
<div class="p-sum">&yen; ${proPrice}</div>
<div class="p-action"><a href="javascript:;">×</a></div>`;
    carList.appendChild(div);
    //调用函数 追加按钮选择功能  加 减商品功能
    chooseGoods();
    // 追加删除功能
    delGood();
    //加减商品
    changeNum();
    // 购物车中数字
    getGoodNum();
    //获取总价的函数
    getPrice();
    //获取总件数函数
    getNum();
  }

  //计算购物车中商品数量
  function getGoodNum() {
    var goodNum = document.querySelector(".good-num");
    var carList = document.querySelector(".cart-item-list");
    let num = carList.children.length;
    goodNum.innerHTML = num;
  }
  getGoodNum();
});
