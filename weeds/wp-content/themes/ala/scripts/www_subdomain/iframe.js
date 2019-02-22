function writeIframe() {
    var pagesrc = parseTaxa();

    document.location.href = pagesrc;
}


function writeIframXXe() {
    var pagesrc = parseTaxa();
	var pagesize = getPageSize();
	var y = pagesize[1];
	//var iframeHTML = "<div style='height:"+y+";'><iframe id='portal' src ='http://spatial.ala.org.au/webportal/' frameborder='0' height='" + y + "' marginheight='0' marginwidth='0' name='portal' scrolling='auto' width='100%'></iframe></div>";
	//alert(y);
		var iframeHTML = "<div style='height:"+y+";'><iframe id='portal' src ='" +pagesrc + "' frameborder='0' height='" + y + "' marginheight='0' marginwidth='0' name='portal' scrolling='auto' width='100%'></iframe></div>";
	document.write(iframeHTML);
}

function parseTaxa() {
	var url = window.location.href;	
	var taxa = url.split("?"); 
	if (taxa.length > 1) {
		var rightSide = taxa[1];
		var src = "http://spatial.ala.org.au/?" + rightSide; 
		return src;
		} else {
		var src = "http://spatial.ala.org.au/"; 
		return src;
	}
}

function getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function detect() {
	// simplify things
	var agent 	= navigator.userAgent.toLowerCase();
							
	// detect browser
	this.isSafari	= (agent.indexOf('safari') != -1);
	//this.isSafari2 = (this.isSafari && (parseFloat(agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).substring(0,agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).indexOf(' '))) >=  300));
	this.isOpera	= (agent.indexOf('opera') != -1);
	this.isNN		= (agent.indexOf('netscape') != -1);
	this.isIE		= (agent.indexOf('msie') != -1);
	this.isChrome	= (agent.indexOf('chrome') != -1);
}