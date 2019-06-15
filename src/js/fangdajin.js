$(function() {
    $('#img_x li').eq(0).css('border', '2px solid coral');
    $('#zhezhao').mousemove(function(e) {
        $('#img_u').show();
        $('#magnifier').show();
        var left = e.offsetX - parseInt($('#magnifier').width()) / 2;
        var top = e.offsetY - parseInt($('#magnifier').height()) / 2;
        left = left < 0 ? 0 : left;
        left = left > (parseInt($('#zhezhao').outerWidth()) - parseInt($('#magnifier').outerWidth())) ? (parseInt($('#zhezhao').outerWidth()) - parseInt($('#magnifier').outerWidth())) : left;
        top = top < 0 ? 0 : top;
        top = top > (parseInt($('#zhezhao').outerHeight()) - parseInt($('#magnifier').outerHeight())) ? (parseInt($('#zhezhao').outerHeight()) - parseInt($('#magnifier').outerHeight())) : top;

        $('#magnifier').css('left', left + 'px');
        $('#magnifier').css('top', top + 'px');

        var leftRate = left / parseInt($('#zhezhao').outerWidth());
        var bigLeft = leftRate * parseInt($('#img_u img').outerWidth());
        $('#img_u img').css('margin-left', -bigLeft + 'px');

        var topRate = top / parseInt($('#zhezhao').outerHeight());
        var bigTop = topRate * parseInt($('#img_u img').outerHeight());
        $('#img_u img').css('margin-top', -bigTop + 'px');
    })
    $('#zhezhao').mouseleave(function() {
        $('#img_u').hide();
        $('#magnifier').hide();
    })



})