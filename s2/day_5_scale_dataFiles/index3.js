var w = 1000;
var h = 800;

//create a canvas
var svg = d3.select("#canvas").append("svg")
				.attr("width",w)
				.attr("height",h)
				.style("background-color","beige");

var skyData = [];
//load the external data file
d3.json('skyData3.json').then(function(data){
	skyData = data;
	draw();
});


function draw(){
	//establish the domain
	//find my min + max of the dataset
	var min = d3.min(skyData, function(d){
			return d.density;
	});
	var max = d3.max(skyData, function(d){
		return d.density;
	});
	console.log(min+"min "+max+"max");

	var rectW = 40;
	var margin = rectW*2;
	var xScale = d3.scaleLinear()
					.domain([min, max])
					.range([margin, w-margin]);

	var arrayColors = skyData.map(function(d){
		return d.color;
	});
	var lengthColors = arrayColors.length;
	var arrayHeights = skyData.map(function(d){
		return d.height;
	});
	var yScale = d3.scaleBand()
					.domain(arrayHeights)
					.range([h-margin, margin])

//interpolation
	// var colorScale = d3.scaleSequential()
	// 				    .interpolator(d3.interpolateRgbBasis(["grey","blue","white"]))
	// 				    .domain([min, max])

	var colorScale = d3.scaleOrdinal()
					.domain(arrayColors)
					.range(d3.schemeRdPu[lengthColors])


	var rects = svg.selectAll("rect")
					.data(skyData)
					.join("rect")
					.attr("x", function(d){
						console.log(d);
						return xScale(d.density);
					})
					.attr("y",function(d){
						return yScale(d.height);
					})
					.attr("width",rectW)
					.attr("height",rectW)
					.attr("fill",function(d){
						return colorScale(d.density);
					});

}
