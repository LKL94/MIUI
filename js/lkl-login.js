window.addEventListener('load', function () {

  // 获取元素
  let login1 = document.querySelector('.login1'),
    login2 = document.querySelector('.login2'),
    idLogin = document.querySelector('.id_login'),
    QRCode = document.querySelector('.QR_code'),
    btn = document.querySelector('.btn'),
    text = document.querySelector('.text'),
    password = document.querySelector('.password'),
    trip = document.querySelector('.trip'),
    node = document.querySelector('.short_node'),
    regsiter2 = document.querySelector('.regsiter2'),
    one = document.querySelector('.one'),
    two = document.querySelector('.two');
  // 用户名登录点击事件
  login1.addEventListener('click', function () {
    this.classList.add('current');
    login2.classList.remove('current');
    idLogin.style.display = 'block';
    QRCode.style.display = 'none';
  });

  // 扫码登录点击事件
  login2.addEventListener('click', function () {
    this.classList.add('current');
    login1.classList.remove('current');
    idLogin.style.display = 'none';
    QRCode.style.display = 'block';
  });

  //登录按钮点击事件
  btn.addEventListener('click', function (e) {
    // 如果value值是'登录'根据条件判断的结果
    if (this.value === '登录') {
      if (text.value.trim() === '') {
        trip.innerHTML = '<i>!</i> 请输入账号123';
        trip.style.display = 'block';
        e.preventDefault();
      } else if (password.value.trim() === '') {
        trip.innerHTML = '<i>!</i> 请输入密码123';
        trip.style.display = 'block';
        e.preventDefault();
      } else if (text.value.trim() !== '123') {
        trip.innerHTML = '<i>!</i> 用户名错误';
        trip.style.display = 'block';
        e.preventDefault();
      } else if (password.value.trim() !== '123') {
        trip.innerHTML = '<i>!</i> 密码错误';
        trip.style.display = 'block';
        e.preventDefault();
      } else {
        trip.style.display = 'none';
        location.href = '../index.html';
      }
      // 如果value值是'立即登录/注册'根据条件判断的结果
    } else if (this.value === '立即登录/注册') {
      trip.innerHTML = '<i>!</i> 手机号码错误';
      trip.style.display = 'block';
      e.preventDefault();
    }
  });

  // 点击切换手机号码登录还是用户名登录
  node.addEventListener('click', function () {
    if (this.innerHTML === '手机短信登录/注册') {
      btn.value = '立即登录/注册';
      this.innerHTML = '用户名登录';
      regsiter2.innerHTML = `<a href="javascript:;">收不到验证码？</a>`;
      two.style.display = 'block';
      one.style.display = 'none';
      trip.style.display = 'none';
    } else {
      btn.value = '登录';
      this.innerHTML = '手机短信登录/注册';
      regsiter2.innerHTML = ` <a href="lkl-zhuCe.html" target="_blank">立即注册</a> <em>|</em>
      <a href="javascript:;">忘记密码？</a>`;
      two.style.display = 'none';
      one.style.display = 'block';
      trip.style.display = 'none';
    }
  });
})