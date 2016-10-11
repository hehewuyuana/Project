window.onload=function(){
	var oUl=document.getElementById("imgBox");
	var aImg=oUl.getElementsByTagName("img");
	var disX=0; //鼠标与图片横坐标之间的距离
	var disY=0; //鼠标与图片纵坐标之间的距离
	var dis=0;  //鼠标与图片中心点的距离
	document.onmousemove=function(ev){
		for(var i=0;i<aImg.length;i++){
			disX=ev.clientX-(aImg[i].offsetWidth/2+aImg[i].offsetLeft);
			disY=ev.clientY-(aImg[i].offsetHeight/2+aImg[i].offsetTop+oUl.offsetTop);
			dis=Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));
			var scale=1-dis/200;    //根据dis求出图片大小的比例
			if(scale<0.5){
				scale=0.5;
			}
			aImg[i].style.width=128*scale+"px";
		}
	}
	
}