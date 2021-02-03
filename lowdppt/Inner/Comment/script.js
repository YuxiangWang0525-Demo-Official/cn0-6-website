function commentAddOnPos(obj, charvalue)
{							
	obj.focus();
	var r = document.selection.createRange();
	var ctr = obj.createTextRange();
	var i;
	var s = obj.value;
	
	var ivalue = "&^asdjfls2FFFF325%$^&"; 
	r.text = ivalue;
	i = obj.value.indexOf(ivalue);
	r.moveStart("character", -ivalue.length);
	r.text = "";
	obj.value = s.substr(0,i) + charvalue + s.substr(i,s.length);
	ctr.collapse(true);
	ctr.moveStart("character", i + charvalue.length);
	ctr.select();
}

function commentInputSubmit(resultsPageUrl, ajaxDivID, applicationName, isAnonymous){
	try{
		var myhash = getStlInputParameters(ajaxDivID);
		if (isAnonymous) {
			if (myhash.get('UserName') == null || myhash.get('UserName') == '') {
				//称呼必须填写
				alert(decodeURIComponent("%E7%A7%B0%E5%91%BC%E5%BF%85%E9%A1%BB%E5%A1%AB%E5%86%99"));
				$('UserName').focus();
				return false;
			}
		}
		if (myhash.get('Content') == null || myhash.get('Content') == '') {
			//评论必须填写
			alert(decodeURIComponent("%E8%AF%84%E8%AE%BA%E5%BF%85%E9%A1%BB%E5%A1%AB%E5%86%99"));
			$('Content').focus();
			return false;
		}
		if (myhash.get('ValidateCode') == null || myhash.get('ValidateCode') == '') {
			//验证码必须填写
			alert(decodeURIComponent("%E9%AA%8C%E8%AF%81%E7%A0%81%E5%BF%85%E9%A1%BB%E5%A1%AB%E5%86%99"));
			$('ValidateCode').focus();
			return false;
		}
		else
		{
			var allcookies = document.cookie;
			var pos = allcookies.indexOf(applicationName + "=");
			if (pos != -1) {
				var start = pos + applicationName.length + 1;
				var end = allcookies.indexOf(";", start);  
				if (end == -1) 
				   end = allcookies.length;
				var value = allcookies.substring(start, end);
				if (myhash.get('ValidateCode') + '' != value) {
					//验证码不正确，请重新填写
					alert(decodeURIComponent("%E9%AA%8C%E8%AF%81%E7%A0%81%E4%B8%8D%E6%AD%A3%E7%A1%AE%EF%BC%8C%E8%AF%B7%E9%87%8D%E6%96%B0%E5%A1%AB%E5%86%99"));
					$('ValidateCode').focus();
					return false;
				}
			}
		}
		var option = {
			method:'post',
			parameters: myhash, 
			onSuccess:function(){
				updater_comments();
			},
			onFailure:function(){
				//操作失败
				$(ajaxDivID).innerHTML = decodeURIComponent("%E6%93%8D%E4%BD%9C%E5%A4%B1%E8%B4%A5");
			}
		};
		new Ajax.Updater ({success:ajaxDivID}, resultsPageUrl, option);
	}catch(e){}
}