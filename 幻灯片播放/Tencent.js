window.onload=function(){
	var oBox=document.getElementById("box");
	var aLi=oBox.getElementsByClassName("picList")[0].getElementsByTagName("li"); //取得所有大图
	var oPicCon=oBox.getElementsByClassName("picContent")[0];  
	var oUl=oBox.getElementsByClassName("icoList")[0]; 
	var aListIco=oUl.getElementsByTagName("li");//取得所有小图
	var aIco=oBox.getElementsByClassName("noclick");//取得三角图标
	var oState=oBox.getElementsByClassName("picState")[0].getElementsByTagName("a")[0];//取得文字说明	
	var oBtL=oBox.getElementsByClassName("bt_l")[0];  //左按钮
	var oBtR=oBox.getElementsByClassName("bt_r")[0];  //右按钮
	var num=0; //小图滚动记录
	
	oPicCon.style.zIndex=2;  //避免小图列表被大图覆盖

	var oTimer=null;  //自动播放的定时器
	var iNow=0;    //代表当前显示的大图
	var rate=8;   //控制小图的滚动熟读
	
	scroll();//开始自动播放
	
	//给每一个小图附加点击事件——点击时显示对应大图
	for(var i=0;i<aListIco.length;i++){
		aListIco[i].index=i;
		aListIco[i].onclick=function(){
			if(getComputedStyle(aLi[this.index]).zIndex=="2"){
				return;
			}
			else{
				for(var j=0;j<aListIco.length;j++){
					aListIco[j].className="";		//小图变暗
					aIco[j].className="noclick";   //三角图标消失
				}
				this.className="first";//小图变亮
				aIco[this.index].className="noclick click";  //三角图标出现
				oState.innerHTML=aState[this.index];  //当前大图对应的文字说明
				
				clearInterval(oTimer);
				for(var a=0;a<aLi.length;a++){
					aLi[a].style.opacity=0;
					aLi[a].style.zIndex=1;
				}
				aLi[this.index].style.zIndex=2;  //避免点击频繁时，图片出现错乱
				startMove(aLi[this.index],{opacity:100},rate);
				iNow=this.index;
				document.title=iNow;
				scroll();  //点击过后自动播放
			}
		}
	}

	//点击左按钮时，小图向左滚动——点击一下滚动一下
	oBtL.onclick=function(){
		var sign=parseInt(getComputedStyle(oUl).left);
		if(num==0){ 
			return;  //到达头部，阻止滚动
		}
		else{
			num--;
			startMove(oUl,{left:(-aListIco[0].offsetWidth-5)*num},rate);
		}
	}
	//点击右按钮时，小图向右滚动——点击一下滚动一下
	oBtR.onclick=function(){
		var sign=parseInt(getComputedStyle(oUl).left);
		if(num==7){
			return; //到达尾部，阻止滚动
		}
		else{
			num++;
			startMove(oUl,{left:(-aListIco[0].offsetWidth-5)*num},rate);
		}
	}

	//鼠标移入幻灯片时，停止自动播放
	oBox.onmouseover=function(){
		clearInterval(oTimer);
	}
	//鼠标离开幻灯片时，开始自动播放
	oBox.onmouseout=function(){
		clearInterval(oTimer);
		scroll();
	}
	


//图片内容数组
var aState=["《武则天秘史》[至22集]姐姐与皇上偷情，媚娘抓奸在床..",
			"《无底洞》金钱、美女、权利、复仇等欲望让人不可自拔...",
			"《巴黎宝贝》邓超巴黎当奶爸，上演基情、卖萌、跨国恋..",
			"我的女儿是花儿》[至3集]“富二代”冰王子恋上贫家女..",
			"《法证先锋3》[至26集]写字楼惊现“女僵尸”尸体！",
			"非常了得》孟非郭德纲大曝台下私生活，内地Hold姐来挑战",
			"第二届九分钟电影11月20日独家首映 视觉盛宴恭迎各位看官",
			"《快女微电影》 洪辰脸伤痊愈 快女微电影收官作复拍",
			"《称心如意》京城第一“育婴男”Hold住全场 萝莉热舞走光",
			"《男人帮》[全30集]悲喜双响炮，一个完美结局",
			"《辛亥革命》成龙、赵文瑄、李冰冰、胡歌演绎革命腥风血雨",
			"《李献计历险记》房祖名患差时症为寻女友开启超时空冒险",
			"Justin bieber女友动感热单全球首发。",
			"第八届中国（重庆）国际园林博览会"
];  
	


//自动播放时的函数
	function scroll(){
		oTimer=setInterval(function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].style.opacity=0;
			}
			iNow++;
			if(iNow==aLi.length){
				iNow=0;
			}
			startMove(aLi[iNow],{opacity:100},rate);//将要显示的大图透明度设置为1，其他为0

		for(var j=0;j<aListIco.length;j++){
					aListIco[j].className="";   //小图变暗
					aIco[j].className="noclick";   //三角图标消失
			}
			aListIco[iNow].className="first";    //小图变亮
			aIco[iNow].className="noclick click";   //三角图标出现
			oState.innerHTML=aState[iNow];   //当前大图对应的文字说明
			
			//小图滚动
			if(iNow>=7&&iNow<14){
				startMove(oUl,{left:(-aListIco[0].offsetWidth-5)*(iNow-6)},rate);
			}
			else if(iNow==0){
				startMove(oUl,{left:0},rate);
			}
		},2000);
	}

}