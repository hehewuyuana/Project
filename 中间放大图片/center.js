//用面向对象的思想来写js

window.onload=function(){
	new EnlargeImg("imgBox");
}
function EnlargeImg(id){
	var oDiv=document.getElementById(id);   //接收传入的id名  
	this.aLi=oDiv.getElementsByTagName("li");
	this.j=1;
	var _this=this;   //将当前this赋给变量
	
	for(var i=0;i<this.aLi.length;i++){
		 //取得当前<li>的left和top
		this.aLi[i].style.left=this.aLi[i].offsetLeft+"px";   
		this.aLi[i].style.top=this.aLi[i].offsetTop+"px";    
	}
	for(var j=0;j<this.aLi.length;j++){
		//将当前<li>设置为绝对定位
		this.aLi[j].style.margin="0px";
		this.aLi[j].style.position="absolute";    
			this.aLi[j].onmouseover=function(){
			_this.big(this);   //鼠标移入<li>的width和height从中间放大
		}
		this.aLi[j].onmouseout=function(){
			_this.small(this);  //鼠标移出<li>变回原样
		}
	}

}

//<li>变大函数
EnlargeImg.prototype.big=function (li){
	li.style.zIndex=++this.j;   //确保放大的图片在所有图片之上
	startMove(li,{width:300,height:225,marginLeft:-115,marginTop:-77},5);
}

//<li>变回原样函数
EnlargeImg.prototype.small=function (li){
	startMove(li,{width:70,height:70,marginLeft:0,marginTop:0},5);
}