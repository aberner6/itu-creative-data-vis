//explore rotation + translation in d3
//drive shapes rotation based on data
//look into using grouping to organise and move elements around the canvas

var w = 1000;
var h = 800;
var canvas = d3.select("#canvas").append("svg")
	.attr("width", w)
	.attr("height", h)
	.style("background-color","black");
var skyData = [];
d3.json("skyData.json").then(function(data){
	skyData = data;
}).then(function(data){
	draw();
})

//draw a circle per data item
function draw(){
	console.log(skyData)
	var r = 10;
	var margin = r*2;
	
	var cloudCov = skyData.map(function(d){
		return d.cloudCov
	})
	var min = d3.min(cloudCov);
	var max = d3.max(cloudCov);

	console.log(min+" "+max)
	
	var xAxis = d3.scaleLinear()
					.domain([0, skyData.length])
					.range([margin, w-margin])
	var circles = canvas.selectAll("circle")
					.data(skyData)
					.join("circle")
					.attr("cx",function(d,i){
						return xAxis(i);
					})
					.attr("cy",h/2)
					.attr("r",r)
					.attr("fill","white")
}