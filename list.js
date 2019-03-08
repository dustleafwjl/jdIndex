(function () {
    function Index(option) {
        this.dir = option.dirction || "x";
        this.meauList = option.meauList || [];
        this.colNum = option.colNum || 2;
        this.parent = option.parent;
        this.fontColor = $(this).find('a').css('color');
        this.len = this.meauList.length || 0;
        this.createDom();
        this.bindEvent();
    };
    Index.prototype.createDom = function () {
        var self = this;
        var content = $('<div class="dropCont" style="display:none;"></div>');
        var dropDownCon = $('<div class="dropDownCon"></div>');
        // 生成结构

        this.meauList.forEach(function (ele) {
            var meau = $('<div class="nav-meau"></div>');
            if(ele.title){
                var meauTitle = $('<div class="item meau-title"></div>').html(ele.title);
                meau.append(meauTitle).css('text-aligin', 'left');
            }
            var itemList = $('<div class="itemList"></div>');
            ele.items.forEach(function (ele) {
                var str = '<a href="'+ ele.href +'">'+ ele.name +'</a>';
                var item = $('<div class="nav-item" style="display:inline-block; width: 100px"></div>');
                item.html(str).appendTo(itemList);
            });
            meau.append(itemList).appendTo(dropDownCon); 
        });
        content.append(dropDownCon).appendTo(self.parent);
        if(this.dir == 'x'){
            $('.nav-meau', this.parent).css({
                'display': 'inline-block',
                'border-right': '1px solid #ddd',
            });
            $('.dropCont', this.parent).css({
                // 'width': ($('.nav-meau', self.parent).innerWidth() + 2) * self.len + 'px',
                'right': '-25px'
            });
        }else {
            $('.nav-meau', this.parent).css({
                'display': 'block',
                'border-bottom': '1px solid #ddd',
            });
            $('.dropCont', this.parent).css({
                // 'width': ($('.nav-meau', this.parent).innerWidth() + 2) * self.len + 'px',
                'left': '0'
            });
        }
        this.addCss();
    }
    Index.prototype.addCss = function () {
        var self = this;
        this.parent.css({
            'position': 'relative',
            'z-index': 999
        });
        $('.nav-meau', this.parent).css({
            'padding': '10px',
            'width': $('.nav-item', this.parent).width() * self.colNum + 'px',
            'background-color': '#fff',
            'vertical-align': 'top'
        });
        $('.dropCont', this.parent).css({
            'position': 'absolute',
            'width': ($('.nav-meau', self.parent).innerWidth() + 1) * self.len + 'px'
        });
    }
    Index.prototype.bindEvent = function () {
        var self = this;
        this.parent.hover(function(){
            $(this).css('background', '#fff').find('a').css('color', this.fontColor);
            $('.dropCont', self.parent).show();
        }, function(){
            $('.dropCont', self.parent).hide();
            var color = self.parent.parents().css('background-color');
            self.parent.css('background-color', color);
        })
    }
    $.fn.extend({
        dropList: function (option) {
            option.parent = this;
            new Index(option);
            return this;
        }
    });
})();

// 创建添加结构createDom 添加css样式addCss 鼠标移入移出bindEvent