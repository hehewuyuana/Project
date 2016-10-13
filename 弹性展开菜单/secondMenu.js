window.onload=function(){
	var oMenu=document.getElementById("menu");
	var aLi=document.getElementsByClassName("first_nav"); //每一个一级菜单菜单项
	var oUl=aLi[0].getElementsByTagName("ul")[0];  //一级菜单项下的二级菜单
	var iH1=parseInt(getComputedStyle(aLi[0]).height);//一级菜单项的高度
	var iH2=parseInt(getComputedStyle(oUl).height);//二级菜单的高度
	
	
	//给每一个一级菜单项添加一个点击后显示二级菜单的事件
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].flag=true;   //判断当前菜单项是展开（true）还是收缩（false） 
		aLi[i].onclick=function(){
				//展开操作
			if(this.flag){
				//展开当前菜单项的二级菜单，收缩其他项的二级菜单
				for(var j=0;j<aLi.length;j++){
					if(j!=this.index){
						aLi[j].flag=true;
					}
					clearInterval(aLi[j].oTimer);
					startMove(aLi[j],{height:iH1},8);
				}
				springMove(this,"height",iH1+iH2);
				this.flag=false;
			}
			   //收缩操作
			else{
				clearInterval(this.oTimer);
				startMove(this,{height:iH1},8);	
				this.flag=true;
			}
	
		}	
	}
}

//弹性运动函数
var iSpeed=0;
function springMove(oMove,attr,iTarget){
	clearInterval(oMove.oTimer);
	oMove.oTimer=setInterval(function(){
		var iCur=parseInt(getComputedStyle(oMove)[attr]);
		iSpeed+=(iTarget-iCur)/5;
		iSpeed*=0.7;

		if(Math.abs(iSpeed)<1&&Math.abs(iTarget-iCur)<1){
			clearInterval(oMove.oTimer);
			oMove.style[attr]=iTarget+"px";
		}
		else{
			oMove.style[attr]=iCur+iSpeed+"px";
		}
	},30);
}
