window.onload= function(){
	var oBtn = document.getElementById("btn");
	var flag = false;
	var msg = document.getElementById("message");
	var uname = document.getElementById("uname");
	oBtn.onclick = function(){
	var pwd = document.getElementById("upwd");
	var uname = document.getElementById("uname");
		var cookieStr = document.cookie;
		var cookieArr = cookieStr.split(';');
		for(var i = 0 , len = cookieArr.length; i < len; i++){
			var lis = cookieArr[i].split('=')
			if((decodeURIComponent(lis[0]) == uname.value) && (lis[1] == pwd.value)){
				flag =true;
				message.innerHTML ="登录成功"
				return ;s
			}else{
						message.innerHTML = "用户名或密码错误！"
				
		}
   }
}