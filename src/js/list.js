$(function() {
    //头部导航
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
    // 商品渲染
    $.ajax({
        type: 'get',
        url: '../api/list1.php',
        data: {},
        success: function(res) {
            var arr = JSON.parse(res);
            // 明星产品渲染
            migxing(arr);
            // 小米渲染
            xiaomi(arr);
            // 红米
            hongmi(arr);
            // 追剧神器
            zhuiju(arr);
            // 骁龙845
            xiaolong(arr);
            // hover样式
            $(".tong").hover(function() {
                $(this).css({ "box-shadow": " 0 15px 30px rgba(0,0,0,0.1)", "transform": "translate3d(0, -5px, 0)", "transition": " all .2s linear" })
            }, function() {
                $(this).css({ "box-shadow": "0", "transform": "translate3d(0, 0, 0)", "transition": " all .2s linear" })
            });
            // 点击跳转详情页
            $(".main .img").click(function(){
               let goodsId = $(this).parent().data("id");
               location.href = 'goods.html?id=' + goodsId;
            });
        }
    });

  
    
    // 明星产品渲染
    function migxing(arr) {
        var mx = "";
        for (var i = 0; i < 11; i++) {
            mx += `
            <div class="star-c clearfix">
            <div class="row clearfix">
                        <div class="row-l row-t tong"  data-id = "${arr[i].id}">
                            <div class="img">
                                <img src="${arr[i].img}" alt="">
                            </div>
                                <h3 class="title">${arr[i].h3}</h3>
                                <p class="desc">${arr[i].desc}</p>
                                <p class="price"> <strong>${arr[i].price}</strong>元起  </p>    
                        </div>
                        <div class="row-r row-t tong" data-id = "${arr[i+1].id}">
                        <div class="img">
                        <img src="${arr[i+1].img}" alt="">
                    </div>
                        <h3 class="title">${arr[i+1].h3}</h3>
                        <p class="desc">${arr[i+1].desc}</p>
                        <p class="price"> <strong>${arr[i+1].price}</strong>元起  </p>   
                        </div>
                    </div>
                    <div class="container channel-line" style=" height:14px; background-color:#f5f5f5;"></div>
                    </div>
                    </div>`
            i++;
        }
        $(".mingxing").html(` <h2>
        明星产品
    </h2>
    <div class="star-t tong">
        <div class="zuo">
            <img src="../images/mx-t.jpg" alt="">
        </div>
        <div class="you">
            <div class="con">
                <h3>Redmi K20 Pro </h3>
                <p class="desc">骁龙855旗舰处理器, 弹出式极界全面屏</p>
                <p class="price"> <strong>2499</strong>元起 </p>
                <p class="link">了解产品 ></p>
            </div>
        </div>
    </div>
    <div class="container channel-line" style=" height:14px; background-color:#f5f5f5;"></div>` + mx);
    }

    // 小米手机
    function xiaomi(arr) {
        var xm = "";
        for (var i = 12; i < 22; i++) {
            xm += `
            <div class="row clearfix">
            <div class="row-l row-t tong"  data-id = "${arr[i].id}">
                <div class="img">
                    <img src="${arr[i].img}" alt="">
                </div>
                    <h3 class="title">${arr[i].h3}</h3>
                    <p class="desc">${arr[i].desc}</p>
                    <p class="price"> <strong>${arr[i].price}</strong>元起  </p>    
            </div>
            <div class="row-r row-t tong" data-id = "${arr[i+1].id}">
            <div class="img">
            <img src="${arr[i+1].img}" alt="">
        </div>
            <h3 class="title">${arr[i+1].h3}</h3>
            <p class="desc">${arr[i+1].desc}</p>
            <p class="price"> <strong>${arr[i+1].price}</strong>元起  </p>   
            </div>
        </div>
        <div class="container channel-line" style=" height:14px; background-color:#f5f5f5;"></div>
        </div>
                `
            i++;
        }
        $(".xiaomi").html(`<h2>小米手机</h2>` + xm)

    }

    //红米手机
    function hongmi(arr) {
        var hm = "";
        for (var i = 22; i < 30; i++) {
            hm += `
            <div class="row clearfix">
            <div class="row-l row-t tong"  data-id = "${arr[i].id}">
                <div class="img">
                    <img src="${arr[i].img}" alt="">
                </div>
                    <h3 class="title">${arr[i].h3}</h3>
                    <p class="desc">${arr[i].desc}</p>
                    <p class="price"> <strong>${arr[i].price}</strong>元起  </p>    
            </div>
            <div class="row-r row-t tong" data-id = "${arr[i+1].id}">
            <div class="img">
            <img src="${arr[i+1].img}" alt="">
        </div>
            <h3 class="title">${arr[i+1].h3}</h3>
            <p class="desc">${arr[i+1].desc}</p>
            <p class="price"> <strong>${arr[i+1].price}</strong>元起  </p>   
            </div>
        </div>
        <div class="container channel-line" style=" height:14px; background-color:#f5f5f5;"></div>
        </div>`
            i++;
        }
        $(".hongmi").html(`<h2>红米手机</h2>` + hm)

    }

    // 追剧神器
    function zhuiju(arr) {
        var zj = "";
        for (var i = 30; i < 32; i++) {
            zj += `
            <div class="row clearfix">
            <div class="row-l row-t tong"  data-id = "${arr[i].id}">
                <div class="img">
                    <img src="${arr[i].img}" alt="">
                </div>
                    <h3 class="title">${arr[i].h3}</h3>
                    <p class="desc">${arr[i].desc}</p>
                    <p class="price"> <strong>${arr[i].price}</strong>元起  </p>    
            </div>
            <div class="row-r row-t tong" data-id = "${arr[i+1].id}">
            <div class="img">
            <img src="${arr[i+1].img}" alt="">
        </div>
            <h3 class="title">${arr[i+1].h3}</h3>
            <p class="desc">${arr[i+1].desc}</p>
            <p class="price"> <strong>${arr[i+1].price}</strong>元起  </p>   
            </div>
        </div>
        <div class="container channel-line" style=" height:14px; background-color:#f5f5f5;"></div>
        </div>`
            i++;
        }
        $(".zhuiju").html(` <h2>
        追剧神器
    </h2>
    <div class="star-t tong">
        <div class="zuo">
            <img src="../images/zj-t.jpg" alt="">
        </div>
        <div class="you">
            <div class="con">
                <h3>小米平板4</h3>
                <p class="desc">超大屏幕看剧更震撼，超长续航追剧更尽兴</p>
                <p class="price"> <strong>1099</strong>元起 </p>
                <p class="link">了解产品 ></p>
            </div>
        </div>
    </div> <div class="container channel-line" style=" height:14px; background-color:#f5f5f5;"></div>` + zj)

    }
    
    // 骁龙845
    function xiaolong(arr) {
        var xl = "";
        for (var i = 30; i < 38; i++) {
            xl += `
            <div class="row clearfix">
            <div class="row-l row-t tong"  data-id = "${arr[i].id}">
                <div class="img">
                    <img src="${arr[i].img}" alt="">
                </div>
                    <h3 class="title">${arr[i].h3}</h3>
                    <p class="desc">${arr[i].desc}</p>
                    <p class="price"> <strong>${arr[i].price}</strong>元起  </p>    
            </div>
            <div class="row-r row-t tong" data-id = "${arr[i+1].id}">
            <div class="img">
            <img src="${arr[i+1].img}" alt="">
        </div>
            <h3 class="title">${arr[i+1].h3}</h3>
            <p class="desc">${arr[i+1].desc}</p>
            <p class="price"> <strong>${arr[i+1].price}</strong>元起  </p>   
            </div>
        </div>
        <div class="container channel-line" style=" height:14px; background-color:#f5f5f5;"></div>
        </div>`
            i++;
        }
        $(".xiaolong").html(`<h2>骁龙845</h2>` + xl)

    }


});