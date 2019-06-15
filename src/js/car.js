

$(function() {
    //拿到数据渲染
    $.ajax({
        type: 'get',
        url: '../api/car.php',
        async: false,
        data: {},
        success: function(res) {
            let arr = JSON.parse(res);
            console.log(arr)
            gouwu(arr);
            // 商品数
            let len = $(".item-row").length
            $("#J_cartTotalNum").html(len);
            cookie.set("len",len,{'path':'/src'});
        }
    });


    // 数量加
    $(".J_plus").click(function() {
        let f = $(this).parent().parent().parent();
        let id = $(this).parent().parent().parent().data("id");
        let qty = $(this).siblings(".qty").val();
        let danjia = f.children().eq(3).children(".danjia").html();
        let zong = 0;
        f.children().eq(5).html(zong)
        qty++;
        if (qty > 20) {
            alert("已达最大值");
            qty = 20;
            zong = Number(qty * danjia);
            f.children().eq(5).html(zong)
            f.children().eq(5).html(zong)

        } else {
            $(this).siblings(".qty").val(qty);
            zong = Number(qty * danjia);
            f.children().eq(5).html(zong)
            f.children().eq(5).html(zong)
        }

        $.ajax({
            type: 'get',
            url: '../api/addcar.php',
            async: false,
            data: {
                id: id
            },
            success: function(res) {


            }
        })
    });

    // 数量减
    $(".J_minus").click(function() {
        let f = $(this).parent().parent().parent();
        let id = $(this).parent().parent().parent().data("id");
        let qty = $(this).siblings(".qty").val();
        let danjia = f.children().eq(3).children(".danjia").html();
        let zong = 0;
        f.children().eq(5).html(zong)
        qty--;
        if (qty < 1) {
            alert("已是最小值");
            qty = 1;
            zong = Number(qty * danjia);
            f.children().eq(5).html(zong)
        } else {
            $(this).siblings(".qty").val(qty);
            zong = Number(qty * danjia);
            f.children().eq(5).html(zong)
        }
        $.ajax({
            type: 'get',
            url: '../api/downcar.php',
            async: false,
            data: {
                id: id
            },
            success: function(res) {

            }
        })
    })
    // 手动修改
    $(".qty").blur(function() {
        let id = $(this).parent().parent().parent().data("id");
        let f = $(this).parent().parent().parent();
        let qty = $(this).val();
        let danjia = f.children().eq(3).children(".danjia").html();
        let zong = 0;
        f.children().eq(5).html(zong)
        if (qty < 1) {
            alert("最小值为1");
            qty = 1;
            zong = Number(qty * danjia);
            f.children().eq(5).html(zong)
            $(this).val(qty);
        } else if (qty > 20) {
            alert("最大值为20");
            qty = 20;
            zong = Number(qty * danjia);
            f.children().eq(5).html(zong)
            $(this).val(qty);
        } else {
            $(this).val(qty);
            zong = Number(qty * danjia);
            f.children().eq(5).html(zong)
        }
        $(this).val(qty);
        zong = Number(qty * danjia)
        // console.log(qty)
        $.ajax({
            type: 'get',
            url: '../api/qty.php',
            async: false,
            data: {
                id: id,
                qty: qty
            },
            success: function(res) {

            }
        })
    })

    // 删除
    $(".del").click(function() {
        let id = $(this).parent().parent().data("id");
        console.log(id);
        $(this).parent().parent().remove();
        let len = $(".item-row").length
        cookie.set("len",len,{'path':'/src'});
        NumPrice()
        $.ajax({
            type: 'get',
            url: '../api/del.php',
            async: false,
            data: {
                id: id,
            },
            success: function(res) {

            }
        })

    });

    // 全选反选
    all();
    // 单选
    $(".item").click(function() {
        NumPrice();
    })



    // 数据渲染
    function gouwu(arr) {
        let res = '';
        for (var i = 0; i < arr.length; i++) {
            res += `
        <div class="item-row clearfix" data-id="${arr[i].id}">
                            <div class="col col-check">
                                <input type="checkbox" class="iconfont icon-checkbox item">
                            </div>
                            <div class="col col-img">
                                <img src="${arr[i].img}" alt="">
                            </div>
                            <div class="col col-name">
                            ${arr[i].desc}
                            </div>
                            <div class="col col-price">
                                <span class="danjia">${arr[i].price}</span>                            </div>
                            <div class="col col-num">
                                <div class="change-goods-num clearfix J_changeGoodsNum">
                                    <a href="javascript:void(0)" class="J_minus">
                                        <i class="jian">-</i>
                                    </a>
                                    <input tyep="text" value="${arr[i].qty}" class="qty">
                                    <a href=" javascript:void(0)" class="J_plus">
                                        <i class="jia">+</i>
                                    </a>
                                </div>
                            </div>
                            <div class="col col-total">
                                <span class="xiaoji"> ${arr[i].price*arr[i].qty}</span>
                            </div>
                            <div class="col col-action">
                                <a href="javascript:;" class="del">x</a>
                            </div>
                        </div>`
        }
        $(".row-box").html(res);
    }
    // 全选反选
    function all() {
        let all = document.getElementById("all");
        let item = document.getElementsByClassName("item");
        all.onclick = function() {
            for (var i = 0; i < item.length; i++) {
                item[i].checked = all.checked;
                NumPrice();
            }
        }
        for (var i = 0; i < item.length; i++) {
            item[i].onclick = function() {
                all.checked = isCheckAll();
            }

        }

        function isCheckAll() {
            // 假设item全部勾选
            var res = true;
            for (var i = 0; i < item.length; i++) {
                if (!item[i].checked) {
                    res = false;
                    break;
                }
            }
            return res;
        }
    }
    var numArr = [];
    // 单选加结算
    function NumPrice() {
        numArr = [];
        for (var i = 0; i < $('.item').length; i++) {
            if ($('.item').eq(i).prop('checked')) {
                numArr.push(i);
            }
        }


        if (numArr.length == $('.item').length) {
            $('.item').prop('checked', 'checked');
        } else {
            $('.item').removeAttr('checked');
        }


        var priceAll = 0; //总价
        for (var i = 0; i < numArr.length; i++) {
            priceAll += $(".xiaoji").eq(numArr[i]).html() * 1;
        }
        console.log(priceAll);
        $("#J_cartTotalPrice").html(priceAll)
    }



})