define(function(){
	return{
		checkName : function(strName){
			var reg = /^(0?(13|14|15|18|17)[0-9]{9})|(\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14})$/;
			if(reg.test(strName)){
				return true;
			}else{
				return false;
			}
		},
		checkPwd :function(strPwd){
			var reg = /^.{6,}$/;
			if(reg.test(strPwd)){
				return true;
			}else{
				return false;
			}
		},
		checkQpwd :function(oldPwd,newPwd){
			if(oldPwd === newPwd){
				return true;
			}else{
				return false;
			}
		}
	}
})