function startMove(oMove,json,fn){
	clearInterval(oMove.oTimer);
	oMove.oTimer=setInterval(function(){
		var iCur=0;
		var bStop=true;
		for(var attr in json){
			if(attr=="opacity"){
				iCur=parseInt(parseFloat(getComputedStyle(oMove)[attr])*100);
			}
			else{
				iCur=parseInt(getComputedStyle(oMove)[attr]);
			}

			var iSpeed=(json[attr]-iCur)/3;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

			if(iCur!==json[attr]){
				bStop=false;
			}
			if(attr=="opacity"){
				oMove.style[attr]=(iCur+iSpeed)/100;
			}
			else{
				oMove.style[attr]=iCur+iSpeed+"px";
			}
		}

		if(bStop){
			clearInterval(oMove.oTimer);

			if(fn){
				fn();
			}
		}
	},30);
}