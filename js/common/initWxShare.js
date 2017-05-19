/**
 * Created by vinchan on 2017/5/12.
 */

/**
 * 微信分享,需要提前引入 微信 js_sdk
 */


function initWxShare(Article, shareSuccessCb) {

    var data = {
        title: Article.title,
        descs: Article.descs,
        post: Article.post,
        link: Article.urlLink
    };


    var url_link = data.link ? data.link : location.href.split('#')[0];

    $.ajax({
        url: 'http://www.fm820.com/index.php/wx/api_post_wxshare_params',
        type: "POST",
        data: {
            url: url_link
        }
    }).then(function(res) {

        try {
            res = JSON.parse(res);
        } catch (e) {
            res = {};
            console.log(e);
        }

        wx && wx.config({
            debug: /debug/.test(location.search) ? true : false,
            appId: "wx6f8c2e9c6f1edafd",
            timestamp: res.timeSamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
        });



        // 初始化绑定
        wx.ready(function() {

            wx.checkJsApi({
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function(res) {
                    console.log(res, "检测结果");
                }
            });

            var shareData = {
                title: data.title, // 分享出去的标题
                imgUrl: data.post, //分享出去的图标
                link: url_link, // 分享出去的链接地址
                desc: data.descs, //分享描述
                success: function() {

                    // 分享成功过的统计
                    shareSuccessCb && shareSuccessCb();

                    // 确认分享的回调
                    console.log("分享成功");
                },
                cancel: function() {
                    console.log("分享失败");
                }
            };

            // 绑定分享事件
            // shareTo(shareData);

            wx.onMenuShareTimeline(shareData);


            wx.onMenuShareAppMessage(shareData);

            wx.error(function(res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                console.log(res, "config错误");
            });

        });

    }, function(err) {
        console.log(err);
    });


}