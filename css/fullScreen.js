
function lookOut() { 
var heights=window.screen.availHeight-window.screenTop||window.screen.availHeight+window.screenY;
document.getElementById('pageBody').style.height="1px";
document.getElementById('pageBody').style.overflow="hidden";
document.getElementById('showflash').className='showbig';
document.getElementById('showflash').style.height=heights*90/100+"px";
document.getElementById('showflash').style.width=document.body.clientWidth*99/100+"px";
//document.getElementById('quitFull').style.display = "block";
document.getElementById('tuichuA').style.display = "block";
} 
function lookin() { 
document.getElementById('pageBody').style.height="";
document.getElementById('pageBody').style.overflow="";
document.getElementById('showflash').className='showsmall';
document.getElementById('showflash').style.height="395px";
document.getElementById('showflash').style.width="484px";
//document.getElementById('quitFull').style.display = "none";
document.getElementById('tuichuA').style.display = "none";
} 

function fCopyToClicp(id){
 //var a = document.getElementById(id);
 window.clipboardData.setData('text',id + "我觉得这个网站不错哟,进去看看吧。");
 alert("已复制到剪贴板了，你可以粘贴到QQ/MSN上发送给您的好友");
 return false
 }
