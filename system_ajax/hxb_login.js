<!--
var xmlHttp;
function createXMLHttpRequest(){if(window.ActiveXObject){xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}else if(window.XMLHttpRequest){xmlHttp=new XMLHttpRequest();}}

function isLogin(){createXMLHttpRequest();xmlHttp.onreadystatechange=loadUser;xmlHttp.open("GET","http://www.cn0-6.com/System_Ajax/UserLogin.aspx?Med=",true);xmlHttp.setRequestHeader('Cache-Control','no-cache');xmlHttp.send(null);}
//
function loadUser(){if(xmlHttp.readyState==4){if(xmlHttp.status==200){var result=xmlHttp.responseText;switch(result){ case "0":sAlert(); break; default:IscardBind(); break;}}}}

function LoginIn(){
createXMLHttpRequest();
xmlHttp.onreadystatechange=gotostate;
var username=document.getElementById('username').value;
var password=document.getElementById('userpass').value;
var issave="";
if(document.getElementById('isSave').checked){issave="1";}else{issave="0";	}
var posttext="username="+username+"&password="+password+"&issave="+issave;
xmlHttp.open('POST','http://www.cn0-6.com/System_Ajax/UserLogin.aspx?Med=login',true);
xmlHttp.setRequestHeader('Cache-Control','no-cache');
xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
xmlHttp.send(posttext);
document.getElementById('loading').style.display="block";
document.getElementById('Submit').disabled="disabled";
}
function gotostate(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
  var result=xmlHttp.responseText;
  ser=result.split("|");
  switch(ser[0]){
	  case "0":
	  alert("��������û������������");
	  break;
	  default:
	  IscardBind();
	  }
	document.getElementById('loading').style.display="none";
    document.getElementById('Submit').disabled="";  
}
}
}
//����Ƿ��
function IscardBind(){createXMLHttpRequest();xmlHttp.onreadystatechange=bindstate;xmlHttp.open("GET","http://www.cn0-6.com/System_Ajax/cardbind.aspx?Med=isBind",true);xmlHttp.setRequestHeader('Cache-Control','no-cache');xmlHttp.send(null);}
function bindstate(){if(xmlHttp.readyState==4){if(xmlHttp.status==200){var result=xmlHttp.responseText;rearr=result.split('|');switch(rearr[0]){ case "0":if(document.getElementById('bindeorr')){document.getElementById('bindeorr').innerHTML=rearr[1];alert("����û�а󶨻��Ŀ����������а�!");}else{sAlert();} break;case "2":jifenLink=getCookie('jifenlink');window.location.href=jifenLink; break;case "3":alert('���ϴ���ȡ�Ĳ�����δ����,��������������ջ���Ϣ!');location.replace('http://shop.cn0-6.com/Ordersetting.html'); break; default:window.location.replace('diy.html#'+document.getElementById('shopId').value);break;}}}}
function sAlert(){
   var msgw,msgh,bordercolor,str;
   str="<table width='350' height='250' border='0' cellpadding='0' cellspacing='0'><tr><td><div class='alertbg'><table width='100%' style='height:100%;' cellpadding='0' cellspacing='0'><tr><td align='center' valign='middle'><table cellpadding='0' cellspacing='0' width='258'><tr><td align='center' style='height:10px;' colspan='2'></td></tr><tr><td align='center' colspan='2'><span class='STYLE3'>�û�:</span><input id='username' value='�����������ʺ�' onfocus='this.select()' type='text' class='alertinput' name='username' /><br style='line-height:10px;' /><span class='STYLE3'>����:</span><input id='userpass' type='password' class='alertinput' maxlength='16' name='userpass' /></td></tr><tr><td style='font-size:12px; font-weight:normal;text-align:center;color:#333333;height:13px;' colspan='2'><input id='isSave' style='border:0px;' type='checkbox' />�����¼</td></tr><tr><td style='height:13px;color:ff0000;' colspan='2'><p id='bindeorr'></p></td></tr><tr><td colspan='2'><div style='width:220px;float:right'><div id='alertsub' style=' width:68px; float:left;'></div><div style='width:68px; float:left' id='alertclose'></div><div style=' width:65px; float:left'><a href='../register.html'/*tpa=http://www.cn0-6.com/register.html*/ target='_blank' class='register'></a></div><div></td></tr></table></td></tr></table><div id='loading' style='position:absolute; height:30px; font-size:12px; right:0px; padding-top:10px; top:0px; display:none; background:#FFFFCC'><img  src='../App_Themes/Default/Images/loading.gif'/*tpa=http://www.cn0-6.com/App_Themes/Default/Images/loading.gif*/ align='absmiddle' />��¼��...</div></div></td></tr></table>";
   msgw=350;//��ʾ���ڵĿ��
   msgh=250;//��ʾ���ڵĸ߶�
   titleheight=25 //��ʾ���ڱ���߶�
   bordercolor="#3B5998";//��ʾ���ڵı߿���ɫ
   titlecolor="#3B5998";//��ʾ���ڵı�����ɫ
   var sWidth,sHeight;
   sWidth=document.body.clientWidth;//���������������ҳ����
   sHeight=document.body.clientHeight;//��Ļ�߶ȣ���ֱ�ֱ��ʣ�
   
   var bgObj=document.createElement("div");//����һ��div���󣨱����㣩
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#cccccc";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=50,finishOpacity=50);";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   document.body.appendChild(bgObj);//��body����Ӹ�div����

   var msgObj=document.createElement("div")//����һ��div������ʾ��㣩
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   //msgObj.style.background="white";
   //msgObj.style.border="1px solid " + bordercolor;
   msgObj.style.position = "absolute";
   msgObj.style.left = "50%";
   msgObj.style.top = "30%";
   msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
   msgObj.style.marginLeft = "-180px" ;
   msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
   msgObj.style.width = msgw + "px";
   msgObj.style.height =msgh + "px";
   msgObj.style.textAlign = "center";
   msgObj.style.lineHeight ="25px";
   msgObj.style.zIndex = "10001";
  
var button=document.createElement("input");
   button.setAttribute("type","button");
   button.setAttribute("className","alertclose");
   button.setAttribute("class","alertclose");
   button.onclick=function(){removeObj()}
   var button1=document.createElement("input");
   button1.setAttribute("type","button");
   //button1.setAttribute("value","��¼");
   button1.setAttribute("id","Submit");
   button1.setAttribute("className","alertsub");
   button1.setAttribute("class","alertsub");
   button1.onclick=function(){LoginIn()}
   function removeObj(){//����������������¼�
   document.body.removeChild(bgObj);//ɾ��������Div
  // document.getElementById("msgDiv").removeChild(title);//ɾ����ʾ��ı�����
   document.body.removeChild(msgObj);//ɾ����ʾ���
   }
   document.body.appendChild(msgObj);//��body�������ʾ��div����msgObj
 //  document.getElementById("msgDiv").appendChild(title);//����ʾ��div����ӱ���������title
   var txt=document.createElement("p");//����һ��p������ʾ����ʾ��Ϣ��
   //����p�����ԣ����൱��
   //<p style="margin:1em 0;" id="msgTxt">����Ч��</p>
   txt.style.margin="1em 0"
   txt.setAttribute("id","msgTxt");
   txt.innerHTML=str;//��Դ�ں�������ʱ�Ĳ���ֵ
   document.getElementById("msgDiv").appendChild(txt);//����ʾ��div�������ʾ��Ϣ����txt
   document.getElementById("alertsub").appendChild(button1);//����ʾ��div����Ӱ�ť����button
   document.getElementById("alertclose").appendChild(button);//����ʾ��div����Ӱ�ť����button
}
//values
//��ʾ���ر�
var picNum;
function showSel()
{
document.getElementById("showLiSel").innerHTML="<img src=images/li_Sel.gif />";
document.getElementById("showLiSel").style.display="block";
document.getElementById("showList").style.display="none";
}
function showListV()
{
document.getElementById("showLiSel").innerHTML="";
document.getElementById("showLiSel").style.display="none";
document.getElementById("showList").style.display="block";
}

function showFirst(i,picClass)
{
if(i==0)
{
diaoyongImg(i,picClass);
document.getElementById("leftB").innerHTML="";
document.getElementById("rightB").innerHTML="<span onclick=imgAdd("+i+",'"+picClass+"') style=cursor:pointer><img src=images/rightB.jpg border=0 /></span>";
}
}


//����
function imgAdd(i,picClass)
{
i++;
diaoyongImg(i,picClass);
if(i<picNum)
{
document.getElementById("leftB").innerHTML="<span onclick=imgJian("+i+",'"+picClass+"') style=cursor:pointer><img src=images/leftB.jpg border=0 /></span>";
document.getElementById("rightB").innerHTML="<span onclick=imgAdd("+i+",'"+picClass+"') style=cursor:pointer><img src=images/rightB.jpg border=0 /></span>";
}
else
{
document.getElementById("rightB").innerHTML="";
document.getElementById("leftB").innerHTML="<span onclick=imgJian("+i+",'"+picClass+"') style=cursor:pointer><img src=images/leftB.jpg border=0 /></span>";
}
}
//����
function imgJian(i,picClass)
{
i--;
diaoyongImg(i,picClass);
if(i!=0)
{
document.getElementById("leftB").innerHTML="<span onclick=imgJian("+i+",'"+picClass+"') style=cursor:pointer><img src=images/leftB.jpg border=0 /></span>";
document.getElementById("rightB").innerHTML="<span onclick=imgAdd("+i+",'"+picClass+"') style=cursor:pointer><img src=images/rightB.jpg border=0 /></span>";
}
else
{
document.getElementById("leftB").innerHTML="";
document.getElementById("rightB").innerHTML="<span onclick=imgAdd("+i+",'"+picClass+"') style=cursor:pointer><img src=images/rightB.jpg border=0 /></span>";
}
}
//����ͼƬ����
function diaoyongImg(j,picClass)
{
var imgUrl,jifen,imgLink;
switch (picClass)
{
case "makebei":
imgUrl="pic/makebei/0.jpg|pic/makebei/1.jpg|pic/makebei/2.jpg|pic/makebei/3.jpg|pic/makebei/4.jpg|pic/makebei/5.jpg";
jifen="4500";
imgLink="http://shop.cn0-6.com/presentDiy.html#3077|http://shop.cn0-6.com/presentDiy.html#3077|http://shop.cn0-6.com/presentDiy.html#3077|http://shop.cn0-6.com/presentDiy.html#3077|http://shop.cn0-6.com/presentDiy.html#3077|http://shop.cn0-6.com/presentDiy.html#3077";
break;
case "baozheng":
imgUrl="pic/baozheng/0.jpg|pic/baozheng/1.jpg|pic/baozheng/2.jpg|pic/baozheng/3.jpg|pic/baozheng/4.jpg";
jifen="12000";
imgLink="http://shop.cn0-6.com/presentDiy.html#2768|http://shop.cn0-6.com/presentDiy.html#1916|http://shop.cn0-6.com/presentDiy.html#1868|http://shop.cn0-6.com/presentDiy.html#1938|http://shop.cn0-6.com/presentDiy.html#1937";
break;
case "biansebei":
imgUrl="pic/biansebei/1.jpg|pic/biansebei/2.jpg|pic/biansebei/3.jpg|pic/biansebei/4.jpg";
jifen="10000";
imgLink="http://www.cn0-6.com/shop/presentDiy.html#2746|http://www.cn0-6.com/shop/presentDiy.html#2746|http://www.cn0-6.com/shop/presentDiy.html#2746|http://www.cn0-6.com/shop/presentDiy.html#2746";
break;
case "gongzai":
imgUrl="pic/gongzai/0.jpg|pic/gongzai/1.jpg|pic/gongzai/2.jpg|pic/gongzai/3.jpg|pic/gongzai/4.jpg";
jifen="7000";
imgLink="http://shop.cn0-6.com/presentDiy.html#1911|http://shop.cn0-6.com/presentDiy.html#1915|http://shop.cn0-6.com/presentDiy.html#1915|http://shop.cn0-6.com/presentDiy.html#1912|http://shop.cn0-6.com/presentDiy.html#1912";
break;
case "guahua":
imgUrl="pic/guahua/1.jpg|pic/guahua/2.jpg|pic/guahua/3.jpg";
jifen="4000";
imgLink="http://shop.cn0-6.com/presentDiy.html#3195|http://shop.cn0-6.com/presentDiy.html#3195|http://shop.cn0-6.com/presentDiy.html#3194";
break;
case "huazhuangjin":
imgUrl="pic/huazhuangjin/0.jpg|pic/huazhuangjin/1.jpg|pic/huazhuangjin/2.jpg|pic/huazhuangjin/3.jpg|pic/huazhuangjin/4.jpg|pic/huazhuangjin/5.jpg";
jifen="4500";
imgLink="../index.htm"/*tpa=http://www.cn0-6.com/*/;
break;
case "yaoshilian":
imgUrl="pic/yaoshilian/1.jpg|pic/yaoshilian/2.jpg|pic/yaoshilian/3.jpg|pic/yaoshilian/4.jpg|pic/yaoshilian/5.jpg";
jifen="3500";
imgLink="http://shop.cn0-6.com/presentDiy.html#2751";
break;
case "shubiaodian":
imgUrl="";
jifen="";
imgLink="";
break;
case "liangpingtu":
imgUrl="";
jifen="";
imgLink="";
break;
case "zhuobai":
imgUrl="";
jifen="";
imgLink="";
break;
case "gucibei":
imgUrl="";
jifen="";
imgLink="";
break;
case "biansegucibei":
imgUrl="";
jifen="";
imgLink="";
break;
case "shuihu":
imgUrl="";
jifen="";
imgLink="";
break;
}
var imgUrlArry=imgUrl.split('|');
var imgLinkArry=imgLink.split('|');
picNum=imgUrlArry.length-1;
if(picNum!=0){
showListV();
document.getElementById("showImg").src=imgUrlArry[j];
document.getElementById("jifenButton").innerHTML=jifen+"����";
setCookie('jifenCookie',jifen,1);
setCookie('jifenlink',imgLinkArry[j],1);
var isJiFen=getCookie('jifenCookie');
document.getElementById("makeStr").innerHTML="<span onclick=isLogin() style=cursor:pointer><img src=images/li_make.jpg border=0 /></span>";
}
else{alert("�Բ���û�������Ʒ"); return false;}
}
//��ȡcookie
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end));
    } 
  }
return ""
}
//����cookie
//function setCookie(c_name,value,expiredays)
//{
//var url="http://www.cn0-6.com/System_Ajax/cn0-6.com";
//document.cookie=c_name+ "=" +escape(value)+
//((expiredays==null) ? "" :";domain="+url+";path="+'/')
//}
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
var url="http://www.cn0-6.com/System_Ajax/cn0-6.com";
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+";domain="+url+";path="+'/')
}
-->