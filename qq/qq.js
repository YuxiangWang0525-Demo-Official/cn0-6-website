// JavaScript Document
lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 

document.getElementById("lovexin14").style.top=parseInt(document.getElementById("lovexin14").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}
function CloseQQ()
{
divStayTopleft.style.display="none";
return true; 
}

suspendcode14 = "<DIV id=\"lovexin14\" style='right:1%;POSITION:absolute;TOP:30%;'><TABLE cellSpacing=0 cellPadding=0 border=0 width=100 border=0><TBODY><TR><TD style='padding-bottom:7px'><a href=http://play.cn0-6.com/play/ target=_blank ><img border=0 SRC=qq/qinda.jpg></a></td></tr><TR><TD style='padding-bottom:7px'><a href=http://play.cn0-6.com/hd.asp target=_blank ><img border=0 SRC=qq/yinkou.jpg></a></td></tr><tr><td style='padding-bottom:7px'><a href=wanmei/404.htm target=_blank ><img border=0 SRC=qq/wanmei.jpg></a></td></tr><tr><td style='padding-bottom:7px'><a href=wanmei/pingbi/index.aspx target=_blank ><img border=0 SRC=qq/pingbi.jpg></a></td></tr><tr><td style='padding-bottom:7px;text-align:right;'><span style='text-align:right;cursor:pointer;' onclick='coloseI()'>关闭</span></td></tr></TBODY></TABLE></div>"
//document.write(suspendcode14); 
//window.setInterval("heartBeat()",1);

function coloseI()
{
document.getElementById("lovexin14").style.display="none";
}
