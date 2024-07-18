//this is the clean file of making every data element rotate within its place on the canvas
var w = 1000;
var h = 500;
var rad = 20;
var margin = rad*2;


var svg = d3.select("#canvas").append("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")
			
var skyData = [];
d3.json("skyData.json")
	.then(function(data) {
    	skyData = data;
    	draw();
  	});

function draw(){
	var min = d3.min(skyData, function(d){
		return d.cloudCov;
	});
	var max = d3.max(skyData, function(d){
		return d.cloudCov;
	});

	var days = [];
	getSky();
	function getSky(){
		days = skyData.map(function(d){
			return d.day;
		});
	}
	var xScale = d3.scaleBand()
					.domain(days)
					.range([margin, w-margin]);
	
	var yScale = d3.scaleLinear()
					.domain([0, 6])
					.range([h/4, h/3+300])


	var clScale = d3.scaleLinear()
					.domain([min, max])
					.range(["lightblue","blue"]);

	var rotScale = d3.scaleLinear()
		.domain([min, max])
		.range([0, 350])

	var gElements = svg.selectAll('g')
		.data(skyData)
		.join('g')
	    .attr('transform' , function(d,i){
	    	return 'translate('+xScale(d.day)+',' +yScale(Math.floor(i / 7))+')'
	    });

	gElements
		.append("rect")
		.attr("x", 0)
		.attr("y",0)
		.attr("width",rad)
		.attr("height",rad)
		.attr('fill', function(d){
			return clScale(d.cloudCov)
		})
		.attr("transform", function(d,i){
			return "rotate("+rotScale(d.cloudCov)+")"
		})
	gElements
		.append("circle")
		.attr("cx", 0)
		.attr("cy",0)
		.attr("r",rad)
		.attr("stroke","white")
		.attr("fill","none")

}