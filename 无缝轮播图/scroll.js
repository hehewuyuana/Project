window.onload=function(){
	var oImgScr=document.getElementById("imgScroll");
	var oImgBox=oImgScr.getElementsByClassName("imgBox")[0];
	var aLi=oImgBox.getElementsByTagName("li"); //每张轮播图
	var aIcon=oImgScr.getElementsByClassName("icon")[0].getElementsByTagName("img"); //每个小图标
	var oLeft=oImgScr.getElementsByClassName("left")[0]; //向左按钮
	var oRight=oImgScr.getElementsByClassName("right")[0]; //向右按钮
	
	oImgBox.innerHTML+=oImgBox.innerHTML;  //为了实现无缝轮播效果
	oImgBox.style.width=aLi[0].offsetWidth*aLi.length+"px";

	aIcon[0].src="images/hover.png"; 
	var rate=7; //k控制轮播熟读
	var time=3000; //每隔多少秒显示一张图片
	var oTimer=null; //设置定时器对象
	var bDire=true; //记录轮播方向   true代表向左    false代表向右
	var num=0;  //记录当前是第几张图片

	//开始轮播
	oTimer=setInterval(function(){
		startSport(bDire);
	},time);
	
	//点击左按钮，立即向左滚动一张图片，轮播方向变为左
	oLeft.onclick=function(){
		clearInterval(oTimer);
		startSport(true);
		oTimer=setInterval(function(){
			startSport(bDire);
		},time);
	}

	//点击右按钮，立即向右滚动一张图片，轮播方向变为右
	oRight.onclick=function(){
		clearInterval(oTimer);
		startSport(false);
		oTimer=setInterval(function(){
			startSport(bDire);
		},time);
	}
	
	//点击哪个小图标，显示与之相对应的图片
	for(var i=0;i<aIcon.length;i++){
		aIcon[i].index=i;
		aIcon[i].onclick=function(){
			for(var j=0;j<aIcon.length;j++){
				aIcon[j].src="images/out.png";
			}
			this.src="images/hover.png";
			clearInterval(oTimer);
			startMove(oImgBox,{left:-aLi[0].offsetWidth*this.index},rate)
			oTimer=setInterval(function(){
				startSport(oDire);
			},time);
		}	
	}

	//图片轮播函数
	function startSport(sign){
		bDire=sign; //确定轮播方向
		if(bDire){
			if(num==7){
				oImgBox.style.left=0+"px";
				num=1;
				startMove(oImgBox,{left:-aLi[0].offsetWidth*num},rate);
				
				//显示图片对应小图标
				for(var a=0;a<aIcon.length;a++){
					aIcon[a].src="images/out.png";
				}
				aIcon[1].src="images/hover.png";
			}
			else{
				num++;
				startMove(oImgBox,{left:-aLi[0].offsetWidth*num},rate);
				
				//显示图片对应小图标
				for(var a=0;a<aIcon.length;a++){
					aIcon[a].src="images/out.png";
				}
				if(num==7){
					aIcon[0].src="images/hover.png";
				}
				else{
					aIcon[num].src="images/hover.png";
				}
			} 
		}
		else{
			if(num==0){
				oImgBox.style.left=-aLi[0].offsetWidth*7+"px";
				num=6;
				startMove(oImgBox,{left:-aLi[0].offsetWidth*num},rate);
				
				//显示图片对应小图标
				for(var a=0;a<aIcon.length;a++){
					aIcon[a].src="images/out.png";
				}
				aIcon[6].src="images/hover.png";
			}
			else{
				num--;
				startMove(oImgBox,{left:-aLi[0].offsetWidth*num},rate);
				
				//显示图片对应小图标
				for(var a=0;a<aIcon.length;a++){
					aIcon[a].src="images/out.png";
				}
				aIcon[num].src="images/hover.png";
				
			} 
		}
			
	}

}
