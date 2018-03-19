// 百度统计
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?330b256883dfa0d319a51e12803461e8";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();
// 百度统计_end

// 站长统计
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1257731576'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1257731576%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
// 站长统计_end

$(function() {
	$(document).scroll(function() {
		/* Act on the event */
		if ($(document).scrollTop() > 200) {
			// scrollTo(0,0);
		}
	});
})
console.log(window.navigator.userAgent);
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
console.log(ua.match(/wxwork/i));
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
                //在微信中打开
        }
        if (ua.match(/WeiBo/i) == "weibo") {
                //在新浪微博客户端打开
        }
        if (ua.match(/wxwork/i) == "weibo") {
                //在新浪微博客户端打开
        }
