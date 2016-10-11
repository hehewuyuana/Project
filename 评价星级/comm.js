window.onload=function(){
	var aStar=document.getElementById("comm_star").getElementsByTagName("img");
	var oState=document.getElementById("comm_star").getElementsByClassName("state")[0];
	var aState=["非常不满意，您的评价是1分","不满意，您的评价是2分","一般，您的评价是3分","满意，您的评价是4分","非常满意，您的评价是5分"];
	
	for(var i=0;i<aStar.length;i++){
		aStar[i].index=i;    //设置索引
		aStar[i].onmouseover=function(){
			this.style.marginTop="-29px";    //五角星变黄
			oState.innerHTML=aState[this.index];   //评价内容
			
			//当前五角星前面的五角星都变黄
			for(var n=this.index;n>0;n--){
				aStar[n].style.marginTop="-29px";   
			}
			
			//当前五角星后面的五角星都变白
			for(var m=this.index+1;m<aStar.length;m++){
				aStar[m].style.marginTop="0px";   
			}
		}	
	}
}