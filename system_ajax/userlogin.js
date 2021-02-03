
var xmlHttp;
function createXMLHttpRequest(){if(window.ActiveXObject){xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}else if(window.XMLHttpRequest){xmlHttp=new XMLHttpRequest();}}
//window.onload=function(){isLogin();}
function isLogin(){createXMLHttpRequest();xmlHttp.onreadystatechange=loadUser;xmlHttp.open("GET","http://www.cn0-6.com/System_Ajax/UserLogin.aspx?Med=",true);xmlHttp.setRequestHeader('Cache-Control','no-cache');xmlHttp.send(null);}
//
function loadUser(){if(xmlHttp.readyState==4){if(xmlHttp.status==200){var result=xmlHttp.responseText;switch(result){ case "0":document.getElementById('logining').style.display="none";document.getElementById('login').style.display="block";document.getElementById('userName').value="";document.getElementById('password').value="";document.getElementById('loginstate').style.display="none"; break; default: document.getElementById('login').style.display="none";document.getElementById('logining').style.display="none";document.getElementById('loginstate').style.display="block";document.getElementById('namestate').innerHTML=result;break;}document.getElementById('loading').style.display="none";document.getElementById('button').disabled="";}}}
//
//
function getAsk(email){
if(email==""){alert("请填写您注册时用的邮箱帐号!");return false;}
createXMLHttpRequest();xmlHttp.onreadystatechange=returnAsk;xmlHttp.open("GET","/System_Ajax/UserLogin.aspx?Med=getAsk&email="+email,true);xmlHttp.setRequestHeader('Cache-Control','no-cache');xmlHttp.send(null);	document.getElementById('ask').innerHTML="<img align='absmiddle' src='../images/loading.gif'/*tpa=http://www.cn0-6.com/images/loading.gif*/ />请稍等,正在获取密保问题...";}
function returnAsk(){if(xmlHttp.readyState==4){if(xmlHttp.status==200){var result=xmlHttp.responseText;
if(result==""){document.getElementById('ask').innerHTML="未填写密保资料,请联系客服!";  }else if(result=="0"){document.getElementById('ask').innerHTML="此用户不存在!";   }else{document.getElementById('ask').innerHTML=result;}}}}
//
function checkAnswer(){var email,ask,answer;email=$("#email").val();ask=$("#ask").html();answer=$("#answer").val();createXMLHttpRequest();xmlHttp.onreadystatechange=returnAnswer;xmlHttp.open("GET","/System_Ajax/UserLogin.aspx?Med=checkAsk&email="+email+"&ask="+ask+"&answer="+answer,true);xmlHttp.setRequestHeader('Cache-Control','no-cache');xmlHttp.send(null);	document.getElementById('Submit').disabled="disabled";document.getElementById('eorrs').innerHTML="<img align='absmiddle' src='../images/loading.gif'/*tpa=http://www.cn0-6.com/images/loading.gif*/ />请稍等,正在处理中...";}
function returnAnswer(){if(xmlHttp.readyState==4){if(xmlHttp.status==200){var result=xmlHttp.responseText;var myarray=result.split(",");if(myarray[0]=="1"){document.getElementById('passRturn').innerHTML=myarray[1];}else{document.getElementById('eorrs').innerHTML=myarray[1];document.getElementById('Submit').disabled="";}}}}	
//
function LoginIn(){createXMLHttpRequest();xmlHttp.onreadystatechange=gotostate;var username=document.getElementById('userName').value;var password=document.getElementById('password').value;var issave="";if(document.getElementById('issave').checked){issave="1";}else{issave="0";	}var posttext="username="+username+"&password="+password+"&issave="+issave;xmlHttp.open('POST','/System_Ajax/UserLogin.aspx?Med=login',true);xmlHttp.setRequestHeader('Cache-Control','no-cache');xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); xmlHttp.send(posttext);document.getElementById('loading').style.display="block";document.getElementById('button').disabled="disabled";}
//
function gotostate(){if(xmlHttp.readyState==4){if(xmlHttp.status==200){var result=xmlHttp.responseText;
  switch(result){
	  case "0":
	  document.getElementById('login').style.display="block";document.getElementById('loginstate').style.display="none";msg("登录提示",1,"240","您的用户名或密码错误！","");document.getElementById('loading').style.display="none"; document.getElementById('button').disabled="";
	  break;
	  case "2":
	  document.getElementById('login').style.display="block";document.getElementById('loginstate').style.display="none";msg("温馨提示",1,"240","您的帐号还未激活,请到注册邮箱查收验证邮件!","isLogin()");document.getElementById('loading').style.display="none"; document.getElementById('button').disabled="";
	  break;
	  case "3":document.getElementById('login').style.display="block"; document.getElementById('loginstate').style.display="none"; msg("登陆提示",1,"240","您的帐号已被冻结,请联系管理员!","");document.getElementById('loading').style.display="none"; document.getElementById('button').disabled=""; break;
	  default:isLogin();break;}}}}
//
function LoginOut(){createXMLHttpRequest();xmlHttp.onreadystatechange=gotostate;xmlHttp.open('GET','http://www.cn0-6.com/System_Ajax/UserLogin.aspx?Med=loginout',true);xmlHttp.setRequestHeader('Cache-Control','no-cache');xmlHttp.send(null);document.getElementById('loading').style.display="block";}
function cao(){alert("1245");}

function correctPNG() {
    for (var i = 0; i < document.images.length; i++) {
        var img = document.images[i];
        var imgName = img.src.toUpperCase();
        if (imgName.substring(imgName.length - 3, imgName.length) == "PNG") {
            var imgID = (img.id) ? "id='" + img.id + "' " : "";
            var imgClass = (img.className) ? "class='" + img.className + "' " : "";
            var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
            var imgStyle = "display:inline-block;" + img.style.cssText;
            if (img.align == "left") imgStyle = "float:left;" + imgStyle;
            if (img.align == "right") imgStyle = "float:right;" + imgStyle;
            if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
            var strNewHTML = "<span " + imgID + imgClass + imgTitle + "style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
+ "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src='" + img.src + "', sizingMethod='scale');\"></span>";
            img.outerHTML = strNewHTML;
            i = i - 1;
        }
    }
}

