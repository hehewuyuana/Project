//缓冲运动框架
function startMove(oMove,json,rate,fn){
	clearInterval(oMove.oTimer);
	oMove.oTimer=setInterval(function(){
		var iCur=0;
		var bFlag=true;
		for(var attr in json){
			if(attr=="opacity"){
				iCur=parseInt(parseFloat(getComputedStyle(oMove)[attr])*100);
			}
			else{
				iCur=parseInt(getComputedStyle(oMove)[attr]);
			}

			var iSpeed=(json[attr]-iCur)/rate;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			if(iCur!=json[attr]){
				bFlag=false;		
			}
			if(attr=="opacity"){
				oMove.style[attr]=(iCur+iSpeed)/100;
			}
			else{
				oMove.style[attr]=iCur+iSpeed+"px";
			}
		}

		if(bFlag){
			clearInterval(oMove.oTimer);
			if(fn){
				fn();
			}
		}
	},30);
}