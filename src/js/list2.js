$(function(){
       // /头部导航
       $('.navigations').hover(function() {
        $(this).children(".children").slideToggle(0);
    });
    // 渲染
    $.ajax({
        type: 'get',
        url: '../api/list2.php',
        
        data: {},
        success: function(res){
            var arr = JSON.parse(res);
            goods(arr);
            // 升序
            $("#sx").click(function(){
                arr.sort(function(a,b){
                    return a.price-b.price;
                });
                goods(arr);
            });
            // 降序
            $("#jx").click(function(){
                arr.sort(function(a,b){
                    return b.price-a.price;
                });
                goods(arr);
            });
        }        
    });
   


    

    // 渲染
    function goods(arr){
        var res = arr.map(function(item){
            return `
            <li class="goods-item" data-id="${item.id}">
            <div class="figure figure-img">
                <img src="${item.img}" alt="">
                <p class="desc">${item.desc}</p>
                <h2 class="title">${item.h2}</h2>
                <p class="price"><i>${item.price}</i>元 <del>49元</del></p>
                <div class="mimg">
                    <img src="${item.ximg}" alt="">
                </div>
                <div class="flags"><div class="flag flag-saleoff">3折促销</div>
                <div class="flag flag-gift">有赠品</div>
            </div>
            </div>
        </li>`
        }).join("");
        $("#goods").html(res);
    }
});