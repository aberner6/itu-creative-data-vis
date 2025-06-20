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
	{"name":"ann","day":2,"month":11,"yr":99},
	{"name":"jacob","day":10,"month":3,"yr":95},
	{"name":"rachel","day":20,"month":1,"yr":80},
	{"name":"simon","day":28,"month":2,"yr":88},
	{"name":"kira","day":14,"month":4,"yr":85},
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
	.attr('x', w/2)
  	.attr('height', barHeight)
  	.attr('fill','blue')
  	.attr('y',function(d,i){
		return yScale(d.month);
	})	
	.attr('width',function(d){
		return d.yr/2;
	});
var scrollRect = svg.append('rect')
	.attr('x',50)
	.attr('y',100)
	.attr('width',100)
	.attr('height',10)
	.attr('fill','black')
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
window.addEventListener("scroll", (event) => {
	//sense the screen location
	var div = document.getElementById("par4");
	var offsets = div.getBoundingClientRect();
	var top = offsets.top;

	
	scrollRect
		.transition()
		.duration(2000)
		.attr("y",top)
	//when the div is at a specific location trigger the second chart
	if(top<=500){
		triggerSecondChart();
	}
	else{
		triggerFirstChart();
	}
})

//I want to make the radius scaled on the day, so I need my min and max
var minDay = d3.min(birthDay, d => d.day)
var maxDay = d3.max(birthDay, d => d.day)
//radius scale based on year (age)
var rScale = d3.scaleLinear()
	.domain([minDay, maxDay])
	.range([5,w/2]);

var names = birthDay.filter(function(d){
	return d.name;
})
// https://d3js.org/d3-scale-chromatic/categorical
// https://d3-graph-gallery.com/graph/custom_color.html
var colorScale = d3.scaleOrdinal()
	.domain([names])
	.range(d3.schemeSet3);
var circles = svg.selectAll('birthDay')
		.data(birthDay)
		.join('circle') 
		.attr("opacity",0)
		.attr('cx', w/2)
	  	.attr('cy', h/2)
	  	.attr("fill","none")
	  	.attr('stroke',function(d){
	  		return colorScale(d.name)
	  	})
	  	.attr("stroke-width",2)
	  	.attr('r',function(d,i){
			return rScale(d.day);
		})
function triggerSecondChart(){
	rects.transition().attr("opacity",0);
	circles.transition().attr("opacity",1)
}
function triggerFirstChart(){
	rects.transition().attr("opacity",1);
	circles.transition().attr("opacity",0);
}