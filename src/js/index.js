$(function() {
    //头部导航
    $('.navigations').hover(function(){
        $(this).children(".children").slideToggle(0);
    });

    // 跳转
    $("li").click(function(){
        window.location.href = "./html/list1.html";
    })
    $("#ck").click(function(){
        window.location.href = "./html/list1.html";
    })
  
   
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
    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //main
    //main1
    var min1 = [{
        ico1: 'iconfont icon-liwu',
        type1: '选购手机',
        ico2: 'iconfont icon-liwu',
        type2: '企业团购',
        ico3: 'iconfont icon-liwu',
        type3: 'F码通道',
        ico4: 'iconfont icon-liwu',
        type4: '米粉卡',
        ico5: 'iconfont icon-liwu',
        type5: '以旧换新',
        ico6: 'iconfont icon-liwu',
        type6: '话费充值',
        mainimg1: './images/gg.jpg',
        mainimg2: './images/gg2.jpg',
        mainimg3: './images/gg3.jpg',
    }];
    var res1 = min1.map(function(item) {
        return `
            <li class="fl">
                <ul class="clearfix">
                    <li class="fl"><i class="${item.ico1}"></i><a href="javascript:;">${item.type1}</a></li>
                    <li class="fl"><i class="${item.ico2}"></i><a href="javascript:;">${item.type2}</a></li>
                    <li class="fl"><i class="${item.ico3}"></i><a href="javascript:;">${item.type3}</a></li>
                    <li class="fl"><i class="${item.ico4}"></i><a href="javascript:;">${item.type4}</a></li>
                    <li class="fl"><i class="${item.ico5}"></i><a href="javascript:;">${item.type5}</a></li>
                    <li class="fl"><i class="${item.ico6}"></i><a href="javascript:;">${item.type6}</a></li>
                    <li><span class="span1"></span><span class="span2"></span></li>
                </ul>
            </li>
            <li class="fl"><a href="javascript:;"><img src="${item.mainimg1}" alt=""></a></li>
            <li class="fl"><a href="javascript:;"><img src="${item.mainimg2}" alt=""></a></li>
            <li class="fl"><a href="javascript:;"><img src="${item.mainimg3}" alt=""></a></li>`
    }).join("");
    $("#bloated").html(res1);

   

    //字体动画
    $("#ck").hover(function() {
        $(this).css("color", "#ff6700").children("i").css("background", "#ff6700");
    }, function() {
        $(this).css("color", "#424242").children("i").css("background", "#b0b0b0");
    });


    //main3渲染
    $.ajax({
        type: 'get',
        url: './api/home1.php',
        data: {},
        async: false,
        success: function(res) {
            var arr = JSON.parse(res);
            // console.log(arr);
            let str = arr.map(function(item) {
                return `<li class="hovsh">
                        <img src="${item.img}" class="figure-img">
                        <h3><a href="javascript:;">${item.h3}</a></h3>
                        <p class="desc">${item.desc}</p>
                        <p class="price"> <span class="num">${item.price}</span>元 <s>${item.yuan}</s> </p>
                        <div class="flag flag-new">${item.new}</div>
                    </li>`
            }).join("");
            $("#list").html(str);
        }
    });
    //main4渲染
    $.ajax({
        type: 'get',
        url: './api/home2.php',
        data: {},
        async: false,
        success: function(res) {
            var arr = JSON.parse(res);
            console.log(arr);
            let str = arr.map(function(item) {
                return `<li class="brick-item brick-item-m" data-gid=
                async: false,"${item.id}">
                <div class="flag flag-saleoff">${item.new}</div>
                <div class="figure figure-img"> <a class="exposure" href="javascript:;"><img src="${item.img}"></a> </div>
                <h3 class=" title"> <a href="javascript:;">${item.h3}</a></h3>
                <p class="desc">${item.desc}</p>
                <p class="price"> <span class="num">${item.price}</span>元 <s>${item.yuan}</s></p>
                <p class="rank"></p>
                <div class="review-wrapper">
                <a href="javascript:;">
                <span class="review">挺好的，洗的也干净，白色很简单，好看
                </span>
                <span class="author"> 来自于 白羊董小姐 的评价
                <span class="date" data-date
                async: false,="1547983148"></span>
                </span>
                </a>
                </div>
            </li>`
            }).join("");
            $(".list2").html(str + ` <li class="last">
            <div class="hovsh-t">
                <p><a href="javascript:;">小米净水器</a></p>
                <p>1990元</p>
                <a href="javascript:;" class="link-a"><img src="./images/xt.jpg" alt=""></a>
            </div>
            <div class="hovsh-b" id="gd">
                <p><a href="javascript:;">浏览更多</a></p>
                <p><a href="javascript:;">热门</a></p>
                <a href="javascript:;" class="link-a iconfont icon-zuo1"></a>
            </div>
</li>`)
        }
    });
     // 跳转
     $("#gd").click(function(){
        window.location.href = "./html/list1.html";
    })
    // main5推荐切换
    //ul的left值
    let left = $("#ma9").offset().left
    // 上一页
    $("#zuo").click(function() {
        console.log(left);
        if (left == 0) {
            $("#ma9").css("left", 0)
        } else {
            left = left + 1240;
            $("#ma9").css("left", left);
        }
    });
    // 下一页
    $("#you").click(function() {
        console.log(left);
        if (left == -3720) {
            $("#ma9").css("left", left)
        } else {
            left = left - 1240;
            $("#ma9").css("left", left);
        }
    });

    //右侧导航
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $("#return").css("display", "block");
        } else {
            $("#return").css("display", "none");
        }
    })

    $(".return").on('click', function(e) {
        // html,body 都写是为了兼容浏览器
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
        return false;
        $(window).scroll(function() {
            if ($(document).scrollTop() > 400) {
                $("#return").css("display", "block");
            } else {
                $("#return").css("display", "none");
            }
        })
    });

})