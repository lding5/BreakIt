$(document).ready(function(){
  console.log("index.js load");
  $("#navigationBar").load("navbar.html");

  var URL = document.URL;
  if (URL.indexOf("index.html") > -1){
  	$("#navIndex").addClass("active");
  	console.log("navbar index");
  } else if (URL.indexOf("about.html") > -1){
  	$("#navAbout").addClass("active");
  	console.log("navbar about");
  }

});
