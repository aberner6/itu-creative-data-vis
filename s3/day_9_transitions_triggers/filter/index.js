var w = 500;
var h = 500;
var barHeight = 10;
var margin = 20;

var svg = d3.select("#canvas")
	.append("svg")
	.attr("width",w)
	.attr("height",h);

var birthDay = [
	{"name":"stine","day":1,"month":12,"yr":90},
	{"name":"evin","day":11,"month":9,"yr":98},
	{"name":"ann","day":12,"month":11,"yr":99},
	{"name":"jacob","day":12,"month":3,"yr":95},
	{"name":"rachel","day":20,"month":1,"yr":80},
	{"name":"simon","day":18,"month":2,"yr":88},
	{"name":"kira","day":18,"month":4,"yr":85},
	{"name":"rina","day":18,"month":6,"yr":82}
];
var myColors = ["pink","blue","yellow"]

//y scale based on months of the year
var yScale = d3.scaleLinear()
	.domain([1, 12])
	.range([barHeight, h-barHeight*2]);

//make one rectangle per item in the dataset
	//lay them out along the y axis according to month of year
	//january at top, december at bottom
var rects = svg.selectAll('birthDay')
	.data(birthDay)
	.join('rect') 
	.attr('class', function(d){
		return d.month;
	})
	.attr('x', 100)
  	.attr('height', barHeight)
  	.attr('fill','blue')
  	.attr('y',function(d,i){
		return yScale(d.month);
	})	
	.attr('width',function(d){
		return d.yr/2;
	});

//I want to make the y axis based on the year people are born in, so I need my min and max
var minYear = d3.min(birthDay, d => d.yr)
var maxYear = d3.max(birthDay, d => d.yr)

//y scale based on year (age)
var yearScale = d3.scaleLinear()
	.domain([minYear, maxYear])
	.range([h-margin, margin]);

//x scale based on month
var xScale = d3.scaleLinear()
	.domain([1, 12])
	.range([margin, w-margin]);

//when clicked, change the view so we can see the data as a scatterplot according to year born and month born
function scatterPlot(){
    d3.selectAll('rect')
    	.transition()
    	.duration(2000)
    	.attr("width",10)
    	.attr("height",10)
    	.attr("x", function(d){
    		return xScale(d.month)
    	})
    	.attr("y", function(d){
    		return yearScale(d.yr)
    	})
    d3.select("#scatter").attr("class","clicked")
    d3.select("#year").attr("class","unClicked")
    d3.select("#season").attr("class","unClicked")
}
//when clicked, filter to remove any birthdays NOT born in spring
function season(){
    rects.filter(function(d) { return d.month > 5 })
		.transition()
	    .duration(2000)
	    .style("opacity", 0)
        .style("fill", "grey") 
        .remove()
    d3.select("#season").attr("class","clicked")
    d3.select("#scatter").attr("class","unClicked")
    d3.select("#year").attr("class","unClicked")

}

//when clicked, highlight people who are over the age of 35
function year(){
    d3.selectAll('rect').filter(function(d) { return d.yr > 88 })
        .attr("stroke", "yellow") 	
        .attr("stroke-width", 5)      
    d3.select("#year").attr("class","clicked")
    d3.select("#scatter").attr("class","unClicked")
    d3.select("#season").attr("class","unClicked")
}