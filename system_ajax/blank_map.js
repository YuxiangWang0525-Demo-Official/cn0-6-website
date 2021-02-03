var isDrag = false;
function isIE()
	{
		if(navigator.userAgent.indexOf("MSIE")>0)
		{return true;}
		else
		{return false;}
	}
function addListener(element,e,fn)
	{
         if(isIE())
		 {
		    element.attachEvent("on" + e,fn);
          	
         } 
		 else 
		 {
			element.addEventListener(e,fn,false);
         }
	}
function drag(e)
{
	var e = e || window.event;
	var element = e.srcElement || e.target;	
        if(e.preventDefault)e.preventDefault();
        //
        else e.returnValue=false;
	isDrag = true;
	var relLeft = e.clientX - parseInt(element.style.left);
	var relTop = e.clientY - parseInt(element.style.top);
	element.onmouseup = function(){ isDrag = false; }
        //////////////
	document.onmousemove = function(e_move)
		{	
			var e_move = e_move || window.event;
			if(isDrag)
				{
					var newmovex=e_move.clientX - relLeft;
					var newmovey=e_move.clientY - relTop;
					if(newmovex>0)newmovex=0;
					if(newmovex<-1743+769)newmovex=-1743+769;
					if(newmovey>0)newmovey=0;
					if(newmovey<-1308+489)newmovey=-1308+489;
					element.style.left=newmovex + "px";
					element.style.top=newmovey + "px";
					return false;
				}
		}
}
