
<!--
var xmlHttp;
function createXMLHttpRequest(){
if(window.ActiveXObject){
xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
else if(window.XMLHttpRequest)
{
xmlHttp=new XMLHttpRequest();
}
}
function GetVoid(id){
createXMLHttpRequest();
xmlHttp.onreadystatechange=goVoids;
xmlHttp.open("GET","/System_Ajax/InputVoid.aspx?Med=show&id="+id,true);
xmlHttp.send(null);
}
function goVoids(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
	document.getElementById('showVoid').innerHTML="我看不错,顶一下<br /><font style='color:#B41609;font-weight:bold'>("+xmlHttp.responseText+")</font>";
}
}	
}
function AddVoid(id){
createXMLHttpRequest();
xmlHttp.onreadystatechange=showPage;
xmlHttp.open("GET","/System_Ajax/InputVoid.aspx?Med=add&id="+id,true);
xmlHttp.send(null);
}
function showPage(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
document.getElementById('showVoid').innerHTML="感谢您的参与！<br /><font style='color:#B41609;font-weight:bold'>("+xmlHttp.responseText+")</font>"; 
document.getElementById('onVoid').onclick=function(){return  false;};
}
}
}
-->


