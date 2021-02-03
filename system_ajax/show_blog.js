<!--
var xmlHttp;
var oMarquee =document.getElementById("mq");
var iLineHeight = 28; 
var iLineCount = 3; //实际行数
var iScrollAmount = 1; //每次滚动高度，像素
function createXMLHttpRequest(){
if(window.ActiveXObject){
xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
else if(window.XMLHttpRequest)
{
xmlHttp=new XMLHttpRequest();
}
}
//
function showblog(Medvalue){
createXMLHttpRequest();
xmlHttp.onreadystatechange=showblogvalues;
xmlHttp.open("GET","/System_Ajax/show_Blog.aspx?Med="+Medvalue,true);
xmlHttp.send(null);
}
function showblogvalues(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
	var resurlt=xmlHttp.responseText;
	MedMes=resurlt.split(",");
    switch(MedMes[0]){
	  case "0":
	  document.getElementById('showcontent1').innerHTML=MedMes[1];
	  break;
	   case "1":
	  document.getElementById('showcontent2').innerHTML=MedMes[1];
	  break;
	   case "2":
	  document.getElementById('showcontent3').innerHTML=MedMes[1];
	  break;
	  case "3":
	  document.getElementById('newbloghead').innerHTML=MedMes[1];
	  document.getElementById('newbloglist').innerHTML=MedMes[2];
	  break;
	  case "4":
	  document.getElementById('bwshow1').innerHTML=MedMes[1];
	  break;
	  case "5":
	  document.getElementById('bwshow2').innerHTML=MedMes[1];
	  break;
	  case "6":
	  document.getElementById('bwshow3').innerHTML=MedMes[1];
	  break;
	  case "7":
	  document.getElementById('blogList').innerHTML=MedMes[1];
	  break;
	  case "king":
	  document.getElementById('kingler').innerHTML=MedMes[1];
	  break;
	  default:
	  alert("页面载入出错!");
	  window.location="../index.htm"/*tpa=http://www.cn0-6.com/*/;
	  break;
	}
}
}
}
//
function run() {
oMarquee.scrollTop += iScrollAmount;

if ( oMarquee.scrollTop == iLineCount * iLineHeight ){ oMarquee.scrollTop = 0;}
if ( oMarquee.scrollTop % iLineHeight == 0 ) {
window.setTimeout( "run()", 5000 );
} else {
window.setTimeout( "run()", 20 );
}
}
-->