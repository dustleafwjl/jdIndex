(function(){
    function Bdlist(options) {
        this.parent = options.parent;
        this.createDom();
        this.bindEvent();
    }
    Bdlist.prototype.createDom = function () {
        var oUl = $('<ul id="oUl"></ul>');
        oUl.appendTo(this.parent.parent());
        oUl.css({
            'position': 'absolute',
            'top': '35px',
            'width': this.parent.innerWidth() + 'px',
            'z-index': 12,
            'background-color': '#FFF',
            'font-size': '12px',
            'border': '1px solid #ddd',
            'display': 'none'
        });
    }
    Bdlist.prototype.bindEvent = function () {
        this.parent.on('input', function () {
            var value = this.value;
            var oscript = $('<script></script>');
            oscript.attr('src','https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ value +'&cb=doJson');
            oscript.appendTo($('body'));
            oscript.remove();
        })
    }
    $.fn.extend({
        baidulist: function(opt){
            opt.parent = this;
            new Bdlist(opt);
            return this;
        }
    });
})();

function jsonp (url, dataname, data, callback) {

}

function doJson(data){
    var s = data.s,
        str = '';
    if(s.length > 0) {
        s.forEach(function (ele, index) {
            str += '<li><a href=https://www.baidu.com/s?wd='+ ele +'>'+ ele +'</a></li>';
        });
        $('#oUl').prop('innerHTML', str).css('display', 'block');
    }else {
        $('#oUl').css('display', 'none');
    }
    $('#oUl li').css({
        'padding-top': '4px',
        'padding-left': '10px',
        'line-height': '25px'
    }).hover(function() {
        $(this).css({
            'background-color': '#ddd'
        })
    }, function () {
        $(this).css({
            'background-color': '#fff'
        })
    });
    $('#oUl li a').css({
        'dispaly': 'block',
        'width': '100%',
        'height': '100%',
        'color': '#999',
    });
}