window.addEventListener('load', function () {
  // 获取大盒子
  let box = document.querySelector('.shopping_box');

  // 获得商品总数量和已选择的商品数量以及购物车选中商品的价钱之和
  function getNumAndSumPrice() {
    // 获取动态元素
    let span1 = document.querySelector('.number1'), // 购物车商品总数量
      span2 = document.querySelector('.number2'), // 购物车已选择的商品总数量
      goodsBox = box.querySelectorAll('.cart_item'), // 购物车商品数目
      sumPrice = document.querySelector('.total span:first-child'), // 已选择的商品总价之和
      checkOne = box.querySelectorAll('.j-checkbox'); // 所有的商品项目中的单选框
    // upload();
    let [sum1, sum2, sum3] = [0, 0, 0];
    for (let i = 0, len = goodsBox.length; i < len; i++) {
      let num = +goodsBox[i].querySelector('.itxt').value;
      sum1 += num;
      if (checkOne[i].checked) {
        let num = +goodsBox[i].querySelector('.itxt').value;
        let price = checkOne[i].parentNode.parentNode.children[4].innerHTML;
        price = +price.substring(0, price.length - 1);
        sum2 += num;
        sum3 += price;
      }
    }
    span1.innerHTML = sum1;
    span2.innerHTML = sum2;
    sumPrice.innerHTML = sum3.toFixed(2);
  }
  getNumAndSumPrice();

  // 计算 每个商品的总价钱
  function getTotalPrice() {
    // 获取动态元素 
    let price = box.querySelectorAll('.p_price'), // 获取所有的商品单价
      totalPrice = box.querySelectorAll('.p_sum'), // 获取所有商品数量总价
      count = box.querySelectorAll('.itxt'); // 要买的商品的数量
    // upload();
    for (let i = 0, len = price.length; i < len; i++) {
      let num = count[i].value,
        str = price[i].innerHTML;
      str = +str.substring(0, str.length - 1);
      // console.log(str);
      totalPrice[i].innerHTML = `${(str * num).toFixed(2)}元`;
    }
  }
  getTotalPrice();

  // 初始化计算每个商品项的价格 数量
  function init() {
    // 获取动态元素，商品列表
    let goodsBox = box.querySelectorAll('.cart_item');
    // 全选框和单选框
    let checkAll = box.querySelector('.checkall');
    // console.log(111, goodsBox.length);
    let goPay = document.querySelector('.r_accounts').querySelector('a');
    // 循环绑定事件
    for (let i = 0, len = goodsBox.length; i < len; i++) {
      // 获取元素
      let add = goodsBox[i].querySelector('.increment'),  // 增加商品数量按钮
        sub = goodsBox[i].querySelector('.decrement'), // 减少商品数量按钮
        count = goodsBox[i].querySelector('.itxt'), // 商品数量输入框
        remove = goodsBox[i].querySelector('.p_action'),

        num = count.value; // 商品数量

      // 给全选框绑定事件
      let checkOne = box.querySelectorAll('.j-checkbox');
      checkAll.addEventListener('click', function (e) {
        checkOne.forEach(ele => ele.checked = checkAll.checked);
        getNumAndSumPrice();
        if (checkAll.checked) {
          goPay.classList.add('active');
        } else {
          goPay.classList.remove('active');
        }
      });

      // 给单选框绑定事件
      checkOne[i].addEventListener('click', function () {
        let goodsBox = box.querySelectorAll('.cart_item')
        // console.log(88, goodsBox.length, checkOne.length);
        getNumAndSumPrice();
        let flag = 0;
        let nums = 0;
        for (let i = 0; i < checkOne.length; i++) {
          if (checkOne[i].checked) {
            flag++;
            // 给去结算添加类
            goPay.classList.add('active');
            // console.log(i);
          } else if (!checkOne[i].checked) {
            nums++;
          }
        }
        // console.log(nums);
        if (nums === checkOne.length) {
          // 不符合去结算条件，没有选择商品的状态类
          goPay.classList.remove('active');
        }
        if (flag == goodsBox.length) {
          checkAll.checked = true;
        } else {
          checkAll.checked = false;

        }
      });

      // 增加商品点击事件
      let addFn = function () {
        // console.log(123);
        count.value = (count.value - 0) + 1;
        getTotalPrice();
        getNumAndSumPrice();
      }
      add.onclick = addFn

      // 减少商品点击事件
      let subFn = function () {
        // console.log(this);
        num = count.value;
        num--;
        if (num < 1) {
          num = 1;
        }
        count.value = num;
        getTotalPrice();
        getNumAndSumPrice();
      }
      sub.onclick = subFn;

      // 用户输入商品数量事件
      let countFn = function () {
        num = this.value;
        if (num < 1) {
          num = 1;
        }
        this.value = num;
        getTotalPrice();
        getNumAndSumPrice();
      }
      count.onchange = countFn;

      // 删除元素事件

      let removeFn = function () {
        // console.log(333, goodsBox.length);
        this.parentNode.remove();
        getNumAndSumPrice();
        getTotalPrice();
        init()
        // console.log(444, goodsBox.length);
      }
      remove.onclick = removeFn;
    }
  }
  init();

  // 增加商品
  function addItem() {
    // 获取元素
    let joins = document.querySelector('.ohter_goods').querySelectorAll('.join'),  // 加入购物车按钮
      joineds = document.querySelector('.ohter_goods').querySelectorAll('.joined'), // 成功加入购物车按钮
      cartList = document.querySelector('.cart_list'), // 购物车商品列表大盒子
      cartItem = cartList.children[0]; // 购物车商品列表第一项，克隆的对象

    // 循环绑定事件
    for (let i = 0, len = joins.length; i < len; i++) {
      // 获取要更改图片路径，要更改的文本
      let li = joins[i].parentNode,
        src = li.children[0].children[0].src,
        title = li.children[0].children[1].innerHTML,
        price = li.children[0].children[2].innerHTML;
      // 加入购物车点击事件
      joins[i].addEventListener('click', function () {
        // 克隆节点
        // 更改图片路径，更改文本
        let div = cartItem.cloneNode(true),
          img = div.querySelector('.p_img').children[0],
          h = div.querySelector('.p_msg'),
          count = div.querySelector('.itxt'),
          p = div.querySelector('.p_price');
        img.src = src;
        h.innerHTML = title;
        p.innerHTML = price;
        count.value = 1;
        // console.log(div);
        cartList.appendChild(div);
        getTotalPrice();
        getNumAndSumPrice();
        init();
        joineds[i].classList.add('click');
        setTimeout(function () {
          joineds[i].style.display = 'none';
        }, 1000);
      });
    }
  }
  addItem();
})