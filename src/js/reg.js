$(function() {
    // 随机验证码
    $("#gain").on('click', function() {
        var str = randomCode();
        $(this).html(str).css({ "color": randomColor(16), "font-size": "20px" });
    });
    // 隐藏验证信息
    let regbox1 = document.getElementById("regbox1");
    let regbox2 = document.getElementById("regbox2");
    let regbox3 = document.getElementById("regbox3");
    $(".regbox2").css("display", "none");
    // 手机验证
    var phone_state = false;
    var gai_state = false;
    var pwd1_state = false;
    var pwd2_state = false;
    $("#phone").blur(function() {
        let txt = $("#phone").val();
        if (txt.length == 0) {
            alert("请输入内容");

        };
        //输入条件
        if (!/^1[3-9]\d{9}$/i.test(txt)) {
            $("#cuowu").html("您输入的手机号码有误，请重试").css("color", "red");
            phone_state = false;
        } else {
            $("#cuowu").html("您输入的手机号码正确").css("color", "green");
            phone_state = true;
        }
    });

    // 下一步
    $("#zc").click(function() {
        // 判断手机号是否存在
        $.ajax({
            type: "post",
            url: "../api/reg.php",
            data: {
                uname: $("#phone").val(),
            },
            success: function(res) {
                console.log(res);
                if (res == "1") {
                    alert("该用户已注册");
                    phone_state = false;
                } else {
                    $("#cuowu").html("此号码可用").css("color", "green");
                    phone_state = true;
                    // 判断是否勾选协议
                    if ($("#ck").is(':checked')) {
                        if (phone_state == true) {
                            $("#regbox1").css("display", "none");
                            $(".msg").css("display", "none");
                            regbox2.style.display = "block";
                        } else {
                            alert("请输入正确的号码");
                        }
                    } else {
                        alert("请勾选用户协议");
                    }


                }
            }
        })
    })

    // 验证码
    $("#remain").blur(function() {
        let txt = $("#gain").text();
        let txt2 = $("#remain").val()
        if (txt.length == 0) {
            alert("请输入验证码");
        };
        //输入条件
        if (txt.toLowerCase() != txt2.toLowerCase()) {
            alert("看不清？点击换一张");
        } else {
            gai_state = true;
            console.log("对了")
        }

    })
    // 下一步
    $("#xia").click(function() {

        if (gai_state == true) {
            regbox2.style.display = "none";
            regbox3.style.display = "block";
        } else {
            alert("看不清？点击换一张");
        }
    })
    // 上一步
    $("#fan").click(function() {
        regbox2.style.display = "none";
        regbox1.style.display = "block";
    })

    // 密码
    // 初次密码
    $("#pwd1").blur(function() {
        let txt = $("#pwd1").val();
        if (txt.length == 0) {
            alert("请输入密码");
        } else if (!/^[a-z]\w{7,11}$/i.test(txt)) {
            alert("您输入的密码有误密码");
        } else {
            pwd1_state = true;
            console.log("密码正确")
        }
    })
    // 二次密码
    $("#pwd2").blur(function() {
        let txt2 = $("#pwd1").val();
        let txt = $("#pwd2").val();
        if (txt.length == 0) {
            alert("请输入密码");
        } else if (txt != txt2) {
            alert("您输入的密码不一致");
        } else {
            pwd2_state = true;
            console.log("密码2正确")
        }
    })
    //登录
    $("#dl").click(function() {
        if (pwd1_state == true && pwd2_state == true) {
            let txt = $("#phone").val();
            $.ajax({
                type: "post",
                url: "../api/reg.php",
                data: {
                    uname: txt,
                    pwd: $("#pwd1").val()
                },
                success: function(res){
                    console.log(res);
                }
            });
            alert("注册成功，请稍后")
            window.location.href = "../index.html?uname=" +  txt + "&";
            cookie.set("uname",txt,{'path':'/src'});
        } else {
            alert("您的密码有误")
        }
       
        
    })


})