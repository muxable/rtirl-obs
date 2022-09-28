var params = new URLSearchParams(window.location.search);
if (params.get("indicatorStyle")) {
  var indicatorStyle = atob(params.get("indicatorStyle"));
  indicatorStyle = JSON.parse(indicatorStyle);
	console.log(indicatorStyle);
  console.log(indicatorStyle.backgroundColor);
  document.getElementById("marker").style.backgroundColor = indicatorStyle.backgroundColor;
  document.getElementById("marker").style.boxShadow = "0 0 10px " + indicatorStyle.backgroundColor;
	document.getElementById("marker").style.width = `${indicatorStyle.width}px`;
  document.getElementById("marker").style.height = `${indicatorStyle.height}px`; 
}