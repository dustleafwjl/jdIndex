(function () {

    function Swiper(opt) {
        var opts = $.extend({ 'image': [], 'interVal': 2000 }, opt); // 利用jquery的合并参数功能实现容错处理
        this.img = opts.image;
        this.wrap = opts.father;
        this.interVal = opts.interVal;
        this.init();
    }
    Swiper.prototype.init = function () {
        this.nowIndex = 0;
        this.len = this.img.length;
        this.itemWidth = this.wrap.width();
        this.timer = undefined;
        this.flag = true;
        this.createDom(); // 创建并且插入dom元素
        this.bindEvent(); // 添加点击事件
        this.sliderAuto(); // 自动轮播
    }
    Swiper.prototype.createDom = function () {
        var len = this.len;
        var str = '';
        var listStr = '';
        var w = this.wrap.width();
        var h = this.wrap.height();
        var ulW = w * (len + 1);

        var imgBox = $('<ul class = "imgBox"></ul>');
        var order = $('<div class = "order"></div>');
        var list = $('<ul></ul>')
        imgBox.css({
            'width': ulW + 'px',
            'height': h + 'px'
        });
        var btn = $('<div class="btn"><a href="javaScript:void(0)" class="prevBtn"><span>&lt;</span></a><a href="javaScript:void(0)" class="nextBtn"><span>&gt;</span></a></div>');
        for (var i = 0; i < len; i++) {
            str += '<li><a href = "javaScript:void(0);"><img src = "' + this.img[i] + '"></a></li>';
            listStr += '<li></li>'
        }
        str += '<li><a href = "javaScript:void(0);"><img src = "' + this.img[0] + '"></a></li>';
        $(listStr).appendTo(list);
        $(list).appendTo(order);
        this.wrap.append(imgBox.html(str)).append(btn).append(order);
        imgBox.find('li').css({
            'width': w + 'px',
            'height': h + 'px'
        });
        this.wrap.css({
            'position': 'relative',
            'overflow': 'hidden'
        });
        order.find('li').eq(0).addClass('active');
        // $('*').css({
        //     'margin': '0',
        //     'padding': '0',
        //     'list-style': 'none',
        //     'font-size': '0'
        // });
        // $('.imgBox').css({
        //     'position': 'absolute',
        //     'top': '0',
        //     'left': '0'
        // });
        // $('.imgBox img').css({
        //     'width': '100%',
        //     'height': '100%'
        // });
        // $('.imgBox li').css('display', 'inline-block');
        // btn.css({
        //     'position': 'absolute',
        //     'width': '100%',
        //     'top': '45%',
        //     'display': 'none'
        // });
        // btn.find('a').css({
        //     'position': 'absolute',
        //     'display': 'block',
        //     'width': '30px',
        //     'height': '30px',
        //     'background-color': 'rgba(0, 0, 0, 0.5)'
        // });
        // btn.find('a.prevBtn').css({
        //     'left': '0px',
        //     'border-radius': '0 50 % 50 % 0'
        // });
        // btn.find('a.nextBtn').css({
        //     'right': '0px',
        //     'border-radius': '50% 0 0 50%'
        // })
        // btn.find('a span').css({
        //     'display': 'inline - block',
        //     'width': '10px',
        //     'height': '20px',
        //     'color': '#fff',
        //     'font-size': '20px',
        //     'margin-left': '10px'
        // });
        // order.css({
        //     'position': 'absolute',
        //     'left': '40%',
        //     'bottom': '30px',
        //     'width': '100px',
        //     'text-align': 'center'
        // });
        // order.find('ul').css({
        //     'display': 'inline - block',
        //     'background-color': '#e55',
        //     'border-radius': '5px'
        // });
        // order.find('ul li').css({
        //     'width': '10px',
        //     'height': '10px',
        //     'background-color': '#fff',
        //     'margin': '5px',
        //     'border-radius': '50%',
        //     'display': 'inline - block'
        // });
    }
    Swiper.prototype.bindEvent = function () {
        var self = this;
        $('.order li').add('.prevBtn').add('.nextBtn').on('click', function () {
            if ($(this).attr('class') == 'prevBtn') {
                self.move('prev');
            } else if ($(this).attr('class') == 'nextBtn') {
                self.move('next');
            } else {
                var index = $(this).index();
                self.move(index);
            }
            clearTimeout(self.timer);
        });
        self.wrap.on('mouseenter', function () {
            $('.btn').css('display', 'block');
            clearTimeout(self.timer);
        }).on('mouseleave', function () {
            $('.btn').css('display', 'none');
            self.sliderAuto();
        });
    }
    Swiper.prototype.sliderAuto = function () {
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
            self.move('next');
        }, self.interVal)
    }
    Swiper.prototype.move = function (dir) {
        var self = this;
        var len = self.len;
        if (self.flag) {
            self.flag = false;
            if (dir == 'prev' || dir == 'next') {
                if (dir == 'prev') {
                    if (self.nowIndex == 0) {
                        $('.imgBox').css('left', -(len * self.itemWidth));
                        self.nowIndex = len - 1;
                    } else {
                        self.nowIndex--;
                    }
                } else {
                    if (self.nowIndex == len - 1) {
                        $('.imgBox').animate({
                            left: -(len * self.itemWidth)
                        }, function () {
                            $(this).css('left', '0px');
                        });
                        self.nowIndex = 0;
                    } else {
                        self.nowIndex++;
                    }
                }
            } else {
                self.nowIndex = dir;
            }
            self.slider();
            self.changeActive();
        }
    }
    Swiper.prototype.changeActive = function () {
        var self = this;
        $('.order ul li').eq(self.nowIndex).addClass('active').siblings().removeClass('active');
    }
    Swiper.prototype.slider = function () {
        var self = this;
        $('.imgBox').animate({
            left: -(self.itemWidth * self.nowIndex) + 'px'
        }, function () {
            self.flag = true;
        });
        self.sliderAuto();
    }
    $.fn.extend({
        sliderImg: function (options) {
            options.father = this || $('body');
            new Swiper(options);
        }
    })
})();