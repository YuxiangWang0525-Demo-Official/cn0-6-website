<!--
var xmlHttp;
function createXMLHttpRequest(){if(window.ActiveXObject){xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}else if(window.XMLHttpRequest){xmlHttp=new XMLHttpRequest();}}
function showTv(pageCount){
createXMLHttpRequest();
if(!pageCount){
	pageCount=0;
	}
xmlHttp.onreadystatechange=resurtTv;
xmlHttp.open('GET','/System_Ajax/schoolTv.aspx?Med=show&pageCount='+ pageCount,true);
xmlHttp.send(null);		
document.getElementById("returnPage").style.display='block';		
			}
function resurtTv(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
var tvmes=xmlHttp.responseText;
tvlist=tvmes.split('|||');
if(tvlist[0]=="8"){
document.getElementById("firstTv").innerHTML=tvlist[3];	
document.getElementById("filmList").innerHTML=tvlist[1];
document.getElementById("showPages").innerHTML=tvlist[2];	
}
document.getElementById("returnPage").style.display='none';
}
}
}
//
function playFilm(){
var thisUrl=window.location.toString();
thisUrl=thisUrl.toLowerCase();//转换地址为小写字母
thisUrl=thisUrl.substring(thisUrl.indexOf("#")+1,thisUrl.length);
if(isNaN(thisUrl)||thisUrl==""){
alert("视频载入出错!");
window.location.href='../index.htm'/*tpa=http://www.cn0-6.com/*/;
	}else{
createXMLHttpRequest();
xmlHttp.onreadystatechange=loadurl;
xmlHttp.open('GET','/System_Ajax/schoolTv.aspx?Med=load&F_ID='+thisUrl,true);
xmlHttp.send(null);			
}
}
//
function loadurl(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
var Fileurl=xmlHttp.responseText;
//document.write(Fileurl)
mesValue=Fileurl.split(',');
var s5 = new SWFObject("../flashplayer/FlvPlayerV2009.swf"/*tpa=http://www.cn0-6.com/flashplayer/FlvPlayerV2009.swf*/,"mediaplayer","480","390","8");
s5.addParam("allowfullscreen","true");
s5.addVariable("width","480"); 
s5.addVariable("height","390");
s5.addVariable("image","../flashplayer/images/flash3.jpg"/*tpa=http://www.cn0-6.com/flashplayer/images/flash3.jpg*/);
s5.addVariable("file",mesValue[0]);
s5.addVariable("backcolor","#BAE5FB");
s5.addVariable("frontcolor","0xE2F0FE");
s5.write("flash5");
document.getElementById("filmMes").innerHTML=mesValue[1];	
document.getElementById("titleList").innerHTML=mesValue[2];	
}
}

}
//首页显示校园电视台
function indexShowTv(){
createXMLHttpRequest();
xmlHttp.onreadystatechange=resurtindexShowTv;
xmlHttp.open('GET','http://www.cn0-6.com/System_Ajax/schoolTv.aspx?Med=showindex',true);
xmlHttp.send(null);				
}
function resurtindexShowTv(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
var tvmes=xmlHttp.responseText;
document.getElementById("showSchool").innerHTML=tvmes;	
}
}
}
-->