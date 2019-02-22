/* WP SIMILE Timeline JavaScript configuration script
 * Plugin version: 0.4.8.3 */
var tl;
function loadSimileTimeline() {
	
	if(document.getElementById("stl-mytimeline")){	
		
		// ### create custom theme
var mytheme = Timeline.ClassicTheme.create();
mytheme.firstDayOfWeek = 0;
mytheme.ether.highlightOpacity = 50;
mytheme.ether.interval.line.show = true;
mytheme.ether.interval.line.color = "";
mytheme.ether.interval.line.opacity = 25;
mytheme.ether.interval.weekend.color = "";
mytheme.ether.interval.weekend.opacity = 30;
mytheme.ether.interval.marker.hAlign = "Bottom";
mytheme.event.track.offset = 0.5;
mytheme.event.track.height = 1.5;
mytheme.event.track.gap = 0.5;
mytheme.event.instant.icon = Timeline.urlPrefix + "images/gray-circle.png";
mytheme.event.instant.impreciseOpacity = 20;
mytheme.event.instant.showLineForNoText = true;
mytheme.event.instant.iconWidth = 10
mytheme.event.instant.iconHeight = 10
mytheme.event.duration.opacity = 100;
mytheme.event.duration.impreciseOpacity = 20;
mytheme.event.label.width = 200;
mytheme.event.highlightColors = ["#FFFF00","#FFC000","#FF0000","#0000FF"];
mytheme.event.bubble.width = 320;
mytheme.event.bubble.maxHeight = 300;
mytheme.event.bubble.titleStyler = function(elmt) {
				elmt.className = "timeline-event-bubble-title";
};
mytheme.event.bubble.bodyStyler = function(elmt) {
				elmt.className = "timeline-event-bubble-body";
};
mytheme.event.bubble.imageStyler = function(elmt) {
				elmt.className = "timeline-event-bubble-image";
};
mytheme.event.bubble.wikiStyler = function(elmt) {
				elmt.className = "timeline-event-bubble-wiki";
};
mytheme.event.bubble.timeStyler = function(elmt) {
				elmt.className = "timeline-event-bubble-time";
};
mytheme.timeline_start = new Date("Sun, 21 Jan 2007 20:00:00 +0000");
mytheme.timeline_stop = new Date("Fri, 21 Dec 2012 20:00:00 +0000");

var eventSource = new Timeline.DefaultEventSource();

Timeline.loadXML("http://www.ala.org.au/wp-content/plugins/wp-simile-timeline/data/timeline.xml.php?cat=52",
		function(xml, url) {
			eventSource.loadXML(xml, url);
});

var bandInfos = [Timeline.createHotZoneBandInfo({	zones:[],
	width:          "90%",
	intervalUnit:   Timeline.DateTime.MONTH,
	intervalPixels: 50,
	eventSource:    eventSource,
	date:           "Sat, 02 Apr 2011 21:36:59 +0000",
	timeZone:	0,
	trackGap:	0.5,
	trackHeight:	0.3,
	showText:	true,
	theme:		mytheme,
	overview:	false,
	locale:		"de"
}),Timeline.createHotZoneBandInfo({	zones:[],
	width:          "10%",
	intervalUnit:   Timeline.DateTime.YEAR,
	intervalPixels: 100,
	eventSource:    eventSource,
	date:           "Sat, 02 Apr 2011 21:36:59 +0000",
	timeZone:	0,
	trackGap:	0.5,
	trackHeight:	0.3,
	showText:	false,
	theme:		mytheme,
	overview:	true,
	locale:		"de"
})];for(var i=1;i < bandInfos.length;i++){
	bandInfos[i].syncWith = 0;   // synchronize with primary band
	bandInfos[i].highlight = true;   // highlight focused area
	//bandInfos[i].eventPainter.setLayout(bandInfos[0].eventPainter.getLayout());
}
bandInfos[0].decorators = [new Timeline.SpanHighlightDecorator({
	startDate:	"Thu, 22 Mar 2007 05:41:06 +0000",
	endDate:	"Fri, 22 Jun 2007 05:41:06 +0000",
	startLabel:	"Start",
	endLabel:	"",
	color:	"#F6D7B7",
	cssClass:	"",
	opacity:	90,
	width: 10 
}),new Timeline.SpanHighlightDecorator({
	startDate:	"Fri, 22 May 2009 00:44:51 +0000",
	endDate:	"Fri, 17 Jun 2011 00:44:51 +0000",
	startLabel:	"",
	endLabel:	"",
	color:	"#DEFFD9",
	cssClass:	"",
	opacity:	70,
	width: 10 
})];
tl = Timeline.create(document.getElementById("stl-mytimeline"), bandInfos, 0);
	
			Timeline.GregorianDateLabeller.prototype.labelPrecise = function(date) {
			date = SimileAjax.DateTime.removeTimeZoneOffset(
				date,
				this._timeZone //+ (new Date().getTimezoneOffset() / 60)
			).toUTCString();
			
			var dateFormat = 'j F, Y';
			var timeFormat = 'g:i a';
		    
		    date = new Date(date);
			date = date.format(dateFormat + ' ' + timeFormat);
			return date;
		};
	
  }else{ /* empty - do nothing when no timeline-frame is found */ }
}


/*
 * Static functions and onload handler for the actual init process
 */
var resizeTimerID = null;
function resizeSimileTimeline() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}

/* addEvent function - by Scott Andrew 
 * http://www.scottandrew.com/weblog/articles/cbs-events
 */
function addEvent(obj, evType, fn){ 
	if (obj.addEventListener){ 
		obj.addEventListener(evType, fn, false); 
		return true; 
	} else if (obj.attachEvent){ 
		var r = obj.attachEvent("on"+evType, fn); 
		return r; 
	} else { 
		return false; 
	} 
}

// load Timeline on window load
addEvent(window, "load", loadSimileTimeline);
addEvent(window, "resize", resizeSimileTimeline);

// Simulates PHPs date function (http://jacwright.com/projects/javascript/date_format)
Date.prototype.format = function(format) {
	var returnStr = '';
	var replace = Date.replaceChars;
	for (var i = 0; i < format.length; i++) {
		var curChar = format.charAt(i);
		if (replace[curChar]) {
			returnStr += replace[curChar].call(this);
		} else {
			returnStr += curChar;
		}
	}
	return returnStr;
};
Date.replaceChars = {
	shortMonths: Timeline.GregorianDateLabeller.monthNames[Timeline.getDefaultLocale()],
	longMonths: Timeline.GregorianDateLabeller.monthNames[Timeline.getDefaultLocale()],
	shortDays: Timeline.GregorianDateLabeller.dayNames[Timeline.getDefaultLocale()],
	longDays: Timeline.GregorianDateLabeller.dayNames[Timeline.getDefaultLocale()],
	
	// Day
	d: function() { return (this.getDate() < 10 ? '0' : '') + this.getDate(); },
	D: function() { return Date.replaceChars.shortDays[this.getDay()]; },
	j: function() { return this.getDate(); },
	l: function() { return Date.replaceChars.longDays[this.getDay()]; },
	N: function() { return this.getDay() + 1; },
	S: function() { return (this.getDate() % 10 == 1 && this.getDate() != 11 ? 'st' : (this.getDate() % 10 == 2 && this.getDate() != 12 ? 'nd' : (this.getDate() % 10 == 3 && this.getDate() != 13 ? 'rd' : 'th'))); },
	w: function() { return this.getDay(); },
	z: function() { return "Not Yet Supported"; },
	// Week
	W: function() { return "Not Yet Supported"; },
	// Month
	F: function() { return Date.replaceChars.longMonths[this.getMonth()]; },
	m: function() { return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1); },
	M: function() { return Date.replaceChars.shortMonths[this.getMonth()]; },
	n: function() { return this.getMonth() + 1; },
	t: function() { return "Not Yet Supported"; },
	// Year
	L: function() { return (((this.getFullYear()%4==0)&&(this.getFullYear()%100 != 0)) || (this.getFullYear()%400==0)) ? '1' : '0'; },
	o: function() { return "Not Supported"; },
	Y: function() { return this.getFullYear(); },
	y: function() { return ('' + this.getFullYear()).substr(2); },
	// Time
	a: function() { return this.getHours() < 12 ? 'am' : 'pm'; },
	A: function() { return this.getHours() < 12 ? 'AM' : 'PM'; },
	B: function() { return "Not Yet Supported"; },
	g: function() { return this.getHours() % 12 || 12; },
	G: function() { return this.getHours(); },
	h: function() { return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12); },
	H: function() { return (this.getHours() < 10 ? '0' : '') + this.getHours(); },
	i: function() { return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes(); },
	s: function() { return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds(); },
	// Timezone
	e: function() { return "Not Yet Supported"; },
	I: function() { return "Not Supported"; },
	O: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00'; },
	P: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':' + (Math.abs(this.getTimezoneOffset() % 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() % 60)); },
	T: function() { var m = this.getMonth(); this.setMonth(0); var result = this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1'); this.setMonth(m); return result;},
	Z: function() { return -this.getTimezoneOffset() * 60; },
	// Full Date/Time
	c: function() { return this.format("Y-m-d") + "T" + this.format("H:i:sP"); },
	r: function() { return this.toString(); },
	U: function() { return this.getTime() / 1000; }
};