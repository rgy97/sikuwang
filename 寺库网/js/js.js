function Slider(id){
	//属性
	this.bigBox = document.getElementById(id);
	//获取所有大图
	this.ullis = this.bigBox.children[0].children;
	//数量
	this.num = this.ullis.length;
	//创建小圆点、左按钮、右按钮、文字信息的div
	this.ollis = this.createEle();
	this.indexA = 0;//当前下标
	this.div = document.getElementById('msg');
	this.slide();
	this.ltBtn = document.getElementById('ltBtn');
	this.rtBtn = document.getElementById('rtBtn');
	this.addEvent();
	this.Timer = null;
	this.autoPlay();
}
Slider.prototype = {
	createEle : function(){
		//ol
		var ol = document.createElement('ol');
		var arr = [];
		for(var i = 0;i < this.num;i++){
			var li = document.createElement('li');
			ol.appendChild(li);
			arr.push(li);
		}
		this.bigBox.appendChild(ol);
		//左
		var lspan = document.createElement('h');
		lspan.innerHTML = "&lt;";
		lspan.id = "ltBtn";
		this.bigBox.appendChild(lspan);
		//右
		var rspan = document.createElement('h');
		rspan.innerHTML = '&gt;';
		rspan.id = 'rtBtn';
		this.bigBox.appendChild(rspan);
		//div
		var div = document.createElement('div');
		div.id = 'msg';
		this.bigBox.appendChild(div);
		//返回所有li
		return arr;
	},
	slide : function(){
		for(var i = 0;i< this.num;i++){
			this.ullis[i].style.display = 'none';
			this.ollis[i].style.backgroundColor = '#999';
		}
		this.ullis[this.indexA].style.display = 'block';
		this.ollis[this.indexA].style.backgroundColor = '#f8a120';
	},
	addEvent :function(){
		var that = this;
		//左
		this.ltBtn.onclick = function(){
			that.indexA --;
			if(that.indexA == -1){
				that.indexA = that.num -1;
			}
			that.slide();
		}
		//右
		this.rtBtn.onclick = function(){
			that.indexA ++;
			if(that.indexA === that.num){
				that.indexA = 0;
			}
			that.slide();
		}
		//圆点
		for(var i = 0;i< this.num;i++){
			//记录当前下标
			this.ollis[i].index = i;
			this.ollis[i].onmouseenter = function(){
				that.indexA = this.index;
				that.slide();
			}
		}
	},
	autoPlay : function(){
		var that = this;
		this.timer = setInterval(function(){
			that.indexA ++;
			if(that.indexA === that.num){
				that.indexA = 0;
			}
			that.slide();
		},1000)
		this.bigBox.onmouseenter = function(){
			clearInterval(that.timer);
			
		}
		this.bigBox.onmouseleave = function(){
			that.autoPlay();
		
		}
	}
}
