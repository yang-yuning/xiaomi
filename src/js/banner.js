$(function() {
    var idx = 0;
    var oBox = $(".slider_box");
    var oNav = $(".slider_nav");
    var oprev = $(".prev");
    var onext = $(".next");
    var width = $(".slider_box p").width();
    var timer;
    // console.log(width)
    oBox.append(oBox.children("p").first().clone());
    //添加小圆点
    var leng = oBox.children("p").length;
    for (var i = 0; i < leng - 1; i++) {
        oNav.append('<span>' + (i + 1) + '</span>');
    }
    //获取所有的小圆圈
    ospan = oNav.children("span");
    //给第一个加样式
    ospan.eq(0).addClass("active");
    //鼠标移到图片上停止轮播
    $(".slider").hover(
        function() {
            clearInterval(timer)
        }, AutoPlay);
    //点击小圆圈图片跳转
    oNav.on("mouseenter", "span", function() {
        var spanIdx = $(this).text();
        oBox.css({ "left": -((spanIdx - 1) * width) + "px" });
        $(this).addClass("active").siblings().removeClass("active");
        idx = spanIdx - 1;
    });
    //自动轮播
    AutoPlay()
    //点击轮播下一张
    onext.click(next);
    //点击轮播上一张
    oprev.click(prev);
    //自动轮播
    function AutoPlay() {
        timer = setInterval(next, 2000);
    }
    //下一张轮播
    function next() {
        idx++;
        oBox.stop().animate({ "left": -(idx * width) + "px" });
        if (idx >= leng) {
            oBox.css({ "left": "0" });
            idx = 1;
        }
        var numidx = idx;
        if (numidx == leng - 1) numidx = 0;
        oBox.stop().animate({ "left": -(idx * width) + "px" });
        //小图标跟着图片显示
        ospan.eq(numidx).addClass("active").siblings("span").removeClass("active");
    }
    //上一张轮播
    function prev() {
        idx--;
        if (idx < 0) {
            oBox.css({ "left": -((leng - 1) * width) + "px" });
            idx = leng - 2;
        }
        oBox.stop().animate({ "left": -(idx * width) + "px" });
        var numidx = idx;
        if (numidx == leng - 1) numidx = 0;
        //小图标跟着图片显示
        ospan.eq(numidx).addClass("active").siblings("span").removeClass("active");
    }
})