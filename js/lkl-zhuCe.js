window.addEventListener('load', function () {

  // 获取元素，分别是提交注册按钮，提示框，和手机号输入框
  let btn = document.querySelector('.submit'),
    trip = document.querySelector('.trip'),
    phone = document.querySelector('.number');


  // 正则表达式验证字符串是否是符合手机号码格式
  let telRuleCheck2 = function (string) {
    var pattern = /^1[34578]\d{9}$/;
    if (pattern.test(string)) {
      return true;
    }
    // console.log('check mobile phone ' + string + ' failed.');
    return false;
  };

  // 提交按钮点击事件，调用验证手机号函数去判断用户输入的手机号是否正确
  function verifyPhoneNumber(e) {
    var telphone = phone.value;
    if (telphone == "") {
      trip.style.display = 'block';
      e.preventDefault();
    } else {
      if (telRuleCheck2(telphone)) {
        phone.value = '';
      } else {
        trip.innerHTML = '<i>!</i> 请输入正确的11位手机号码';
        trip.style.display = 'block';
        e.preventDefault();
      };
    }
  }

  btn.addEventListener('click', verifyPhoneNumber);
})