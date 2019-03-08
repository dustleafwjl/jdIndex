
// 轮播图插件
$('#imgSlider').sliderImg({
    image: ['../img/pic1.jpg', '../img/pic2.jpg', '../img/pic3.jpg'],
    interVal: 1500
});

// 地址插件
$('#location').areaList({
    items: [{
        name: '北京',
        href: '#'
    },
    {
        name: '上海',
        href: '#'
    },
    {
        name: '天津',
        href: '#'
    },
    {
        name: '重庆',
        href: '#'
    },
    {
        name: '河北',
        href: '#'
    },
    {
        name: '山西',
        href: '#'
    },
    {
        name: '河南',
        href: '#'
    },
    {
        name: '辽宁',
        href: '#'
    },
    {
        name: '吉林',
        href: '#'
    },
    {
        name: '黑龙江',
        href: '#'
    },
    {
        name: '内蒙古',
        href: '#'
    },
    {
        name: '山东',
        href: '#'
    },
    {
        name: '安徽',
        href: '#'
    },
    {
        name: '浙江',
        href: '#'
    },
    {
        name: '福建',
        href: '#'
    },
    {
        name: '湖北',
        href: '#'
    },
    {
        name: '湖南',
        href: '#'
    },
    {
        name: '广东',
        href: '#'
    },
    {
        name: '广西',
        href: '#'
    },
    {
        name: '江西',
        href: '#'
    },
    {
        name: '四川',
        href: '#'
    },
    {
        name: '贵州',
        href: '#'
    },
    {
        name: '西藏',
        href: '#'
    },
    {
        name: '陕西',
        href: '#'
    },
    {
        name: '甘肃',
        href: '#'
    },
    {
        name: '青海',
        href: '#'
    },
    {
        name: '宁夏',
        href: '#'
    },
    {
        name: '新疆',
        href: '#'
    },
    {
        name: '港澳',
        href: '#'
    },
    {
        name: '台湾',
        href: '#'
    },
    {
        name: '钓鱼岛',
        href: '#'
    },
    {
        name: '海外',
        href: '#'
    }
    ],
    nowItemImg: '../img/local.jpg'
});

$('#search-list').baidulist({a:123});

// 导航条下拉列表插件
$('#myJd').dropList({
    dirction: 'y',
    coloNum: 2,
    meauList: [{
        title: '',
        items: [{href: '#', name: '待处理订单'},{href: '#', name: '返修退换货'},{href: '#', name: '降价商品'},{href: '#', name: '消息'},{href: '#', name: '我的问答'},{href: '#', name: '我的关注'}]
    },{
        title: '',
        items: [{href: '#', name: '我的京豆'},{href: '#', name: '我的白条'},{href: '#', name: '我的优惠券'},{href: '#', name: '我的理财'}]
    }]
});

$('#webD').dropList({
    dirction: 'x',
    coloNum: 3,
    meauList: [{
        title: '特色',
        items: [{href: '#', name: '企业购'},{href: '#', name: '京东金融'},{href: '#', name: '全球售'}, {href: '#', name: '工业品'}]
    },{
        title: '特色',
        items: [{href: '#', name: '企业购'},{href: '#', name: '京东金融'},{href: '#', name: '全球售'}, {href: '#', name: '工业品'}]
    },{
        title: '特色',
        items: [{href: '#', name: '企业购'},{href: '#', name: '京东金融'},{href: '#', name: '全球售'}, {href: '#', name: '工业品'}]
    }]
});

$('#comSell').dropList({
    dirction: 'y',
    coloNum: 2,
    meauList: [{
        title: '',
        items: [{href: '#', name: '待处理订单'},{href: '#', name: '返修退换货'},{href: '#', name: '降价商品'},{href: '#', name: '消息'},{href: '#', name: '我的问答'},{href: '#', name: '我的关注'}]
    },{
        title: '',
        items: [{href: '#', name: '我的京豆'},{href: '#', name: '我的白条'},{href: '#', name: '我的优惠券'},{href: '#', name: '我的理财'}]
    }]
});
// 左侧动画
$('#meaulist').on('mouseenter', 'li', function () {
    var cate = $(this).attr('date-index');
    $('.cate_part').css('display', 'none');
    $('.popCtn').css('display', 'block');
    $('#cate_item' + cate).css('display', 'block');
}).on('mouseleave', 'li', function () {
    $('.popCtn').css('display', 'none');
});
$('.popCtn').on('mouseenter', function () {
    $('.popCtn').css('display', 'block');
}).on('mouseleave', function () {
    $('.popCtn').css('display', 'none');
});
// 右侧滑动动画
$('.service_entry .row1').hover(function () {
    $('.service_entry').slideUp();
    $('.service_content').slideDown();
});
$('.service .close').on('click', function () {
    $('.service_entry').slideDown();
    $('.service_content').slideUp();
});
$('.service_content .service_header span').hover(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.service_content .content').hide();
    $('.'+ $(this).attr('data') +'_content').show();
});