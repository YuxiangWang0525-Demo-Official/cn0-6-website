/*
CalendarWebControl.show(this, 是否显示时间, 日期时间字符串);
*/

function atCalendarControl(){
  var calendar=this;
  this.calendarPad=null;
  this.prevMonth=null;
  this.nextMonth=null;
  this.prevYear=null;
  this.nextYear=null;
  this.goToday=null;
  this.calendarClose=null;
  this.calendarAbout=null;
  this.head=null;
  this.body=null;
  this.today=[];
  this.currentDate=[];
  this.sltDate;
  this.target;
  this.source;

  /************** 加入日历底板及阴影 *********************/
  this.addCalendarPad=function(){
   document.write("<div id='divCalendarpad' style='position:absolute;top:100;left:0;width:255;height:187;display:none;'>");
   document.write("<iframe frameborder=0 height=189 width=250></iframe>");
   document.write("<div style='position:absolute;top:2;left:2;width:250;height:187;background-color:#336699;'></div>");
   document.write("</div>");
   calendar.calendarPad=document.all.divCalendarpad;
  }
  /************** 加入日历面板 *********************/
  this.addCalendarBoard=function(){
   var BOARD=this;
   var divBoard=document.createElement("div");
   calendar.calendarPad.insertAdjacentElement("beforeEnd",divBoard);
   divBoard.style.cssText="position:absolute;top:0;left:0;width:250;height:187;border:0 outset;background-color:buttonface;";

   var tbBoard=document.createElement("table");
   divBoard.insertAdjacentElement("beforeEnd",tbBoard);
   tbBoard.style.cssText="position:absolute;top:2;left:2;width:248;height:10;font-size:9pt;";
   tbBoard.cellPadding=0;
   tbBoard.cellSpacing=1;

  /************** 设置各功能按钮的功能 *********************/
   /*********** Calendar About Button ***************/
   trRow = tbBoard.insertRow(0);
   //calendar.calendarAbout=calendar.insertTbCell(trRow,0,"帮助","center");
   calendar.calendarAbout=calendar.insertTbCell(trRow,0,decodeURIComponent("%E5%B8%AE%E5%8A%A9"),"center");
   //calendar.calendarAbout.title="帮助 快捷键:H";
   calendar.calendarAbout.title=decodeURIComponent("%E5%B8%AE%E5%8A%A9%20%E5%BF%AB%E6%8D%B7%E9%94%AE:H");
   calendar.calendarAbout.onclick=function(){calendar.about();}
   /*********** Calendar Head ***************/
   tbCell=trRow.insertCell(1);
   tbCell.colSpan=5;
   tbCell.bgColor="#99CCFF";
   tbCell.align="center";
   tbCell.style.cssText = "cursor:default";
   calendar.head=tbCell;
   /*********** Calendar Close Button ***************/
   tbCell=trRow.insertCell(2);
   //calendar.calendarClose = calendar.insertTbCell(trRow,2,"关闭","center");
   calendar.calendarClose = calendar.insertTbCell(trRow,2,decodeURIComponent("%E5%85%B3%E9%97%AD"),"center");
   //calendar.calendarClose.title="关闭 快捷键:ESC或X";
   calendar.calendarClose.title=decodeURIComponent("%E5%85%B3%E9%97%AD%20%E5%BF%AB%E6%8D%B7%E9%94%AE:ESC%E6%88%96X");
   calendar.calendarClose.onclick=function(){calendar.hide();}

   /*********** Calendar PrevYear Button ***************/
   trRow = tbBoard.insertRow(1);
   //calendar.prevYear = calendar.insertTbCell(trRow,0,"上年","center");
   calendar.prevYear = calendar.insertTbCell(trRow,0,decodeURIComponent("%E4%B8%8A%E5%B9%B4"),"center");
   //calendar.prevYear.title="上一年 快捷键:↑";
   calendar.prevYear.title=decodeURIComponent("%E4%B8%8A%E4%B8%80%E5%B9%B4%20%E5%BF%AB%E6%8D%B7%E9%94%AE:%E2%86%91");
   calendar.prevYear.onmousedown=function(){
    calendar.currentDate[0]--;
	calendar.calculateSltDate();
    calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
   }
   /*********** Calendar PrevMonth Button ***************/
   //calendar.prevMonth = calendar.insertTbCell(trRow,1,"上月","center");
   calendar.prevMonth = calendar.insertTbCell(trRow,1,decodeURIComponent("%E4%B8%8A%E6%9C%88"),"center");
   //calendar.prevMonth.title="上一月 快捷键:←";
   calendar.prevMonth.title=decodeURIComponent("%E4%B8%8A%E4%B8%80%E6%9C%88%20%E5%BF%AB%E6%8D%B7%E9%94%AE:%E2%86%90");
   calendar.prevMonth.onmousedown=function(){
    calendar.currentDate[1]--;
    if(calendar.currentDate[1]==0){
     calendar.currentDate[1]=12;
     calendar.currentDate[0]--;
    }
    calendar.calculateSltDate();
    calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
   }
   /*********** Calendar Today Button ***************/
   //calendar.goToday = calendar.insertTbCell(trRow,2,"今天","center",3);
   calendar.goToday = calendar.insertTbCell(trRow,2,decodeURIComponent("%E4%BB%8A%E5%A4%A9"),"center",3);
   //calendar.goToday.title="选择今天 快捷键:T";
   calendar.goToday.title=decodeURIComponent("%E9%80%89%E6%8B%A9%E4%BB%8A%E5%A4%A9%20%E5%BF%AB%E6%8D%B7%E9%94%AE:T");
   calendar.goToday.onclick=function(){
	 calendar.setDefaultDate();
	 calendar.currentDate=calendar.today;
	 calendar.calculateSltDate();
	 calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
	 calendar.hide();
   }
   /*********** Calendar NextMonth Button ***************/
   //calendar.nextMonth = calendar.insertTbCell(trRow,3,"下月","center");
   calendar.nextMonth = calendar.insertTbCell(trRow,3,decodeURIComponent("%E4%B8%8B%E6%9C%88"),"center");
   //calendar.nextMonth.title="下一月 快捷键:→";
   calendar.nextMonth.title=decodeURIComponent("%E4%B8%8B%E4%B8%80%E6%9C%88%20%E5%BF%AB%E6%8D%B7%E9%94%AE:%E2%86%92");
   calendar.nextMonth.onmousedown=function(){
    calendar.currentDate[1]++;
    if(calendar.currentDate[1]==13){
     calendar.currentDate[1]=1;
     calendar.currentDate[0]++;
    }
    calendar.calculateSltDate();
    calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
   }
   /*********** Calendar NextYear Button ***************/
   //calendar.nextYear = calendar.insertTbCell(trRow,4,"下年","center");
   calendar.nextYear = calendar.insertTbCell(trRow,4,decodeURIComponent("%E4%B8%8B%E5%B9%B4"),"center");
   //calendar.nextYear.title="下一年 快捷键:↓";
   calendar.nextYear.title=decodeURIComponent("%E4%B8%8B%E4%B8%80%E5%B9%B4%20%E5%BF%AB%E6%8D%B7%E9%94%AE:%E2%86%93");
   calendar.nextYear.onmousedown=function(){
    calendar.currentDate[0]++;
    calendar.calculateSltDate();
    calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);

   }

   trRow = tbBoard.insertRow(2);
   //var cnDateName = new Array("日","一","二","三","四","五","六");
   var cnDateName = new Array(decodeURIComponent("%E6%97%A5"),decodeURIComponent("%E4%B8%80"),decodeURIComponent("%E4%BA%8C"),decodeURIComponent("%E4%B8%89"),decodeURIComponent("%E5%9B%9B"),decodeURIComponent("%E4%BA%94"),decodeURIComponent("%E5%85%AD"));
   for (var i = 0; i < 7; i++) {
    tbCell=trRow.insertCell(i)
    tbCell.innerText=cnDateName[i];
    tbCell.align="center";
    tbCell.width=35;
    tbCell.style.cssText="cursor:default;border:1 solid #99CCCC;background-color:#99CCCC;";
   }

   /*********** Calendar Body ***************/
   trRow = tbBoard.insertRow(3);
   tbCell=trRow.insertCell(0);
   tbCell.colSpan=7;
   tbCell.height=97;
   tbCell.vAlign="top";
   tbCell.bgColor="#F0F0F0";
   
   var tbBody=document.createElement("table");
   tbCell.insertAdjacentElement("beforeEnd",tbBody);
   tbBody.style.cssText="position:relative;top:0;left:0;width:245;height:103;font-size:9pt;"
   tbBody.cellPadding=0;
   tbBody.cellSpacing=1;
   calendar.body=tbBody;
	
   /*********** Time Body ***************/
   trRow = tbBoard.insertRow(4);
   tbCell=trRow.insertCell(0);
   //calendar.prevHours = calendar.insertTbCell(trRow,0,"-小时","center");
   calendar.prevHours = calendar.insertTbCell(trRow,0,decodeURIComponent("-%E5%B0%8F%E6%97%B6"),"center");
   //calendar.prevHours.title="上一小时 快捷键:Home";
   calendar.prevHours.title=decodeURIComponent("%E4%B8%8A%E4%B8%80%E5%B0%8F%E6%97%B6%20%E5%BF%AB%E6%8D%B7%E9%94%AE:Home");
   calendar.prevHours.onmousedown=function(){
		calendar.currentDate[3]--;
		if(calendar.currentDate[3]==-1) calendar.currentDate[3]=23;
		calendar.calculateSltDate();
		calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
	}
   tbCell=trRow.insertCell(1);
   //calendar.nextHours = calendar.insertTbCell(trRow,1,"+小时","center");
   calendar.nextHours = calendar.insertTbCell(trRow,1,decodeURIComponent("+%E5%B0%8F%E6%97%B6"),"center");
   //calendar.nextHours.title="下一小时 快捷键:End";
   calendar.nextHours.title=decodeURIComponent("%E4%B8%8B%E4%B8%80%E5%B0%8F%E6%97%B6%20%E5%BF%AB%E6%8D%B7%E9%94%AE:End");
   calendar.nextHours.onmousedown=function(){
		calendar.currentDate[3]++;
		if(calendar.currentDate[3]==24) calendar.currentDate[3]=0;
		calendar.calculateSltDate();
		calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
	}
   tbCell=trRow.insertCell(2);
   tbCell.colSpan=3;
   tbCell.bgColor="#99CCFF";
   tbCell.align="center";
   tbCell.style.cssText = "cursor:default";
   calendar.bottom=tbCell;
   tbCell=trRow.insertCell(3);
   //calendar.prevMinutes = calendar.insertTbCell(trRow,3,"-分钟","center");
   calendar.prevMinutes = calendar.insertTbCell(trRow,3,decodeURIComponent("-%E5%88%86%E9%92%9F"),"center");
   //calendar.prevMinutes.title="上一分钟 快捷键:PageUp";
   calendar.prevMinutes.title=decodeURIComponent("%E4%B8%8A%E4%B8%80%E5%88%86%E9%92%9F%20%E5%BF%AB%E6%8D%B7%E9%94%AE:PageUp");
   calendar.prevMinutes.onmousedown=function(){
		calendar.currentDate[4]--;
		if(calendar.currentDate[4]==-1) calendar.currentDate[4]=59;
		calendar.calculateSltDate();
		calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
	}
   tbCell=trRow.insertCell(4);
   //calendar.nextMinutes = calendar.insertTbCell(trRow,4,"+分钟","center");
   calendar.nextMinutes = calendar.insertTbCell(trRow,4,decodeURIComponent("+%E5%88%86%E9%92%9F"),"center");
   //calendar.nextMinutes.title="下一分钟 快捷键:PageDown";
   calendar.nextMinutes.title=decodeURIComponent("%E4%B8%8B%E4%B8%80%E5%88%86%E9%92%9F%20%E5%BF%AB%E6%8D%B7%E9%94%AE:PageDown");
   calendar.nextMinutes.onmousedown=function(){

		calendar.currentDate[4]++;
		if(calendar.currentDate[4]==60) calendar.currentDate[4]=0;
		calendar.calculateSltDate();
		calendar.show(calendar.target,calendar.returnTime,calendar.sltDate,calendar.source);
	}

}
  
/************** 加入功能按钮公共样式 *********************/
  this.insertTbCell=function(trRow,cellIndex,TXT,trAlign,tbColSpan){
   var tbCell=trRow.insertCell(cellIndex);
   if(tbColSpan!=undefined) tbCell.colSpan=tbColSpan;

   var btnCell=document.createElement("button");
   tbCell.insertAdjacentElement("beforeEnd",btnCell);
   btnCell.value=TXT;
   btnCell.style.cssText="width:100%;border:1 outset;background-color:buttonface;";
   btnCell.onmouseover=function(){
   btnCell.style.cssText="width:100%;border:1 outset;background-color:#F0F0F0;";

   }
   btnCell.onmouseout=function(){
    btnCell.style.cssText="width:100%;border:1 outset;background-color:buttonface;";
   }
  // btnCell.onmousedown=function(){
  //  btnCell.style.cssText="width:100%;border:1 inset;background-color:#F0F0F0;";
  // }
   btnCell.onmouseup=function(){
    btnCell.style.cssText="width:100%;border:1 outset;background-color:#F0F0F0;";
   }
   btnCell.onclick=function(){
    btnCell.blur();
   }
   return btnCell;
  }
  
  this.setDefaultDate=function(){
   var dftDate=new Date();
   calendar.today[0]=dftDate.getYear();
   calendar.today[1]=dftDate.getMonth()+1;
   calendar.today[2]=dftDate.getDate();
   calendar.today[3]=dftDate.getHours();
   calendar.today[4]=dftDate.getMinutes();
  }

  /****************** Show Calendar *********************/
  this.show=function(targetObject,returnTime,defaultDate,sourceObject){
   if(targetObject==undefined) {
    //alert("未设置目标对象. \n方法: ATCALENDAR.show(obj 目标对象,boolean 是否返回时间,string 默认日期,obj 点击对象);\n\n目标对象:接受日期返回值的对象.\n默认日期:格式为\"yyyy-mm-dd\",缺省为当前日期.\n点击对象:点击这个对象弹出calendar,默认为目标对象.\n");
	alert(decodeURIComponent("%E6%9C%AA%E8%AE%BE%E7%BD%AE%E7%9B%AE%E6%A0%87%E5%AF%B9%E8%B1%A1.%20\n%E6%96%B9%E6%B3%95:%20ATCALENDAR.show(obj%20%E7%9B%AE%E6%A0%87%E5%AF%B9%E8%B1%A1,boolean%20%E6%98%AF%E5%90%A6%E8%BF%94%E5%9B%9E%E6%97%B6%E9%97%B4,string%20%E9%BB%98%E8%AE%A4%E6%97%A5%E6%9C%9F,obj%20%E7%82%B9%E5%87%BB%E5%AF%B9%E8%B1%A1);\n\n%E7%9B%AE%E6%A0%87%E5%AF%B9%E8%B1%A1:%E6%8E%A5%E5%8F%97%E6%97%A5%E6%9C%9F%E8%BF%94%E5%9B%9E%E5%80%BC%E7%9A%84%E5%AF%B9%E8%B1%A1.\n%E9%BB%98%E8%AE%A4%E6%97%A5%E6%9C%9F:%E6%A0%BC%E5%BC%8F%E4%B8%BA%5C%22yyyy-mm-dd%5C%22,%E7%BC%BA%E7%9C%81%E4%B8%BA%E5%BD%93%E5%89%8D%E6%97%A5%E6%9C%9F.\n%E7%82%B9%E5%87%BB%E5%AF%B9%E8%B1%A1:%E7%82%B9%E5%87%BB%E8%BF%99%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%BC%B9%E5%87%BAcalendar,%E9%BB%98%E8%AE%A4%E4%B8%BA%E7%9B%AE%E6%A0%87%E5%AF%B9%E8%B1%A1.\n"));
    return false;
   }
   else calendar.target=targetObject;
   
   if(sourceObject==undefined) calendar.source=calendar.target;
   else calendar.source=sourceObject;

   if(returnTime) calendar.returnTime=true;
   else calendar.returnTime=false;

   var firstDay;
   var Cells=new Array();
   if((defaultDate==undefined) || (defaultDate=="")){
    var theDate=new Array();
    calendar.head.innerText = calendar.today[0]+"-"+calendar.formatTime(calendar.today[1])+"-"+calendar.formatTime(calendar.today[2]);
    calendar.bottom.innerText = calendar.formatTime(calendar.today[3])+":"+calendar.formatTime(calendar.today[4]);
	
    theDate[0]=calendar.today[0]; theDate[1]=calendar.today[1]; theDate[2]=calendar.today[2];
	theDate[3]=calendar.today[3]; theDate[4]=calendar.today[4];
   }
   else{
    var Datereg=/^\d{4}-\d{1,2}-\d{2}$/
    var DateTimereg=/^(\d{1,4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/
    if((!defaultDate.match(Datereg)) && (!defaultDate.match(DateTimereg))){
     //alert("默认日期(时间)的格式不正确！\t\n\n默认可接受格式为:\n1、yyyy-mm-dd \n2、yyyy-mm-dd hh:mm\n3、(空)");
	 alert(decodeURIComponent("%E9%BB%98%E8%AE%A4%E6%97%A5%E6%9C%9F(%E6%97%B6%E9%97%B4)%E7%9A%84%E6%A0%BC%E5%BC%8F%E4%B8%8D%E6%AD%A3%E7%A1%AE%EF%BC%81\t\n\n%E9%BB%98%E8%AE%A4%E5%8F%AF%E6%8E%A5%E5%8F%97%E6%A0%BC%E5%BC%8F%E4%B8%BA:\n1%E3%80%81yyyy-mm-dd%20\n2%E3%80%81yyyy-mm-dd%20hh:mm\n3%E3%80%81(%E7%A9%BA)"));
	 calendar.setDefaultDate();
     return;
    }
	
	if(defaultDate.match(Datereg)) defaultDate=defaultDate+" "+calendar.today[3]+":"+calendar.today[4];
	var strDateTime=defaultDate.match(DateTimereg);
	var theDate=new Array(4)
	theDate[0]=strDateTime[1];
	theDate[1]=strDateTime[2];
	theDate[2]=strDateTime[3];
	theDate[3]=strDateTime[4];
	theDate[4]=strDateTime[5];
    calendar.head.innerText = theDate[0]+"-"+calendar.formatTime(theDate[1])+"-"+calendar.formatTime(theDate[2]);
    calendar.bottom.innerText = calendar.formatTime(theDate[3])+":"+calendar.formatTime(theDate[4]);
   }
   if (returnTime == false){
	   calendar.bottom.parentNode.style.display="none";
   }else{
	   calendar.bottom.parentNode.style.display="";
   }
   calendar.currentDate[0]=theDate[0];
   calendar.currentDate[1]=theDate[1];
   calendar.currentDate[2]=theDate[2];
   calendar.currentDate[3]=theDate[3];
   calendar.currentDate[4]=theDate[4];
   
   theFirstDay=calendar.getFirstDay(theDate[0],theDate[1]);
   theMonthLen=theFirstDay+calendar.getMonthLen(theDate[0],theDate[1]);
   //calendar.setEventKey();

   calendar.calendarPad.style.display="";
   var theRows = Math.ceil((theMonthLen)/7);
   //清除旧的日历;
   while (calendar.body.rows.length > 0) {
    calendar.body.deleteRow(0)
   }
   //建立新的日历;
   var n=0;day=0;
   for(i=0;i<theRows;i++){
    theRow=calendar.body.insertRow(i);
    for(j=0;j<7;j++){
     n++;
     if(n>theFirstDay && n<=theMonthLen){
      day=n-theFirstDay;
      calendar.insertBodyCell(theRow,j,day);
     }

     else{
      var theCell=theRow.insertCell(j);
      theCell.style.cssText="background-color:#F0F0F0;cursor:default;";
     }
    }
   }

   //****************调整日历位置**************//
   var offsetPos=calendar.getAbsolutePos(calendar.source);//计算对象的位置;
   if((document.body.offsetHeight-(offsetPos.y+calendar.source.offsetHeight-document.body.scrollTop))<calendar.calendarPad.style.pixelHeight){
    var calTop=offsetPos.y-calendar.calendarPad.style.pixelHeight;
   }
   else{
    var calTop=offsetPos.y+calendar.source.offsetHeight;
   }
   if((document.body.offsetWidth-(offsetPos.x+calendar.source.offsetWidth-document.body.scrollLeft))>calendar.calendarPad.style.pixelWidth){
    var calLeft=offsetPos.x;
   }
   else{
    var calLeft=calendar.source.offsetLeft+calendar.source.offsetWidth;
   }
   //alert(offsetPos.x);
   calendar.calendarPad.style.pixelLeft=calLeft;
   calendar.calendarPad.style.pixelTop=calTop;
  }
  /****************** 计算sltDate *************************/
  this.calculateSltDate = function() {
   if(calendar.returnTime)  
	    calendar.sltDate=calendar.currentDate[0]+"-"+calendar.formatTime(calendar.currentDate[1])+"-"+calendar.formatTime(calendar.currentDate[2])+" "+calendar.formatTime(calendar.currentDate[3])+":"+calendar.formatTime(calendar.currentDate[4]);
   else
	    calendar.sltDate=calendar.currentDate[0]+"-"+calendar.formatTime(calendar.currentDate[1])+"-"+calendar.formatTime(calendar.currentDate[2]);
   calendar.target.value=calendar.sltDate;
	//alert(calendar.sltDate);
  };
  /****************** 计算对象的位置 *************************/
  this.getAbsolutePos = function(el) {
   var r = { x: el.offsetLeft, y: el.offsetTop };
   if (el.offsetParent) {
    var tmp = calendar.getAbsolutePos(el.offsetParent);
    r.x += tmp.x;
    r.y += tmp.y;
   }
   return r;
  };

  //************* 插入日期单元格 **************/
  this.insertBodyCell=function(theRow,j,day,targetObject){
   var theCell=theRow.insertCell(j);
   if(j==0) var theBgColor="#FF9999";
   else var theBgColor="#FFFFFF";
   if(day==calendar.currentDate[2]) var theBgColor="#CCCCCC";
   if(day==calendar.today[2]) var theBgColor="#99FFCC";
   theCell.bgColor=theBgColor;
   theCell.innerText=day;
   theCell.align="center";
   theCell.width=35;
   theCell.style.cssText="border:1 solid #CCCCCC;cursor:hand;";
   theCell.onmouseover=function(){ 
    theCell.bgColor="#FFFFCC"; 
    theCell.style.cssText="border:1 outset;cursor:hand;";
   }
   theCell.onmouseout=function(){ 
    theCell.bgColor=theBgColor; 
    theCell.style.cssText="border:1 solid #CCCCCC;cursor:hand;";
   }
   theCell.onmousedown=function(){ 
    theCell.bgColor="#FFFFCC"; 
    theCell.style.cssText="border:1 inset;cursor:hand;";
   }
   theCell.onclick=function(){
	 if(calendar.returnTime)  
	    calendar.sltDate=calendar.currentDate[0]+"-"+calendar.formatTime(calendar.currentDate[1])+"-"+calendar.formatTime(day)+" "+calendar.formatTime(calendar.currentDate[3])+":"+calendar.formatTime(calendar.currentDate[4])
	 else
	    calendar.sltDate=calendar.currentDate[0]+"-"+calendar.formatTime(calendar.currentDate[1])+"-"+calendar.formatTime(day);
    calendar.target.value=calendar.sltDate;
    calendar.hide();
   }
  }
  /************** 取得月份的第一天为星期几 *********************/
  this.getFirstDay=function(theYear, theMonth){
   var firstDate = new Date(theYear,theMonth-1,1);
   return firstDate.getDay();
  }
  /************** 取得月份共有几天 *********************/

  this.getMonthLen=function(theYear, theMonth) {
   theMonth--;
   var oneDay = 1000 * 60 * 60 * 24;
   var thisMonth = new Date(theYear, theMonth, 1);
   var nextMonth = new Date(theYear, theMonth + 1, 1);
   var len = Math.ceil((nextMonth.getTime() - thisMonth.getTime())/oneDay);
   return len;
  }
  /************** 隐藏日历 *********************/
  this.hide=function(){
   //calendar.clearEventKey();
   calendar.calendarPad.style.display="none";
   
  }
  /************** 从这里开始 *********************/
  this.setup=function(defaultDate){
   calendar.addCalendarPad();
   calendar.addCalendarBoard();
   calendar.setDefaultDate();
  }
  /************** 格式化时间 *********************/
 this.formatTime = function(str) {
  str = ("00"+str);
  return str.substr(str.length-2);
 }

/************** 关于AgetimeCalendar *********************/
  this.about=function(){
   //var strAbout ="\n操作方式:\n选择好年月和时间后点击日期确定并关闭控件\n\n";
   var strAbout =decodeURIComponent("\n%E6%93%8D%E4%BD%9C%E6%96%B9%E5%BC%8F:\n%E9%80%89%E6%8B%A9%E5%A5%BD%E5%B9%B4%E6%9C%88%E5%92%8C%E6%97%B6%E9%97%B4%E5%90%8E%E7%82%B9%E5%87%BB%E6%97%A5%E6%9C%9F%E7%A1%AE%E5%AE%9A%E5%B9%B6%E5%85%B3%E9%97%AD%E6%8E%A7%E4%BB%B6\n\n");
   //strAbout+="ESC或X\t  : 关闭控件\n";
   strAbout+=decodeURIComponent("ESC%E6%88%96X\t%20%20:%20%E5%85%B3%E9%97%AD%E6%8E%A7%E4%BB%B6\n");
   //strAbout+="↑\t  : 上一年\n";
   strAbout+=decodeURIComponent("%E2%86%91\t%20%20:%20%E4%B8%8A%E4%B8%80%E5%B9%B4\n");
   //strAbout+="←\t  : 上一月\n";
   strAbout+=decodeURIComponent("%E2%86%90\t%20%20:%20%E4%B8%8A%E4%B8%80%E6%9C%88\n");
   //strAbout+="T\t  : 选择今天\n";
   strAbout+=decodeURIComponent("T\t%20%20:%20%E9%80%89%E6%8B%A9%E4%BB%8A%E5%A4%A9\n");
   //strAbout+="→\t  : 下一月\n";
   strAbout+=decodeURIComponent("%E2%86%92\t%20%20:%20%E4%B8%8B%E4%B8%80%E6%9C%88\n");
   //strAbout+="↓\t  : 下一年\n";
   strAbout+=decodeURIComponent("%E2%86%93\t%20%20:%20%E4%B8%8B%E4%B8%80%E5%B9%B4\n");
   
   //strAbout+="Home\t  : 上一小时\n";
   strAbout+=decodeURIComponent("Home\t%20%20:%20%E4%B8%8A%E4%B8%80%E5%B0%8F%E6%97%B6\n");
   //strAbout+="End\t  : 下一小时\n";
   strAbout+=decodeURIComponent("End\t%20%20:%20%E4%B8%8B%E4%B8%80%E5%B0%8F%E6%97%B6\n");
   //strAbout+="PageUp\t  : 上一分钟\n";
   strAbout+=decodeURIComponent("PageUp\t%20%20:%20%E4%B8%8A%E4%B8%80%E5%88%86%E9%92%9F\n");
   //strAbout+="PageDown : 下一分钟\n";
   strAbout+=decodeURIComponent("PageDown%20:%20%E4%B8%8B%E4%B8%80%E5%88%86%E9%92%9F\n");
   alert(strAbout);
  }
  
document.onkeydown=function(){
	if(calendar.calendarPad==null || calendar.calendarPad==undefined || calendar.calendarPad.style.display=="none"){
		window.event.returnValue= true;
		return true ;
	}
	switch(window.event.keyCode){
		case 27 : calendar.hide(); break; //ESC
		case 37 : calendar.prevMonth.onmousedown(); break;//←
		case 38 : calendar.prevYear.onmousedown();break; //↑
		case 39 : calendar.nextMonth.onmousedown(); break;//→
		case 40 : calendar.nextYear.onmousedown(); break;//↓
		case 84 : calendar.goToday.onclick(); break;//T
		case 88 : calendar.hide(); break;   //X
		case 72 : calendar.about(); break;   //H	
		case 36 : calendar.prevHours.onmousedown(); break;//Home
		case 35 : calendar.nextHours.onmousedown(); break;//End
		case 33 : calendar.prevMinutes.onmousedown();break; //PageUp
		case 34 : calendar.nextMinutes.onmousedown(); break;//PageDown
	} 
	//window.event.keyCode = 0;
	//window.event.returnValue= false;
}

  calendar.setup();
}
  
var CalendarWebControl = new atCalendarControl();