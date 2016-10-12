var oTimer=null;   //定时器对象初始化
var bDirection=false;  //图片轮播方向判断    false代表向左  true代表向右
window.onload=function(){
	var oUl=document.getElementsByClassName("images")[0].getElementsByTagName("ul")[0];
	var oLi=oUl.getElementsByTagName("li");
	var iSpeed=2;
	oUl.innerHTML+=oUl.innerHTML;  //将轮播图*2，这样视觉上不会出现间断
	oUl.style.width=parseInt(getComputedStyle(oLi[0]).width)*oLi.length+"px";  
	startMove(bDirection,iSpeed);  //开始轮播
	var oBt1=document.getElementsByClassName("bt1")[0];  //向左运动按钮
	var oBt2=document.getElementsByClassName("bt2")[0];  //向右运动按钮

	oBt1.onmouseover=function(){
		
		startMove(false,iSpeed);    //鼠标移入，向左运动
	}
	
	oBt2.onmouseover=function(){
		
		startMove(true,iSpeed);   //鼠标移出，向右运动
	}

	oUl.onmouseover=function(){
		clearInterval(oTimer);    //鼠标移入，停止轮播
	}
	oUl.onmouseout=function(){
		startMove(bDirection,iSpeed);  //鼠标移出，开始轮播
	}
			

	
}

function startMove(direction,iSpeed){
	clearInterval(oTimer);
	bDirection=direction;  //记录当前方向
	var oUl=document.getElementsByClassName("images")[0].getElementsByTagName("ul")[0];
	var oLi=oUl.getElementsByTagName("li");
	oTimer=setInterval(function(){
		var iLeft=parseInt(getComputedStyle(oUl).left);
		var iLwidth=parseInt(getComputedStyle(oLi[0]).width);
		if(bDirection){
			if(iLeft>=0){
				oUl.style.left=-parseInt(getComputedStyle(oUl).width)/2+"px";   //将oUl拉回乘以2倍轮播图的中间
			}
			else{
				oUl.style.left=iLeft+iSpeed+"px";
			}
		}
		else{
			if(iLeft<=-parseInt(getComputedStyle(oUl).width)/2){
				oUl.style.left="0px";   //将oUl拉回起始位置
			}else
			{
				oUl.style.left=iLeft-iSpeed+"px";
			}
		}

		//每滚动一张图片，就暂停0.5s
		if(Math.round(parseInt(getComputedStyle(oUl).left)%parseInt(getComputedStyle(oLi[0]).width)==0)){
			clearInterval(oTimer);
			setTimeout(function(){
				startMove(bDirection,iSpeed);
			},500);
		}
	},30);
}
