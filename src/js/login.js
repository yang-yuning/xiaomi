$(function(){
    $(".text").css("display","none")
    // 账号或扫码登录
    var login_area = document.getElementsByClassName("login_area")[0];
    var erweima  = document.getElementById("erweima");
    // 账号登录
    $("#zhanghao").click(function(){
        erweima.style.display = "none";
        login_area .style.display = "block";
        $(this).css("color","#ff6700");
        $("#saoma").css("color","#666");
        
    });
    // 扫码登录
    $("#saoma").click(function(){
        erweima.style.display = "block";
        login_area .style.display = "none";
        $(this).css("color","#ff6700");
        $("#zhanghao").css("color","#666");
        
    });

    // 账号验证
    var username_state = false;
    var pwd_state = false;
    $("#username").blur(function(){
        let txt = $("#username").val();
        if (txt.length == 0) {
            alert("请输入内容");
            
        };
        //输入条件
        if (!/^1[3-9]\d{9}$/i.test(txt)){
            $("#cuowu").html("您输入的手机号码有误，请重试").css("color","red");
            username_state = false;
        }else{
            $("#cuowu").html("您输入的手机号码正确").css("color","green");
            username_state = true;    
        }
    });
    // 密码验证
    $("#pwd").blur(function(){
        let txt =$("#pwd").val();
        if(txt.length == 0){
            alert("请输入密码");
        }else if(!/^[a-z]\w{7,11}$/i.test(txt)){
            alert("您输入的密码有误密码");
        }else{
            pwd_state = true;
            console.log("密码正确")
        }
    });
    // 登录
    $("#login-btn").click(function(){
        if(pwd_state == true && username_state == true){
            $.ajax({
                type: "post",
                url: "../api/login.php",
                data: {
                    uname: $("#username").val(),
                    pwd:  $("#pwd").val()
                },
                success: function(res){
                    console.log(res);
                    if(res == 'true'){
                        alert("登录成功");
                        window.location.href = "../index.html?uname=" +  $("#username").val() + "&";
                        cookie.set("uname",$("#username").val(),{'path':'/src'});
                    }else{
                        $(".text").css("display","block");
                        console.log(res);

                    }
                }
            })
        }else{
            $(".text").css("display","block");
        }

    })
    
})