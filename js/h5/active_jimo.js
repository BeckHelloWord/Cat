$(function () {
    var nameVal = $('.input-name').val();
    var postVal = $('input[name="post"]:checked').val();
    var sexVal = $('input[name="sex"]:checked').val();
    var emotionVal = $('input[name="emotion"]:checked').val();
    var link = window.location.href;
    var ajaxUrl = 'http://www.fm820.com:8006/page/create'

    var pageTitle = $('.page-info-title').text();

    // 初始化头像，分享内容
    var arr1 = [{
        "title": '连单身狗都嫌弃TA',
        "info": "这种淡淡的失落，你大概也曾有过。——之前关系很好的学生，刚毕业那会儿还会经常联系，后来孩子长大了忙了。关于TA的消息只能从朋友圈知道，比如有了稳定的工作，比如有了自己的家庭。"
    },
    {
        "title": '需要被送往孤独星球',
        "info": "这种淡淡的失落，你大概也曾有过。——尽职尽责的老师每天都围着学生转，个人空间不多，社交圈也相对较窄。有时候，看着学生们毕业了年纪轻轻有了另一半，自己反而还孑然一身。"
    },
    {
        "title": '可以加入独孤俱乐部',
        "info": "这种淡淡的失落，你大概也曾有过。——世界那么大，却没时间去看看。看到旅游景点的推荐，好几次满心欢喜地做了旅游计划，最后发现没有人可以同行。"
    },
    {
        "title": '在人群中的存在感为负',
        "info": "去电影院看《匆匆那年》，前后左右都是学生情侣。唯独你像一个仙子一样，矗立在人群中央。"
    },
    {
        "title": '左右手玩石头剪刀布',
        "info": "一个人去看爱情电影，哭的时候递纸的人都没有，幸好提前把纸准备好了，多有先见之明啊。"
    },
    {
        "title": '窝在角落里都要发霉了',
        "info": "圣诞节从来没有收到苹果，另一个女老师收了很多的苹果，没有吃怕放坏了，就给你了一个。一种莫名的心塞感涌上心头。"
    },
    {
        "title": '窝在角落里都要发霉了',
        "info": "所有的光棍节，情人节，以及大大小小的秀恩爱的节日，除了回家就是在办公室加班。碰见人说，你今天怎么没有出去。想杀了对方的心都有了。"
    },
    {
        "title": '窝在角落里都要发霉了',
        "info": "手机短信里面都是10086发来的短信或者是快递发来的短信。每年收到的生日祝福，大多数都是淘宝商家发来的。"
    },
    {
        "title": '窝在角落里都要发霉了',
        "info": "有一次下班，独自回家，一边玩手机，一边走路，不小心撞到树上了，后面的一群路人差点笑疯。"
    },
    {
        "title": '连单身狗都嫌弃TA',
        "info": "想在淘宝上买一件睡衣，搜到款式好看的，都是情侣装。碰见自己喜欢的T-shirt，一样是情侣装，每次都会放到收藏夹里面，然后某一天，链接就失效了。"
    },
    {
        "title": '连单身狗都嫌弃TA',
        "info": "通话记录中，通话最频繁的TOP10，赫然呈现妈，爸，姐，妹......"
    },
    {
        "title": '需要被送往孤独星球',
        "info": "去超市一不小心买的东西太多，一路上歇了八次才把东西带回家。暗暗发誓：以后去超市再也不买这么多东西，以后大部分东西都在某宝上买了。"
    },
    {
        "title": '需要被送往孤独星球',
        "info": "一个人去食堂吃饭，去添米饭回来后，发现清洁阿姨已经把菜给收了。"
    },
    {
        "title": '需要被送往孤独星球',
        "info": "刷知乎和微博的频率，高于玩微信，因为基本上没有人给你发消息，每次看到99+的消息很激动，结果是群消息。"
    },
    {
        "title": '需要被送往孤独星球',
        "info": "发烧，一个人去医院打吊针，还要用手机给自己定时间，怕吊针打完了，自己却睡着了不知道。"
    },
    {
        "title": '可以加入独孤俱乐部',
        "info": "加班太累在公交最后一排睡着了，醒来只剩司机。窗外是陌生的黑暗，不知开往哪里。闲时无人陪伴，生活圈子越来越小。"
    },
    {
        "title": '可以加入独孤俱乐部',
        "info": "当看到朋友圈里一堆晒婚纱照的；当加完班看到别人有男朋友来接的时候；当自己做饭自己吃的时候，突然觉得自己也需要另一个人了。"
    },
    {
        "title": '可以加入百年独孤俱乐部',
        "info": "背了8000个冷笑话，看了三年意林，学会了68个魔术，但是到现在都没有找到女朋友。空负屠龙之技，每日对月长叹。天下无敌又如何，不过寂寞如雪。"
    },
    {
        "title": '可以加入独孤俱乐部',
        "info": "一个人看喜剧片，在空旷的屋子里忍不住大笑，突然停下来的时候好像都能听到自己的回声。"
    },
    {
        "title": '连单身狗都嫌弃TA',
        "info": "一个人去唱KTV，出去取餐的时候有个服务生一直跟着你，怕你不结账跑了。"
    },
    {
        "title": '连单身狗都嫌弃TA',
        "info": "一个人在咖啡馆工作，喝了一大杯咖啡之后想上厕所，但发现没人帮忙看包。"
    },
    {
        "title": '可以加入独孤俱乐部',
        "info": "Single dog, single dog, single all the day. See av, hit the plane, they're doing all the day. Hey! <br>Single dog, single dog, why not be a gay? No more wait, no more afraid, make him be a gay!"
    },
    {
        "title": '连单身狗都嫌弃TA',
        "info": "自己喜欢的帅哥从来都不喜欢自己，因为，那些帅哥……也喜欢帅哥……"
    },
    {
        "title": '可以加入独孤俱乐部',
        "info": "打开许久未用的微博，提醒有21条私信，激动到手抖，结果全是新浪新闻……"
    },
    {
        "title": '在人群中的存在感为负',
        "info": "颜值不够，数量来凑。自拍了千百把来张，好不容易选出一张好看的，然而，并不知道该去勾引谁。"
    },
    {
        "title": '在人群中的存在感为负',
        "info": "第二杯半价从来都没有享受过，有一次享受了，是一个人买了两杯喝了，上了一下午的厕所。之后，就没有之后了。"
    },
    {
        "title": '在人群中的存在感为负',
        "info": "这种淡淡的失落，你大概也曾有过。——在教育机构当老师，周六周日休息的时间很少，仿佛和以前的朋友都有了时差，闲时无人陪伴，生活圈子越来越小。"
    },
    {
        "title": '在人群中的存在感为负',
        "info": "这种淡淡的失落，你大概也曾有过。——在教育机构当老师，周六周日休息的时间很少，仿佛和以前的朋友都有了时差，闲时无人陪伴，生活圈子越来越小。"
    },
    {
        "title": '在人群中的存在感为负',
        "info": "这种淡淡的失落，你大概也曾有过。——在教育机构当老师，周六周日休息的时间很少，仿佛和以前的朋友都有了时差，闲时无人陪伴，生活圈子越来越小。"
    },
    {
        "title": '连单身狗都嫌弃TA',
        "info": "这种淡淡的失落，你大概也曾有过。——在教育机构当老师，周六周日休息的时间很少，仿佛和以前的朋友都有了时差，闲时无人陪伴，生活圈子越来越小。"
    }
    ];
    var arr2 = {
        "男": [{
            url: '/images/person/nan-img1.jpg',
            name: "Andrew",
            age: "23",
            post: "舞蹈教练"
        },
        {
            url: '/images/person/nan-img2.jpg',
            name: "David",
            age: "24",
            post: "视觉设计师"
        },
        {
            url: '/images/person/nan-img3.jpg',
            name: "啊蛮",
            age: "26",
            post: "驻唱歌手"
        },
        {
            url: '/images/person/nan-img4.jpg',
            name: "陈泽宇",
            age: "28",
            post: "数学老师"
        },
        {
            url: '/images/person/nan-img5.jpg',
            name: "华城",
            age: "28",
            post: "英语老师"
        },
        {
            url: '/images/person/nan-img6.jpg',
            name: "霍雨浩",
            age: "29",
            post: "造型师"
        },
        {
            url: '/images/person/nan-img7.jpg',
            name: "金灿",
            age: "29",
            post: "五星饭店厨师长"
        },
        {
            url: '/images/person/nan-img8.jpg',
            name: "李力Nick",
            age: "30",
            post: "大学高数老师"
        },
        {
            url: '/images/person/nan-img9.jpg',
            name: "麦克白",
            age: "30",
            post: "咖啡师"
        },
        {
            url: '/images/person/nan-img10.jpg',
            name: "木木良",
            age: "31",
            post: "平面模特"
        },
        {
            url: '/images/person/nan-img11.jpg',
            name: "欧阳儒",
            age: "31",
            post: "大学辅导员"
        },
        {
            url: '/images/person/nan-img12.jpg',
            name: "秦浩",
            age: "31",
            post: "交警"
        },
        {
            url: '/images/person/nan-img13.jpg',
            name: "时肆",
            age: "31",
            post: "媒体公关"
        },
        {
            url: '/images/person/nan-img14.jpg',
            name: "孙锦",
            age: "31",
            post: "高中物理老师"
        },
        {
            url: '/images/person/nan-img15.jpg',
            name: "吴凡",
            age: "32",
            post: "律师"
        },
        {
            url: '/images/person/nan-img16.jpg',
            name: "徐许",
            age: "33",
            post: "网店店主"
        },
        {
            url: '/images/person/nan-img17.jpg',
            name: "许玖栎",
            age: "34",
            post: "自由撰稿人"
        },
        {
            url: '/images/person/nan-img18.jpg',
            name: "张善斌",
            age: "34",
            post: "初中物理老师"
        },
        {
            url: '/images/person/nan-img19.jpg',
            name: "赵宇",
            age: "35",
            post: "程序员"
        },
        {
            url: '/images/person/nan-img20.jpg',
            name: "周洲瀚",
            age: "35",
            post: "高中数学老师"
        },
        ],
        "女": [{
            url: '/images/person/girl-img1.jpg',
            name: "cindy",
            age: "23",
            post: "公司前台"
        },
        {
            url: '/images/person/girl-img2.jpg',
            name: "kassy",
            age: "24",
            post: "时尚编辑"
        },
        {
            url: '/images/person/girl-img3.jpg',
            name: "啊蛮",
            age: "26",
            post: "驻唱歌手"
        },
        {
            url: '/images/person/girl-img4.jpg',
            name: "kiki",
            age: "28",
            post: "品牌公关"
        },
        {
            url: '/images/person/girl-img5.jpg',
            name: "sarah",
            age: "28",
            post: "广告公司营销总监"
        },
        {
            url: '/images/person/girl-img6.jpg',
            name: "siri",
            age: "29",
            post: "健身教练"
        },
        {
            url: '/images/person/girl-img7.jpg',
            name: "程丽cici",
            age: "29",
            post: "体育老师"
        },
        {
            url: '/images/person/girl-img8.jpg',
            name: "多琳",
            age: "30",
            post: "公司文员"
        },
        {
            url: '/images/person/girl-img9.jpg',
            name: "瀞茹",
            age: "30",
            post: "新媒体编辑"
        },
        {
            url: '/images/person/girl-img10.jpg',
            name: "林又琳",
            age: "31",
            post: "大学辅导员"
        },
        {
            url: '/images/person/girl-img11.jpg',
            name: "萍悦",
            age: "31",
            post: "语文老师"
        },
        {
            url: '/images/person/girl-img12.jpg',
            name: "芮妮酱",
            age: "31",
            post: "咖啡店店主"
        },
        {
            url: '/images/person/girl-img13.jpg',
            name: "姗姗来吃",
            age: "31",
            post: "美食编辑"
        },
        {
            url: '/images/person/girl-img14.jpg',
            name: "宋送",
            age: "31",
            post: "语文老师"
        },
        {
            url: '/images/person/girl-img15.jpg',
            name: "田甜",
            age: "32",
            post: "自然老师"
        },
        {
            url: '/images/person/girl-img16.jpg',
            name: "童小六",
            age: "33",
            post: "行政主管"
        },
        {
            url: '/images/person/girl-img17.jpg',
            name: "王盈",
            age: "34",
            post: "公司高管"
        },
        {
            url: '/images/person/girl-img18.jpg',
            name: "夏夏",
            age: "34",
            post: "自由职业者"
        },
        {
            url: '/images/person/girl-img19.jpg',
            name: "悬又米",
            age: "35",
            post: "美术老师"
        }
        ],
        "其他": [{
            url: '/images/person/other-img1.jpg',
            name: "阿凡达",
            age: "23",
            post: "神秘人",
            gender: '男'
        },
        {
            url: '/images/person/other-img2.jpg',
            name: "奥特曼",
            age: "24",
            post: "和平主义者",
            gender: '男'
        },
        {
            url: '/images/person/other-img3.jpg',
            name: "巴哥1号",
            age: "26",
            post: "高级白领",
            gender: '男'
        },
        {
            url: '/images/person/other-img4.jpg',
            name: "巴哥2号",
            age: "28",
            post: "网红",
            gender: '男'
        },
        {
            url: '/images/person/other-img5.jpg',
            name: "巴哥3号",
            age: "28",
            post: "小鲜肉",
            gender: '男'
        },
        {
            url: '/images/person/other-img6.jpg',
            name: "蝙蝠侠",
            age: "29",
            post: "CEO",
            gender: '男'
        },
        {
            url: '/images/person/other-img7.jpg',
            name: "朝天猪",
            age: "29",
            post: "卖萌专业户",
            gender: '女'
        },
        {
            url: '/images/person/other-img8.jpg',
            name: "大白",
            age: "30",
            post: "治愈型机器人",
            gender: '男'
        },
        {
            url: '/images/person/other-img9.jpg',
            name: "大猩",
            age: "30",
            post: "愤世嫉俗者",
            gender: '男'
        },
        {
            url: '/images/person/other-img10.jpg',
            name: "哆啦B梦",
            age: "31",
            post: "机器人",
            gender: '男'
        },
        {
            url: '/images/person/other-img11.jpg',
            name: "海绵宝宝",
            age: "31",
            post: "海洋生物",
            gender: '男'
        },
        {
            url: '/images/person/other-img12.jpg',
            name: "蓝精灵",
            age: "31",
            post: "网红",
            gender: '女'
        },
        {
            url: '/images/person/other-img13.jpg',
            name: "美男",
            age: "21",
            post: "学生",
            gender: '男'
        },
        {
            url: '/images/person/other-img14.jpg',
            name: "如花",
            age: "31",
            post: "海归高管",
            gender: '女'
        },
        {
            url: '/images/person/other-img15.jpg',
            name: "蜘蛛侠",
            age: "32",
            post: "大学生",
            gender: '男'
        }
        ]
    }

    // 默认分享配置
    var Article = {
        title: generateTitle(),
        descs: '来测测你是不是一个寂寞感爆棚的老师',
        post: 'http://www.fm820.com/images/weixin-icon.jpg',
        urlLink: link
    }
    //音乐自动播放


    // $('.audio-music').get(0).play();
    // autoPlayAudio();

    //我的名字隐藏占位图片
    $('.form-input').on('touchend', function () {
        $('.input-tip').css({
            display: 'none'
        });
    });

    //我的名字获得焦点，隐藏图片
    $('.input-name').on('focus', function () {
        $('.input-tip').css({
            display: 'none'
        });
    });

    //我的名字失去焦点，判断是否有内容控制占位符显示
    $('.input-name').on('blur', function () {
        if ($('.input-name').val() == '') {
            $('.input-tip').css({
                display: 'block'
            });
        }
    });

    //岗位选择
    $('.form-radio1').find('.form-label').on('touchend', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
    });

    //性别选择
    $('.form-radio2').find('.form-label').on('touchend', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
    });

    //感情选择
    $('.form-radio3').find('.form-label').on('touchend', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
    });

    //开始分析按钮
    $('.form-submit').on('touchend', function () {
        // nameVal = $('.input-name').val();
        // var postVal = $('input[name="post"]:checked').val();
        // var sexVal = $('input[name="sex"]:checked').val();
        // var emotionVal = $('input[name="emotion"]:checked').val();
        // var pageVal = 1;
        var obj = {
            nameVal: $('.input-name').val(),
            postVal: $('input[name="post"]:checked').val(),
            sexVal: $('input[name="sex"]:checked').val(),
            emotionVal: $('input[name="emotion"]:checked').val(),
            page: 1
        }


        //判断是否填写了所有信息
        if (obj.nameVal == '' || obj.sexVal == null || obj.postVal == null || obj.emotionVal == null) {
            $('.form-worn').css({
                display: 'block'
            });
            setTimeout(function () {
                $('.form-worn').css({
                    display: 'none'
                });
            }, 2000)
        } else {
            $('.button-default').css({
                opacity: '0'
            });
            $('.button-click').css({
                opacity: '1'
            });
            setTimeout(function () {
                $('.button-default').css({
                    opacity: '1'
                });
                $('.button-click').css({
                    opacity: '0'
                });
            }, 300);

            //上传点击量
            // $.ajax({
            //     type: 'POST',
            //     url: 'http://www.fm820.com:8006/page/create',
            //     data: {
            //         name: nameVal,
            //         job: postVal,
            //         gender: sexVal,
            //         emotion: emotionVal,
            //         page: pageVal
            //     },
            // });
            submitClick(obj,ajaxUrl);
            randomA(arr1);
            // link = window.location.href + '?name=' + nameVal + '&title=' + pageTitle;
            link = window.location.href + '#result';

            //打开第二页
            setTimeout(function () {
                $('.active-page1').css({
                    display: 'none'
                });
                $('.active-page2').css({
                    display: 'block'
                });
                Article = {
                    title: generateTitle(),
                    descs: '来测测你是不是一个寂寞感爆棚的老师',
                    post: 'http://www.fm820.com/images/weixin-icon.jpg',
                    urlLink: link
                }
                // 2
                initWxShare(Article);
            }, 800);

            $('.title-name').html(nameVal);
            $('.container-name').html(nameVal);
            if (sexVal == "男") {
                randomB('女');
                $('.item-btn-girl').show();
                $('.item-btn-boy').hide();
                $('.item-girl').show();
                $('.item-boy').hide();

            } else if (sexVal == "女") {
                randomB('男');
                $('.item-btn-girl').hide();
                $('.item-btn-boy').show();
                $('.item-girl').hide();
                $('.item-boy').show();
            } else {
                var temp_random = randomB('其他');
                console.log(arr2['其他'][temp_random.rand].gender);

                if (arr2['其他'][temp_random.rand].gender == '男') {
                    $('.rand .item-btn-girl').hide();
                    $('.rand .item-btn-boy').show();
                    $('.rand .item-girl').hide();
                    $('.rand .item-boy').show();
                } else {
                    $('.rand .item-btn-girl').show();
                    $('.rand .item-btn-boy').hide();
                    $('.rand .item-girl').show();
                    $('.rand .item-boy').hide();
                }

                if (arr2['其他'][temp_random.leng].gender == '男') {
                    $('.leng .item-btn-girl').hide();
                    $('.leng .item-btn-boy').show();
                    $('.leng .item-girl').hide();
                    $('.leng .item-boy').show();
                } else {
                    $('.leng .item-btn-girl').show();
                    $('.leng .item-btn-boy').hide();
                    $('.leng .item-girl').show();
                    $('.leng .item-boy').hide();
                }
            }
        }
    });
    $('.item-btn-girl, .item-btn-boy').on('touchend', function () {
        window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.junhsue.fm820"
    });

    //再测一遍
    $('.reload-back').on('touchend', function () {
        var obj = {
            name: $('.input-name').val(),
            job: $('input[name="post"]:checked').val(),
            gender: $('input[name="sex"]:checked').val(),
            emotion: $('input[name="emotion"]:checked').val(),
            page: 2
        }
        submitClick(obj, ajaxUrl);
        reLoad();
        // var nameVal = $('.input-name').val();
        // var postVal = $('input[name="post"]:checked').val();
        // var sexVal = $('input[name="sex"]:checked').val();
        // var emotionVal = $('input[name="emotion"]:checked').val();
        // var page1 = 2;
        // reLoad();
        // $.ajax({
        //     type: 'POST',
        //     url: 'http://www.fm820.com:8006/page/create',
        //     data: {
        //         name: nameVal,
        //         job: postVal,
        //         gender: sexVal,
        //         emotion: emotionVal,
        //         page: page1
        //     },
        // }).then(function (res) {
        //     console.log(res);
        //     if (res.errno == 0) {
        //         console.log('ok');
        //     }
        // }, function (err) {
        //     console.log(err);
        // });
    });
    $('.mask-img').on('touchend', function () {
        // alert(222)
        reLoad();
        // $('.active-mask').css({
        //     display: 'none'
        // });
    });
    $('.reload-share').on('touchend', function () {
        // var nameVal = $('.input-name').val();
        // var postVal = $('input[name="post"]:checked').val();
        // var sexVal = $('input[name="sex"]:checked').val();
        // var emotionVal = $('input[name="emotion"]:checked').val();
        // var page2 = 3;
        $('.active-mask').css({
            display: 'block'
        });
        var obj = {
            nameVal: $('.input-name').val(),
            postVal: $('input[name="post"]:checked').val(),
            sexVal: $('input[name="sex"]:checked').val(),
            emotionVal: $('input[name="emotion"]:checked').val(),
            page: 3
        }
        submitClick(obj, ajaxUrl);
        // $.ajax({
        //     type: 'POST',
        //     url: 'http://www.fm820.com:8006/page/create',
        //     data: {
        //         name: nameVal,
        //         job: postVal,
        //         gender: sexVal,
        //         emotion: emotionVal,
        //         page: page2
        //     },
        // }).then(function (res) {
        //     if (res.errno == 0) {
        //         console.log('c');
        //     }
        // }, function (err) {
        //     console.log(err);
        // });
    });



    /**
     * 获得随机分享信息
     * 
     * @param {any} x 
     */
    function randomA(x) {
        var temp = x[parseInt(Math.random() * x.length)];
        $('.page-info-title').html(temp.title);
        $('.page-info-main').html(temp.info);
        pageTitle = $('.page-info-title').text();
    }

    function randomB(x) {
        var rand = parseInt(Math.random() * arr2[x].length);
        var leng = parseInt(Math.random() * arr2[x].length);
        while (rand == leng) {
            leng = parseInt(Math.random() * arr2[x].length);
        }
        $('.cont-item1').addClass('rand').find('.item-person').attr('src', arr2[x][rand].url);
        $('.cont-item1').find('.item-name').html(arr2[x][rand].name);
        $('.cont-item1').find('.item-age').html(arr2[x][rand].age);
        $('.cont-item1').find('.item-post').html(arr2[x][rand].post);

        $('.cont-item2').addClass('leng').find('.item-person').attr('src', arr2[x][leng].url);
        $('.cont-item2').find('.item-name').html(arr2[x][leng].name);
        $('.cont-item2').find('.item-age').html(arr2[x][leng].age);
        $('.cont-item2').find('.item-post').html(arr2[x][leng].post);
        return {
            rand: rand,
            leng: leng
        }
    }

    function reLoad() {
        // $('.active-page1').css({
        //     display: 'block'
        // });
        // $('.active-page2').css({
        //     display: 'none'
        // });
        // $('.input-name').val('');
        // $('input[name="post"]').checked = false;
        // $('input[name="sex"]').checked = false;
        // $('input[name="emotion"]').checked = false;
        // $('.form-radio').find('.form-label').removeClass('cur');
        // $('.input-name').blur();
        window.location.href = window.location.href.split('#')[0];
    }
    $('.item-person, .item-btn-link, .item-link').on('touchend', function () {
        // var nameVal = $('.input-name').val();
        // var postVal = $('input[name="post"]:checked').val();
        // var sexVal = $('input[name="sex"]:checked').val();
        // var emotionVal = $('input[name="emotion"]:checked').val();
        // var page3 = 4;
        var obj = {
            nameVal: $('.input-name').val(),
            postVal: $('input[name="post"]:checked').val(),
            sexVal: $('input[name="sex"]:checked').val(),
            emotionVal: $('input[name="emotion"]:checked').val(),
            page: 4
        }
        submitClick(obj, ajaxUrl);
    });

    //根据hash显示第二页
    if (window.location.hash=='#result') {
        $('.active-page2').css({
            'display': 'block'
        });
        $('.active-page1').css({
            'display': 'none'
        });

    }

    //分享
    initWxShare(Article);

    function generateTitle() {
        if (!nameVal || $('.active-page1').css('display') == 'block') {
            return "一个人的狂欢or一群人的寂寞"
        }
        return "传说老师是个很寂寞的职业，" + nameVal + pageTitle;
    }



    /**
     * 提交用户信息
     * 
     * @param {any} obj :用户信息
     * @param {any} ajaxUrl :地址
     */
    function submitClick(obj, ajaxUrl) {
        $.ajax({
            type: 'POST',
            url: ajaxUrl,
            data: obj,
        }).then(function (res) {
            if (res.errno == 0) {
                console.log('上传成功');
            }
        }, function (err) {
            console.log(err);
        });
    }
})