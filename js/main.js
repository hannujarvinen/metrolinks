var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function docInit() {
	var d = $(bodiv);
	for (i = 0; i < 14; i++) {
		var now = new Date();
		now.setDate(now.getDate()-i);
		dayname = days[now.getDay()];
		if (dayname != 'Saturday' && dayname != 'Sunday') {
			cyear = now.getFullYear();
			month = now.getMonth();
			// js month 0 is January, so here we need to add one to it to make things work
			month = month + 1 + '';
			day = now.getDate() + '';
			if (month.length == 1)
				month = '0' + month;
			if (day.length == 1)
				day = '0' + day;
			current = cyear + '-' + month + '-' + day;
			d.html(d.html() + '<a href="https://www.hs.fi/lehti/metro/' + current + '"><p>' + current + ' (' + dayname + ')</p></a>');
		}
		else {
			if (dayname == 'Sunday')
				d.html(d.html() + '<i>~~ weekend ~~</i></br>');
		}
	}
};