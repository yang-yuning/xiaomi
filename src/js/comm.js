$(function(){
    // 获取cookie，判断是否登录
    let cook = cookie.get("uname");
    // console.log(cook);
    var dl = document.querySelector("#dl");
    var zc = document.querySelector("#zc");
    var user = document.querySelector("#user");

    if(cook){
      dl.style.display = "none";
      zc.style.display = "none";
      user.style.display = "block";
      $("#txt").html(cook);
    }
    // 退出
    $("#tc").click(function(){
        user.style.display = "none";
        dl.style.display = "block";
        zc.style.display = "block";
        cookie.remove("uname");
    });
    $("#look").click(function(){
      window.location.href = "../html/car.html";
    })
    $("#look1").click(function(){
      window.location.href = "./html/car.html";
    });
    // 购物车件数
    let cook2 = cookie.get('len');
    if(cook2){
      $("#jian1").html(cook2);
      $("#jian").html(cook2)
    }else{
      $("#jian1").html(0);
      $("#jian").html(0)
    }
    
})