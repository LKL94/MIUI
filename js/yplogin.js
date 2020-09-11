window.addEventListener('load', function () {
  //点击 手机短信登录 切换至手机登录界面
  // 获取手机短信登录按钮，注册点击事件
  var phLoginBtn = document.querySelector('.phone_login_btn')
  var couLoginBtn = document.querySelector('.tocount_login')
  var deLogin = document.querySelector('.default_login')
  var phLogin = document.querySelector('.phone_login')
  phLoginBtn.addEventListener('click', function () {
    deLogin.style.display = 'none'
    phLogin.style.display = 'flex'
  })
  couLoginBtn.addEventListener('click', function () {
    deLogin.style.display = 'flex'
    phLogin.style.display = 'none'
  })
  //阻止提交按钮submit的默认行为 
  // var loginBtn = document.querySelector('.login_btn')
  // loginBtn.addEventListener('click', function (e) {
  //   return false
  // })

  // 表单验证 判断用户是否正确输入账号,如没有输入则提示
  // 默认登录验证模块
  var loginBtn = document.querySelectorAll('.login_btn')
  var countInput = document.querySelector('.login_count')
  var passInput = document.querySelector('.login_pass')
  var errorAlert = document.querySelectorAll('.wrong_alert')
  var errorMessage = document.querySelectorAll('.error_message')
  loginBtn[0].addEventListener('click', function () {
    if (countInput.value.trim().length === 0) {
      errorAlert[0].style.display = ' block'
      countInput.style.borderColor = '#ff5b00'
      loginBtn[0].style.marginTop = 0
      errorMessage[0].innerHTML = '请输入账号'
      return false
    }
    if (passInput.value.trim().length === 0) {
      errorAlert[0].style.display = ' block'
      passInput.style.borderColor = '#ff5b00'
      loginBtn[0].style.marginTop = 0
      errorMessage[0].innerHTML = '请输入密码'
    }
  })
  countInput.addEventListener('keyup', deBorderToC)
  passInput.addEventListener('keyup', deBorderToC)

  function deBorderToC() {
    if (this.value.trim().length > 0) {
      this.style.borderColor = '#ccc'
      errorAlert[0].style.display = 'none'
      loginBtn[0].style.marginTop = '25px'
    }
  }

  //手机号验证板块
  var phoneNum = document.querySelector('.phone_num')
  var phoneVeri = document.querySelector('.phone_message')
  loginBtn[1].addEventListener('click', function () {
    if (phoneNum.value.trim().length === 0) {
      errorAlert[1].style.display = ' block'
      phoneNum.parentElement.style.borderColor = '#ff5b00'
      loginBtn[1].style.marginTop = 0
      errorMessage[1].innerHTML = '请输入手机号'
      return false
    } else if (phoneNum.value.trim().length !== 11) {
      errorAlert[1].style.display = ' block'
      phoneNum.parentElement.style.borderColor = '#ff5b00'
      loginBtn[1].style.marginTop = 0
      errorMessage[1].innerHTML = '手机号格式不正确'
      return false
    }
    if (phoneVeri.value.trim().length === 0) {
      errorAlert[1].style.display = ' block'
      phoneVeri.parentElement.style.borderColor = '#ff5b00'
      loginBtn[1].style.marginTop = 0
      errorMessage[1].innerHTML = '请输入密码'
    }
  })
  phoneNum.addEventListener('keyup', PhBorderToC)
  phoneVeri.addEventListener('keyup', PhBorderToC)

  function PhBorderToC() {
    if (this.value.trim().length > 0) {
      errorAlert[1].style.display = ' none'
      this.parentElement.style.borderColor = '#ccc'
      loginBtn[1].style.marginTop = '25px'
    }
  }
  //获取验证码模块 点击后 60秒倒计时 之后 按钮禁用 之后内容改为重新发送
  var veriBtn = document.querySelector('.verification')
  var timer = null
  veriBtn.addEventListener('click', reSend)

  function reSend() {
    this.disabled = true
    var index = 30
    timer = setInterval(countDown.bind(this), 1000)

    function countDown() {
      this.disabled = true
      this.style.cursor = 'auto'
      this.style.color = '#ccc'
      this.innerHTML = `重新发送(${index})`
      index--
      console.log(index);
      if (index < -1) {
        index = 0
        this.disabled = false
        this.style.cursor = 'pointer'
        this.style.color = '#008ad1'
        this.innerHTML = `重新发送`
        clearInterval(timer)
      }

    }
  }

  // 二维码登录和 账号登录切换模块
  var countLogin = document.querySelector('.yp_login')
  var codeLogin = document.querySelector('.er_login')
  var toCodeBtn = document.querySelector('.qrcode-trigger1')
  var toCountBtn = document.querySelector('.qrcode-trigger2')
  toCodeBtn.addEventListener('click', function () {
    codeLogin.style.display = 'flex'
    countLogin.style.display = 'none'
  })
  toCountBtn.addEventListener('click', function () {
    codeLogin.style.display = 'none'
    countLogin.style.display = 'flex'
  })


})