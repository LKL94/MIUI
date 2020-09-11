window.addEventListener("load", function () {
  $(".lt_login_list_hd").on("click", "a", function () {
    $(this).addClass("current").siblings("a").removeClass("current");
    if ($(this).attr("id") == "code_login") {
      $(this)
        .parents(".default_login_way,phone_login_way")
        .hide()
        .siblings(".erweima_login_way")
        .show();
    }
    if ($(this).attr("id") == "cont_login") {
      $(this)
        .parents(".erweima_login_way, phone_login_way")
        .hide()
        .siblings(".default_login_way")
        .show();
    }
  });
  // $()
  // $(".lt_login_list_hd").on("click", "a", function () {
  //   $(this).addClass("current").siblings("a").removeClass("current")
  //   $(this).parents(".default_login_way").show().siblings(".erweima_login_way").hide()
  // })
  // $()
});
