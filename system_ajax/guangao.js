function guangaoAdmin() {
    var divTop = false, divDown = false, rightUp = false, rightDown = false, TheTop = false;
    //顶部广告
    if (divTop) {
//        var thisUrl = window.location.toString();
//        thisUrl = thisUrl.toLowerCase(); //转换地址为小写字母
//        thisUrl = thisUrl.substring(26, thisUrl.length);
//        thisUrl = thisUrl.substring(0, thisUrl.indexOf("/"));
//        switch (thisUrl)
//        {
//            case "school":
//                document.getElementById("guangaoTOP").className = "guangaoTopSty";
//                document.getElementById("guangaoTOP").innerHTML = "<div style='width:932px;height:200px;'><div style='width:932px; height:70px;margin:0px 0px 10px 0px'><a href='../topics/Christmas.html'/*tpa=http://www.cn0-6.com/topics/Christmas.html*/ target='_blank'><img src='../images/shengdan/shengdan.jpg'/*tpa=http://www.cn0-6.com/images/shengdan/shengdan.jpg*/ border='0' /></a></div><div class='Lcenter'><div class='l'><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='swflash.cab#version=7,0,19,0'/*tpa=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0*/ width='615' height='118'><param name='movie' value='../flash/banner.swf'/*tpa=http://www.cn0-6.com/flash/banner.swf*/ /><param name='quality' value='high' /><embed src='../flash/banner.swf'/*tpa=http://www.cn0-6.com/flash/banner.swf*/ quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='615' height='118'></embed></object></div><div class='rr'><p>幼儿园教案频道简介</p>幼儿园教案为幼儿园老师提供了幼儿园教案、大班教案、中班教案、小班教案、托班教案、英语教案、音乐教案、美术教案、科学教案、体育教案、语言教案、音乐教案、数学教案、游戏教案、生活教案、健康教案、安全教案等教案.</div><div style='clear:both'></div></div></div>";
//                break;
//            default:
                document.getElementById("guangaoTOP").className = "guangaoTopSty";
                //document.getElementById("guangaoTOP").innerHTML = "";
                //break;
        //}
        document.getElementById("guangaoTOP").style.display = "block";
    }
    else {
        document.getElementById("guangaoTOP").style.display = "none";
    }
    //左侧底部广告
    if (divDown) {
        document.getElementById("divDown").className = "divDownSty";
        document.getElementById("divDown").style.display = "block";
    }
    else {
        document.getElementById("divDown").style.display = "none";
    }
    //右侧上面广告
    if (rightUp) {
        document.getElementById("rightUp").className = "rightUpSty";
        document.getElementById("rightUp").innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='swflash.cab#version=7,0,19,0'/*tpa=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0*/ width='296' height='115'><param name='movie' value='../../flash/goShop.swf' /><param name='quality' value='high' /><embed src='../../flash/goShop.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer'type='application/x-shockwave-flash' width='296' height='115'></embed></object>";
        document.getElementById("rightUp").style.display = "block";
    }
    else {
        document.getElementById("rightUp").style.display = "none";
    }
    //右侧下面广告
    if (rightDown) {
        document.getElementById("rightDown").className = "rightDownSty";
        document.getElementById("rightDown").innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='swflash.cab#version=7,0,19,0'/*tpa=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0*/ width='296' height='115'><param name='movie' value='../../flash/s_banner.swf' /><param name='quality' value='high' /><embed src='../../flash/s_banner.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer'ype='application/x-shockwave-flash' width='296' height='115'></embed></object>";
        document.getElementById("rightDown").style.display = "block";
    }
    else {
        document.getElementById("rightDown").style.display = "none";
    }
    //最顶部广告
    if (TheTop){
        document.getElementById("TheGuangaoTop").className = "guangaoTopSty";
        document.getElementById("TheGuangaoTop").innerHTML = "<div style='width:930px; margin:0px auto;'><div style='float:left;margin-left:2px'><a href='../tuiguang/daili.html'/*tpa=http://www.cn0-6.com/tuiguang/daili.html*/ target='_blank'><img src='../tuiguang/images/daili.jpg'/*tpa=http://www.cn0-6.com/tuiguang/images/daili.jpg*/ border=0  /></a></div><div style='float:left;margin-left:2px'><a href='../tuiguang/lianmeng.html'/*tpa=http://www.cn0-6.com/tuiguang/lianmeng.html*/ target='_blank'><img src='../tuiguang/images/lianmeng.jpg'/*tpa=http://www.cn0-6.com/tuiguang/images/lianmeng.jpg*/ border=0  /></a></div><div style='float:left;margin-left:2px'><a href='../tuiguang/shouji.html'/*tpa=http://www.cn0-6.com/tuiguang/shouji.html*/ target='_blank'><img src='../tuiguang/images/shouji.jpg'/*tpa=http://www.cn0-6.com/tuiguang/images/shouji.jpg*/ border=0  /></a></div></div><div style='width:930px; margin:5px auto;'><img src='../guanggao/chenchen.jpg'/*tpa=http://www.cn0-6.com/guanggao/chenchen.jpg*/ border=0  /></div>";
        document.getElementById("TheGuangaoTop").style.display = "block";
    }
    else {
        document.getElementById("TheGuangaoTop").style.display = "none";
    }
}
function guangaoEJ() {
    //最顶部广告
    var TheTop = false;
    if (TheTop) {
        document.getElementById("TheGuangaoTop").className = "guangaoTopSty";
        document.getElementById("TheGuangaoTop").innerHTML = "<div style='width:930px; margin:0px auto;'><div style='float:left;margin-left:2px'><a href='../tuiguang/daili.html'/*tpa=http://www.cn0-6.com/tuiguang/daili.html*/ target='_blank'><img src='../tuiguang/images/daili.jpg'/*tpa=http://www.cn0-6.com/tuiguang/images/daili.jpg*/ border=0 /></a></div><div style='float:left;margin-left:2px'><a href='../tuiguang/lianmeng.html'/*tpa=http://www.cn0-6.com/tuiguang/lianmeng.html*/ target='_blank'><img src='../tuiguang/images/lianmeng.jpg'/*tpa=http://www.cn0-6.com/tuiguang/images/lianmeng.jpg*/ border=0  /></a></div><div style='float:left;margin-left:2px'><a href='../tuiguang/shouji.html'/*tpa=http://www.cn0-6.com/tuiguang/shouji.html*/ target='_blank'><img src='../tuiguang/images/shouji.jpg'/*tpa=http://www.cn0-6.com/tuiguang/images/shouji.jpg*/ border=0  /></a></div></div><div style='width:930px; margin:5px auto;'><img src='../guanggao/chenchen.jpg'/*tpa=http://www.cn0-6.com/guanggao/chenchen.jpg*/ border=0  /></div>";
        document.getElementById("TheGuangaoTop").style.display = "block";
    }
    else {
        document.getElementById("TheGuangaoTop").style.display = "none";
    }
}