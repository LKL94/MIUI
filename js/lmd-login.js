window.addEventListener('load', function() {
    var uname = document.querySelector('.login-area #uname');
    var pwd = document.querySelector('.login-area #pwd');
    var lbtn = document.querySelector('.login-btn');
    var lmain = document.querySelector('.wrap .main');
    var lercode = document.querySelector('.wrap .ercode-area');

    var ewmone = document.querySelector('.head .trigger a');
    var ewmtwo = document.querySelector('.code-hd .trigger a');

    var as = document.querySelectorAll('.footer ul a');

    var sname = document.querySelector('.sname');
    var spwd = document.querySelector('.spwd');

    // 登录操作 获取本地数据
    lbtn.addEventListener('click', function() {
        var lsuname = localStorage.getItem('uname');
        var lspwd = localStorage.getItem('pwd');
        if (uname.value === '' || pwd.value === '') {
            sname.innerHTML = '账号不能为空!';
            spwd.innerHTML = '密码不能为空!';
        } else if (lsuname == uname.value && lspwd == pwd.value) {
            location.href = '../html/lmd-index.html';
        }
    });
    // 二维码切换
    ewmone.addEventListener('click', function() {
        lmain.style.display = 'none';
        lercode.style.display = 'block';
    })
    ewmtwo.addEventListener('click', function() {
        lmain.style.display = 'block';
        lercode.style.display = 'none';
    })

    // 尾部 鼠标经过字体高亮显示
    for (var i = 0; i < as.length; i++) {
        as[i].onmouseenter = function() {
            for (var i = 0; i < as.length; i++) {
                as[i].style.color = '#666';
            }
            this.style.color = '#333';
        }
        as[i].onmouseleave = function() {
            as[0].onmouseenter();
        }
    }
    as[0].onmouseenter();
})