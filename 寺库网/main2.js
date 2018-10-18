//配置模块文件并重命名
requirejs.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"vd" : "validate"
	}
})

//调用模块功能
requirejs(["jquery","vd"],function($,vd){
	//$("body").css("background","teal");
	//具体验证功能  操作页面元素 调用底层具体功能
	$("form").submit(function(){
		if( flagName && flagPwd && flagQpwd ){
			return true;
		}else{
			return false;
		}
	})
	
	//为每一个验证元素添加失去焦点事件
	//验证用户名
	var flagName = null;
	$("#uname").blur(function(){
		var strName = $(this).val();
		if( vd.checkName( strName ) ){
			$("#s1").html( "正确" );
			flagName = true;
		}else{
			$("#s1").html("请输入正确的手机号或邮箱");
			$("#s1").css({"color":"red"});
			$("#uname").css({"border-color":"red"});
			flagName = false;
		}
	})
	
	var flagPwd = null;
	$("#upwd").blur(function(){
	 strPwd = $(this).val();
		if( vd.checkPwd( strPwd ) ){
			$("#s2").html( "正确" );
			flagPwd = true;
		}else{
			$("#s2").html("由6个以上任意数组成");
			$("#s2").css({"color":"red"});
			$("#upwd").css({"border-color":"red"});
			flagPwd = false;
		}
	})
	var flagQpwd = null;
	$("#qpwd").blur(function(){
		var strQpwd = $(this).val();
		if( vd.checkQpwd( strPwd,strQpwd ) ){
			$("#s3").html( "正确" );
			flagQpwd = true;
		}else{
			$("#s3").html("两次密码输入不一致，请重新输入");
			$("#s3").css({"color":"red"});
			$("#qpwd").css({"border-color":"red"});
			flagQpwd = false;
		}
	})
})
 