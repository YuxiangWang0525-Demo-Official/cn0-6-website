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
function chkUrl(){
var shopID=window.location.toString();
shopID=shopID.toLowerCase();//ת����ַΪСд��ĸ
if(shopID.indexOf("?id=")!=-1){
var tableOBj=document.getElementById("regTable");	
tableOBj.style.position="absolute";
tableOBj.style.width="100%";
tableOBj.style.height="100%";
tableOBj.style.top="0px";
tableOBj.style.background="#eaeaea";
shopID=shopID.substring(shopID.indexOf("?id=")+4,shopID.length);
//document.creator.isvip[0].disabled='disabled';
document.creator.isvip[1].checked='checked';
document.getElementById('schoolbar').disabled='';document.getElementById('classbar').disabled='';
createXMLHttpRequest();
xmlHttp.onreadystatechange=gotoPage;
xmlHttp.open("GET","/System_Ajax/showschool.aspx?Med=showSc&scid="+shopID,true);
xmlHttp.send(null);
document.getElementById('loadsc').style.display='block';
}else{
document.creator.isvip[1].onclick=function(){GetSchool();}	
}
}
//
function GetSchool(){
document.getElementById('schoolbar').disabled='';document.getElementById('classbar').disabled='';
if(document.getElementById('schoolbar').options[document.getElementById('schoolbar').selectedIndex].value==""){
createXMLHttpRequest();
xmlHttp.onreadystatechange=gotoPage;
xmlHttp.open("GET","http://www.cn0-6.com/System_Ajax/showschool.aspx?Med=show",true);
xmlHttp.send(null);
document.getElementById('loadsc').style.display='block';
}
}
function gotoPage(){

if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
	var contents=xmlHttp.responseText;
	wheres=contents.split(":");
	school=wheres[0].split("|");
	classa=wheres[1].split("|");
	var school_id=new Array(school.length);
	for(i=0;i<school.length;i++){
		school_id[i]=school[i].split(",");
		}
	var class_id=new Array(classa.length);
    for(o=0;o<classa.length;o++){
		class_id[o]=classa[o].split(",");
		}
with(document.getElementById('schoolbar')) {
length = school_id.length;
for(k=0;k<school_id.length;k++) { options[k].text = school_id[k][0]; options[k].value = school_id[k][1]; }
}
//
function changeClass(){
with(document.getElementById('classbar')) {
length = 1;
var p=0;
options[selectedIndex].text="��ѡ��༶";
options[selectedIndex].value="";
for(l=0;l<class_id.length-1;l++) { 
if(document.getElementById('schoolbar').options[document.getElementById('schoolbar').selectedIndex].value==class_id[l][1]){
document.getElementById('classbar').options[p].text =class_id[l][2];
document.getElementById('classbar').options[p].value =class_id[l][3]; 
length=length+1;
p++;
}
}
}
};
//
document.getElementById('schoolbar').onchange=changeClass;
changeClass();
document.getElementById('loadsc').style.display='none';
document.getElementById('schoolbar').disabled='';document.getElementById('classbar').disabled='';
}
}
}
function Adduser(){
createXMLHttpRequest();
var isvip="";
for(i=0;i<document.creator.isvip.length;i++){
	if(document.creator.isvip[i].checked)
   isvip=document.creator.isvip[i].value;
	}
if(isvip==""){alert("��ѡ����Ҫע����û�����!");return false;}	
var usertype=document.getElementById('usertype').options[document.getElementById('usertype').selectedIndex].value;
var email=document.getElementById('email').value;
var username=document.getElementById('usernames').value;
var passpwd=document.getElementById('passpwd').value;
var schoolbar=document.getElementById('schoolbar').options[document.getElementById('schoolbar').selectedIndex].value;
var schoolname=document.getElementById('schoolbar').options[document.getElementById('schoolbar').selectedIndex].text;
var classbar=document.getElementById('classbar').options[document.getElementById('classbar').selectedIndex].value;
var classname=document.getElementById('classbar').options[document.getElementById('classbar').selectedIndex].text;
var realname=document.getElementById('realname').value;
var year=document.getElementById('year').options[document.getElementById('year').selectedIndex].value;
var month=document.getElementById('month').options[document.getElementById('month').selectedIndex].value;
var day=document.getElementById('day').options[document.getElementById('day').selectedIndex].value;
var sex="";
for(i=0;i<document.creator.sex.length;i++){
	if(document.creator.sex[i].checked)
   sex=document.creator.sex[i].value;
	}
var province=document.getElementById('province').options[document.getElementById('province').selectedIndex].value;
var city=document.getElementById('city').options[document.getElementById('city').selectedIndex].value;
var tel=document.getElementById('tel').value;
var yzm=document.getElementById('yzm').value;
//���п���
var card1=document.getElementById('card1').value;
var card2=document.getElementById('card2').value;
var card3=document.getElementById('card3').value;
var card4=document.getElementById('card4').value;
var bankCard="";

if(card1!="" && card2!="" && card3!="" && card4!=""){
if(isNaN(card1)||isNaN(card2)||isNaN(card3)||isNaN(card4)||card1!=6226||card2!=3308||card3.length!=4||card4.length!=4){
	//document.getElementById('eorrs').innerHTML="��������ȷ�Ļ��ı���������!";
	alert("��������ȷ�Ļ��ı���������!");
	return false;
	}else{bankCard=card1+card2+card3+card4;}}
//���п���
xmlHttp.onreadystatechange=showresurt; 
var posttext="isvip="+isvip+"&usertype="+usertype+"&email="+email+"&tel="+tel+"&username="+escape(username)+"&passpwd="+passpwd+"&schoolbar="+schoolbar+"&schoolname="+escape(schoolname)+"&classname="+escape(classname)+"&classbar="+classbar+"&realname="+escape(realname)+"&year="+year+"&month="+month+"&day="+day+"&sex="+sex+"&province="+escape(province)+"&city="+escape(city)+"&yzm="+yzm+"&bankCard="+bankCard;
xmlHttp.open('POST','http://www.cn0-6.com/System_Ajax/showschool.aspx?Med=add',true);
xmlHttp.setRequestHeader('Cache-Control','no-cache');
xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
xmlHttp.send(posttext);
document.getElementById('regtip').style.display="block";
document.getElementById('subm').disabled="disabled";
document.getElementById('reset').disabled="disabled";
}
function showresurt(){
if(xmlHttp.readyState==4){
if(xmlHttp.status==200){
	var resurlt=xmlHttp.responseText;
    switch(resurlt){
	  case "0":
	  alert("��֤��ʧЧ����������!");
	  break;
	  case "1":
	  alert("�û����Ѿ�����!");
	  document.getElementById('err1').innerHTML="*";
	  break;
	  case "2":
	  alert("����VIP��֤��Ϣ���󣬲��ܳ�ΪVIP�û�!");
	  break;
	  case "3":
	  alert("���ã�һ����֤�ʼ��Ѿ���������ע������!��ǰ������!\n����������ʣ��������߿ͷ���ϵ!���ȷ����������վ��ҳ!")
	  window.location.replace("../index.htm"/*tpa=http://www.cn0-6.com/*/);
      break;
	  case "4":
	  alert("���ã�һ����֤�ʼ��Ѿ���������ע������!��ǰ������!\n����������ʣ��������߿ͷ���ϵ!���ȷ����������վ��ҳ!")
      window.location.replace("../index.htm"/*tpa=http://www.cn0-6.com/*/);
	  break;
	  default:
	  alert(resurlt);
	   }
	   document.getElementById('regtip').style.display="none";
	   document.getElementById('subm').disabled="";
       document.getElementById('reset').disabled="";
	   refreshImg();
}
}
}

function checkmyform(){
	var eorr="";
	//�û�Email
	var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var val=document.getElementById('email').value;
	if (!email.test(val)) 
{ 
 document.getElementById('err1').innerHTML="*";
 eorr="Email��ַ���Ϸ�!\n";
 document.getElementById('email').focus();
}else{
 document.getElementById('err1').innerHTML="";
} 
//�ǳ�
 var nicheng=document.getElementById('usernames').value;
 var reg=/^[^,\$>'"=+-<#\{\}]+$/;	
	if(nicheng==""||nicheng.length>10||!reg.test(nicheng)){
 document.getElementById('err2').innerHTML="*";
 eorr=eorr+"�ǳư��������ַ��򳤶Ȳ��Ϸ�!\n";
  document.getElementById('usernames').focus();
	}else{
 document.getElementById('err2').innerHTML="";
		}
//	��½����
var pwd=document.getElementById('passpwd').value;
var pass=/^[a-zA-Z\w\d_]{5,20}$/;
if(!pass.test(pwd)){
 document.getElementById('err3').innerHTML="*";
 eorr=eorr+"���볤�Ȼ����ݲ��Ϸ�!\n";
 document.getElementById('passpwd').focus();
	}else{
 document.getElementById('err3').innerHTML="";
		}
//��֤����
if(document.getElementById('repasspwd').value!=document.getElementById('passpwd').value){
	document.getElementById('err4').innerHTML="*";
 eorr=eorr+"������������벻ͬ!\n";
 document.getElementById('repasspwd').focus();
	}else{
	document.getElementById('err4').innerHTML="";	
}
//�ж�VIPѧУ
var isvip="";
for(i=0;i<document.creator.isvip.length;i++){
	if(document.creator.isvip[i].checked)
 isvip=document.creator.isvip[i].value;
	}
if(isvip==1){
if(document.getElementById('schoolbar').options[document.getElementById('schoolbar').selectedIndex].value=="undefined"){
	document.getElementById('err5').innerHTML="*";
	}else{
	document.getElementById('err5').innerHTML="";	
    }
	if(document.getElementById('usertype').options[document.getElementById('usertype').selectedIndex].value=="baby"||document.getElementById('usertype').options[document.getElementById('usertype').selectedIndex].value=="family"){
if(document.getElementById('classbar').options[document.getElementById('classbar').selectedIndex].value==""){
	document.getElementById('err6').innerHTML="*";
	eorr=eorr+"��ѡ�������ڰ༶!\n";
	}else{
	document.getElementById('err6').innerHTML="";	
    }
	}else{//usertype
		document.getElementById('err6').innerHTML="";	
		}
//�ж���ʵ����
   if(document.getElementById('realname').value==""){
	   document.getElementById('err7').innerHTML="*";
	    eorr=eorr+"������������ʵ����!\n";
	   document.getElementById('realname').focus();
	   }else{
	   document.getElementById('err7').innerHTML="";	  
	 }
	}else{
		document.getElementById('err5').innerHTML="";	
		document.getElementById('err6').innerHTML="";	
		}
//�ж��ֻ�����
var regexp=/^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[0-9]\d{8}|18[0-9]\d{8}/;
	var shouji=document.getElementById('tel').value;
	if(shouji!=""){
	if(!regexp.test(shouji)){
		document.getElementById('err10').innerHTML="*";
		eorr=eorr+"����д��ȷ���ֻ���!\n";
		document.getElementById('tel').focus();
		}else{
		document.getElementById('err10').innerHTML="";	  	
	    }
	}
//�жϾ�ס��
if(document.getElementById('province').options[document.getElementById('province').selectedIndex].value==""||document.getElementById('city').options[document.getElementById('city').selectedIndex].value==""){
	 document.getElementById('err8').innerHTML="*";
	 eorr=eorr+"��ѡ�����ľ�ס��!\n";
	}else{
		document.getElementById('err8').innerHTML="";
		}
//�����֤��
var yzcode=document.getElementById('yzm').value;
if(yzcode.length!=5||isNaN(yzcode)){
	document.getElementById('err9').innerHTML="*";
	eorr=eorr+"�������֤�벻�Ϸ�!\n";
	document.getElementById('yzm').focus();
	}else{
	document.getElementById('err9').innerHTML="";	
}
if(eorr!=""){
	alert(eorr);
	return false;
	}else{
	Adduser();
    }
	} 
	//ˢ����֤��
function refreshImg() 
{ 
var di=document.getElementById("YzCode"); 
di.src=di.src+"?"+new Date(); 

}
	//��������
-->
