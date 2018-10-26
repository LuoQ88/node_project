/* 复用头部 */
define(["jquery"], function($){
    function Header() {
		this.load();
    }
    Header.prototype ={
        constructor: Header,
		// 加载头部与尾部
		load: function() {
			// 头部
			// $.get("/html/include/header.html", this.headerHandler.bind(this));
			$.get("/html/header.html", $.proxy(this.headerHandler, this));

			// 头部
			// $("footer").load("/html/include/footer.html");
		},
		// 处理头部加载完成后的任务
		headerHandler: function(data) {
			// 将读取到的头部复用HTML渲染到 <header> 内部
			$("header").html(data);
			// // 注册事件监听
			// this.addListener();
			// 判断是否有登录成功的用户信息，有则渲染显示
			// this.loadLoginUser();
		},
		// loadLoginUser: function() {
		// 	$.cookie.json = true;
		// 	var user = $.cookie("login-user"); // 如果不能读取到 cookie 则返回 undefined
		// 	if (user) // 有登录用户
		// 		$(".link-login").parent("li").html(`<a href="#">${user}</a> <a href="#" class="logout">退出</a>`);
		// }
    }
    // 创建加载头部尾部实例
	new Header();
});