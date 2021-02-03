function stlSearchSubmit(ajaxDivID, openWin)
{
	var oForm = $(ajaxDivID);
	
	var myhash = new Hash();
	if (oForm.elements){
		for (var i=0 ; i < oForm.elements.length; i++) {
			if (oForm.elements[i].name != "")
			{
				myhash.set(oForm.elements[i].name, encodeURIComponent(oForm.elements[i].value)); 
			}
		}
		
		for (var i=0 ; i < oForm.elements.length; i++) {
			if (oForm.elements[i].name != "")
			{
				var isSet = true;
				if (oForm.elements[i].tagName == 'INPUT' && oForm.elements[i].type == 'radio' && !oForm.elements[i].checked)
				{
					isSet = false;
				}
				if (isSet)
				{
					myhash.set(oForm.elements[i].name, encodeURIComponent(oForm.elements[i].value)); 
				}
			}
		}
	}
	
	var searchUrl = oForm['action'] + myhash.toQueryString();
	if (openWin){
		window.open(searchUrl);
	}else{
		window.location.href = searchUrl;	
	}
	
	//stlEncodeFormElements(oForm);
	//oForm.submit();
}

function stlEncodeFormElements(oForm) {
	if (oForm.elements){
		for (var i=0 ; i < oForm.elements.length; i++) {
			if (oForm.elements[i].name != "")
			{
				oForm.elements[i].style.visibility = 'hidden';
				oForm.elements[i].value = encodeURIComponent(oForm.elements[i].value);
			}
		}
	}
}

function stlSearchLoadValues(ajaxDivID)
{
	var oForm = $(ajaxDivID);
	if (oForm.elements){
		for (var i=0 ; i < oForm.elements.length; i++) {
			if (oForm.elements[i].name != "")
			{
				if (oForm.elements[i].name.toLowerCase() == "channelid")
				{
					var value = stlGetQueryStringValue(oForm.elements[i].name);
					if (document.getElementById("channelID_" + value))
					{
						document.getElementById("channelID_" + value).checked = true;
					}
				}
				else
				{
					var value = stlGetQueryStringValue(oForm.elements[i].name);
					if (value && value.length > 0){
						oForm.elements[i].value = decodeURIComponent(decodeURIComponent(value));
					}
				}
			}
		}
	}
}