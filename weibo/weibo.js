window.onload=function(){
	var oComm=document.getElementById("commBox");
	var oTxt1=oComm.getElementsByClassName("txt1")[0];
	var oBt=oComm.getElementsByClassName("bt")[0];
	var oUl=oComm.getElementsByTagName("ul")[0];
	var oLi=null;

	oBt.onclick=function(){
		if(oTxt1.value!=""){
			oLi=document.createElement("li");
			oLi.innerHTML=oTxt1.value;
			//oUl.appendChild(oLi);作为最后一个元素进行添加。
			oUl.insertBefore(oLi,oUl.firstChild);//这里使用firstChild或者firstElementChild都可以。
			var iLiH=parseInt(getComputedStyle(oLi).height);
			oLi.style.height="0px";
			startMove(oLi,{height:iLiH},15,function(){
				startMove(oLi,{opacity:100},15);
			});
		}
		oTxt1.value="";
	}

}
//var iLiH=parseInt(getComputedStyle(oLi).height);