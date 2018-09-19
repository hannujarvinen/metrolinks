var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function docInit() {
	var d = $(bodiv);
	// js month 0 is January, so here we need to add one to it to make things work
	for (i = 0; i < 7; i++) {
		var now = new Date();
		now.setDate(now.getDate()-i);
		dayname = days[now.getDay()];
		now.setMonth(now.getMonth()+1);
		cyear = now.getFullYear();
		month = now.getMonth() + '';
		day = now.getDate() + '';
		if (month.length == 1)
			month = '0' + month;
		if (day.length == 1)
			day = '0' + day;
		current = cyear + '-' + month + '-' + day;
		d.html(d.html() + '<a href="https://www.hs.fi/lehti/metro/' + current + '"><p>' + current + ' (' + dayname + ')</p></a>');
	}
};