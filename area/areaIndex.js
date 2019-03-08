(function () {
    var obj = {
        init: function (option) {
            this.parent = option.parent;
            this.items = option.items;
            this.rowNum = option.rowNum || 5;
            this.nowItem = option.nowItem || this.items[0].name || '';
            this.nowItemImg = option.nowItemImg || '';
            this.createDom();
            this.bindEvent();
        },
        createDom: function () {
            var wrap = $('<div class="areaContent"></div>');
            var nowArea = $('<div class="nowArea"></div>');
            var itemList = $('<div class="itemList"></div>');
            if (this.nowItemImg) {
                var img = new Image();
                img.src = this.nowItemImg;
                img.onload = function () {
                    $(img).prependTo(nowArea);
                }
            }
            $('<span class="item-name"></span>').html(this.nowItem).appendTo(nowArea);
            this.items.forEach(function (ele, index) {
                var str = '<a href="' + ele.href + '">' + ele.name + '</a>';
                $('<div class="item"></div>').append(str).appendTo(itemList);
            });
            wrap.append(nowArea).append(itemList);
            this.parent.append(wrap);
            $('.itemList').css({
                width: $('.item').innerWidth() * this.rowNum + 20
            });
        },
        bindEvent: function () {
            $('.itemList').on('click', '.item', function () {
                $('.itemList .active').removeClass('active');
                $(this).find('a').addClass('active');
                $('.nowArea .item-name').html($(this).find('a').html());
            });
        }
    }
    $.fn.extend({
        areaList: function (opt) {
            opt.parent = this;
            obj.init(opt);
        }
    });
})();