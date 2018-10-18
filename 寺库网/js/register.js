window.onload = function(){
	var uname = document.getElementById("uname");
	var pwd =document.getElementById("upwd");
	var qpwd=document.getElementById("qpwd");
	var btn = document.getElementById("btn");

//给注册注册点击事件
btn.onclick =function(){
	var name = uname.value;
	var password = pwd.value;
	uname.value ="";
	pwd.value = "";
	//判断用户名和密码是否为空
	if(name && password){
		var date = new Date();
		document.cookie = encodeURIComponent(name) + "=" +password+ ";expires="+date+";path=/";
					alert("注册成功。")
	}else{
					alert("请正确输入！")
		}
	}
}
