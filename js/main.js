/*Navigation*/
var weekNav = document.querySelector(".wk_nav");
var wkllbls = [
    "Home",
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10",
    "Week 11",
    "Week 12",
    "Week 13",
    "Week 14",
];
var wklnks = [
    "../index.html",
    "/cit330/week_1/index.html",
    "/cit330/week_2/index.html",
    "/cit330/week_3/index.html",
    "/cit330/week_4/index.html",
    "/cit330/week_5/index.html",
    "/cit330/week_6/index.html",
    "/cit330/week_7/index.html",
    "/cit330/week_8/index.html",
    "/cit330/week_9/index.html",
    "/cit330/week_10/index.html",
    "/cit330/week_11/index.html",
    "/cit330/week_12/index.html",
    "/cit330/week_13/index.html",
    "/cit330/week_14/index.html",
];
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
/*Copy Right Date*/
document.getElementById('year').appendChild(document.createTextNode(new Date().getFullYear()))




/*document.getElementById("head") = headInfo;
var headInfo = {
    <meta name="author" content="Timothy Wells">
    <meta charset="utf-8">
    <html lang="en-US"></html>
    <meta name="keywords" content="HTML, CSS, JavaScript, WDD 330, Front End Development">
    <link rel="stylesheet" href="/cit330/css/stylesheet.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
}*/