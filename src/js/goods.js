$(function(){
    $('.navigations').hover(function() {
        $(this).children(".children").slideToggle(0);
    });
    //输入框
    $("#tex").focus(function() {
        $('#sel').css("display", "none");
        $('#sub').css("borderColor", "#ff6700");
        $('#fom').css("borderColor", "#ff6700");
        $('#list1').css("display", "block");
    });
    $("#tex").blur(function() {
        $('#sel').css("display", "block");
        $('#sub').css("borderColor", "#ff6700");
        $('#fom').css("borderColor", "#ff6700");
        $('#list1').css("display", "none");
    });

    // 吸顶
    var goods = document.querySelector(".goods-box");
    $(document).on('scroll',function(){
        let c = $(document).scrollTop();
        // console.log(c);
        // 头部吸顶
        if(c > 142){
            $(".xm-product-box").css({'position':'fixed','top':'0px', "z-index": 100});
        }else{
            $(".xm-product-box").css({'position':'absolute','top':'0px',"z-index": 100});;
          }

        //   图片吸顶
        if(201 < c < 700 ){ 
            $(".goods-box").css({'position':'fixed','top':'40px', "z-index": 100});
           
        }
        if(c > 600){
            i = 404;
            i-= 10;
             $(".goods-box").css({'position':'absolute','top':i+'px', "z-index": 1});
           
        }else if(c <= 200){
            $(".goods-box").css({'position':'absolute','top':'0px', "z-index": 1});
        }
    });

    // 接收传过来的id,获取他的信息
    let uid = location.search.split('=')[1];
    console.log(uid);
    $.ajax({
        type: 'get',
        url: '../api/list1.php',
        data: {},
        success : function(res){
            // console.log(res);
            let arr = JSON.parse(res);
            // 渲染图片详情
            tupian(arr);
            // 点击切图
            $('#img_x li').eq(0).css('border', '2px solid coral');
            $(".img_x li").on("click", function() {
                $(this).css("border", "2px solid coral");
                $(this).siblings().css("border", "2px solid #eee");
                var $src = $(this).children().attr("src");
                // console.log($src);
                $("#mediumContainer img").attr('src', $src).css({ "width": 500, "height": 500 });
                $("#img_u img").attr('src', $src);
        });
    }
    });

    // 加入购物车
    let box = document.querySelector(".buy-succ-box");
    let con = document.querySelector(".mian-con");
    let xiding = document.querySelector(".xiding");
    let shang = document.querySelector("#shang");

    $("#btn").click(function(){
        $.ajax({
            type: 'get',
            url: '../api/goods.php',
            data: {
                id : uid+1
            },
            success:function(res){
                console.log(res);
                let arr = JSON.parse(res);
                if(arr.message == 1){
                    alert("该商品已存在");
                }else if(arr.message == 2){
                    alert("加入成功");
                cookie.set("id",uid +1,{'path':'/src'});
                xiding.style.display = "none";
                con.style.display = "none";
                box.style.display = "block";
                }else if(arr.message == 3){
                    alert("加入成功");
                    cookie.set("id",uid +1,{'path':'/src'});
                    xiding.style.display = "none";
                    con.style.display = "none";
                    box.style.display = "block";
                }
                

                // 返回上一级
                shang.onclick = function(){
                    xiding.style.display = "block";
                    con.style.display = "block";
                    box.style.display = "none";
                }
                // 结算
                $("#jie").click(function(){
                    location.href = 'car.html?id=' + uid;
                })
            }
        })
    })
    





    // 图片渲染
    function tupian(arr){
        uid = uid -1;
        // 大图
        $("#mediumContainer").html(`<img src="${arr[uid].img}"></img>`);
        // 小图
        let xiaotu;
        xiaotu = `
        <li><img src="${arr[uid].img}" alt=""></li>
        <li><img src="../images/xt1.jpg"></li>
        <li><img src="../images/xt2.jpg"></li>
        <li><img src="../images/xt3.jpg"></li>`
        $("#img_x").html(xiaotu);
        // 放大镜
        $("#img_u").html(`<img src="${arr[uid].img}" style="width: 500;height: 500px"></img>`)
        
    }

     // 跳转
     $("#xm .site-header li").click(function(){
        window.location.href = "../html/list1.html";
    })
           

})