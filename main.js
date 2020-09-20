var weekNav = document.querySelector(".wk_nav");

var wkllbls = [ "Week 1", "Week 2", "Week 3", "Week 4", "Week 5",];
var wklnks = ["week_1/week_1.html", "week_2/week_2.html", "week_3/week_3.html", "week_4/week_4.html", "week_5/week_5.html",];


for (i=0; i < wkllbls.length; i++) {
    var weekLine = document.createElement ("li");
    var a = document.createElement ("a");
    var link = document.createTextNode (wkllbls[i]);
    a.title = wkllbls[i];
    a.href = wklnks[i];

    a.appendChild(link);
    weekLine.appendChild(a);
    weekNav.appendChild(weekLine);
}