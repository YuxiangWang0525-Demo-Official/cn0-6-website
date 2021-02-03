var stl_url_ss = '';
var stl_url_br = '';
var stl_site_id = '';
var stl_site_url = '';

function stlInit(url_ss, url_br, site_id, site_url){
	stl_url_ss = url_ss;
	stl_url_br = url_br;
	stl_site_id = site_id;
	stl_site_url = site_url;
}

function stlRefresh() { window.location.reload( false );}

function getStlInputParameters(ajaxDivID)
{
var ajaxElement = document.getElementById(ajaxDivID);
if(ajaxElement == null) return;

var inputs = ajaxElement.getElementsByTagName("input");
var myhash = new Hash();
if(inputs != null && inputs.length > 0)
{
	for(var i = 0 ;i < inputs.length; i++)
	{
		var name = inputs[i].getAttribute('name');
		if (name != null && name.length > 0)
		{
			var values = '';
			if(inputs[i].type=="radio" || inputs[i].type=="checkbox")
			{
				if (inputs[i].checked)
				{
					if (myhash.get(name) != null)
					{
						values = myhash.get(name);
						values = values + "," + inputs[i].value;
					}
					else
					{
						values = inputs[i].value;
					}
					myhash.set(name, values.replace(/</g,"_lessthan_"));
				}
			}
			else if (inputs[i].type=="file")
			{
				
			}
			else if (inputs[i].type=="hidden")
			{
				var eWebEditor = document.getElementById("eWebEditor_" + name);
				if (eWebEditor)
				{
					values = window.frames("eWebEditor_" + name).window.frames("eWebEditor").document.getElementsByTagName("body")[0].innerHTML;
				}
				else
				{
					values = inputs[i].value;
				}
				myhash.set(name, values.replace(/</g,"_lessthan_"));
			}
			else
			{
				values = inputs[i].value;
				myhash.set(name, values.replace(/</g,"_lessthan_"));
			}
		}
	}
}

var textareas = ajaxElement.getElementsByTagName("textarea");
if(textareas != null && textareas.length > 0)
{
	for(var i = 0 ;i < textareas.length; i++)
	{
		var name = textareas[i].getAttribute('name');
		if (name != null && name.length > 0)
		{
			myhash.set(name, textareas[i].value.replace(/</g,"_lessthan_"));
			try{
				var editor = FCKeditorAPI.GetInstance(name);
				if (editor != undefined)
				{
					myhash.set(name, editor.GetXHTML().replace(/</g,"_lessthan_")); 
				}
			}catch(e){}		
		}
	}
}

var selects = ajaxElement.getElementsByTagName("select");
if(selects != null && selects.length > 0)
{
	for(var i = 0 ;i < selects.length; i++)
	{
		var name = selects[i].getAttribute('name');
		if (name != null && name.length > 0)
		{
			var values = '';
			try{
				for(var j = 0 ;j < selects[i].options.length; j++)
				{
					if (selects[i].options[j].selected)
					{
						if (values != '')
						{
							values = values + "," + selects[i].options[j].value;
						}
						else
						{
							values = selects[i].options[j].value;
						}
					}
				}
				myhash.set(name, values.replace(/</g,"_lessthan_"));
			}catch(e){}		
		}
	}
}

return myhash;
}

function stlInputSubmit(resultsPageUrl, ajaxDivID, successTemplate, failureTemplate){
	try{
		var myhash = getStlInputParameters(ajaxDivID);
		myhash.set('successTemplate', successTemplate);
		myhash.set('failureTemplate', failureTemplate);
		var option = {
			method:'post',
			parameters: myhash,
			evalScripts:true
		};
		new Ajax.Updater ({success:ajaxDivID}, resultsPageUrl, option);
	}catch(e){alert(e);}
}

function stlInputReplaceTextarea(attributeName, editorUrl, height, width){
	var oFCKeditor = new FCKeditor(attributeName) ;
	oFCKeditor.BasePath = editorUrl ;
	oFCKeditor.Config['CustomConfigurationsPath'] = editorUrl + '/my.config.js' ;
	oFCKeditor.ToolbarSet = 'MyToolbarSet' ;
	if (height > 0){
		oFCKeditor.Height = height ;
	}else{
		oFCKeditor.Height = 360 ;
	}
	if (width > 0){
		oFCKeditor.Width = width ;
	}else{
		oFCKeditor.Width = 550 ;
	}
	oFCKeditor.ReplaceTextarea();
}

function stlGetQueryString(isWidthAnd)     
{ 
	var queryString = document.location.search;
	
	if (queryString == null || queryString.length <= 1) return "";
	if (isWidthAnd){
		return "&" + decodeURI(decodeURI(queryString.substring(1)));
	}else{
		return decodeURI(decodeURI(queryString.substring(1)));
	}
}

function stlGetQueryStringHash()     
{
	var queryString = document.location.search;
	
	if (queryString == null || queryString.length <= 1) return null;
	
	return $H(queryString.toQueryParams());
}

function stlGetQueryStringValue(sParam)
{   
  var   sBase   =   window.location.search   
  var   re         =   eval("/"   +   sParam   +   "=([^&]*)/")   
  if   (re.test(sBase)){   
	  return   RegExp.$1   
  }   
  else{   
	  return "";
  }   
}

function stlRedirectPage(pageUrl, pageNum)     
{
	var hash = stlGetQueryStringHash();
	if (!hash)
	{
		hash = new Hash();
	}
	hash.set('pageNum', pageNum);
	
	window.location.href = pageUrl + hash.toQueryString();
}

function stlGetXmlDocumentElement(responseText)
{
	var xmlDoc;
	//alert(responseText);
				
	if (document.implementation.createDocument) {
		var parser = new DOMParser();
		xmlDoc = parser.parseFromString(responseText, "text/xml");
	} else if (window.ActiveXObject) {
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = "false";
		xmlDoc.loadXML(responseText);
	}
	return xmlDoc.documentElement;
}

function stlLoadValues(ajaxDivID)
{
	var oForm = $(ajaxDivID);
	if (oForm.elements){
		for (var i=0 ; i < oForm.elements.length; i++) {
			if (oForm.elements[i].name != "")
			{
				var value = stlGetQueryStringValue(oForm.elements[i].name);
				if (value && value.length > 0){
					oForm.elements[i].value = decodeURIComponent(decodeURIComponent(value));
				}
			}
		}
	}
}

function stlCloseWindow()
{
	login_wnd = document.getElementById("stl_wnd_div");	
	login_wnd.style.display="none";
	var login_board = document.getElementById("stl_wnd_board");
	login_board.style.display="none";
	shadow_wnd = document.getElementById("stl_shadow_div");
	shadow_wnd.style.display = "none";
}

function stlOpenWindow(pageUrl, width, height)
{
	var shadow_wnd = document.getElementById("stl_shadow_div");
	var stl_wnd = document.getElementById("stl_wnd_div");
	var stl_board = document.getElementById("stl_wnd_board");
	var wnd_frame = document.getElementById("stl_wnd_frame");
	
	if (stl_wnd != null && shadow_wnd != null){
		stl_wnd.style.width = width + "px";
		stl_wnd.style.height = height + "px";
		stl_board.style.display = "block";
		stl_board.style.top = (100 + document.documentElement.scrollTop) + 'px';
		stl_wnd.style.visible = "hidden";
		stl_wnd.style.display = "block"	;
		shadow_wnd.style.height = document.body.scrollHeight + "px";
		shadow_wnd.style.display = "block";
		var url;
		if (pageUrl.indexOf('?') == -1){
			url = pageUrl + "?_r=" + Math.random();
		}else{
			url = pageUrl + "&_r=" + Math.random();
		}
		wnd_frame.src = url;
	}
}

function getCookie(name) {
	var search = name + "=";
	var offset = document.cookie.indexOf(search);
	if (offset != -1) {
		offset += search.length;
		var end = document.cookie.indexOf(";", offset);
		if (end == -1) {
			end = document.cookie.length;
		}
		return unescape(document.cookie.substring(offset, end));
	} else{
		return "";
	}	
}

function setCookie(name, value, hours){

	var expireDate=new Date(new Date().getTime()+hours*3600000);

	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expireDate.toGMTString() ;

}

function delCookie(name) {

	var expireDate=new Date(new Date().getTime());

	document.cookie = name + "= ; path=/; expires=" + expireDate.toGMTString() ;

}

function stlRedirect(redirectUrl, openWin)     
{
	if (openWin){
		window.open(redirectUrl);
	}else{
		window.location.href = redirectUrl;
	}
}
