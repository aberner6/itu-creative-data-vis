var w = 500;
var h = 400;
var barHeight = 10;
var margin = 20;

var chart1 = d3.select("#area1")
    .append("svg")
	.attr("width",w)
	.attr("height",h);
var chart2 = d3.select("#area2")
    .append("svg")
	.attr("width",w)
	.attr("height",h);
var chart3 = d3.select("#area3")
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
	{"name":"rina","day":18,"month":6,"yr":82},
	{"name":"rachel","day":3,"month":2,"yr":83},
	{"name":"ann","day":30,"month":8,"yr":79}
];
var myColors = ["pink","blue","yellow"]

//FIRST CHART
//y scale based on months of the year
var yScale = d3.scaleLinear()
	.domain([1, 12])
	.range([barHeight, h-barHeight*2]);

//make one rectangle per item in the dataset
//lay them out along the y axis according to month of year
//january at top, december at bottom
var rects = chart1.selectAll('birthDay')
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

//add annotation as a foreign object so that it can be HTML, 
	// this is so that it can wrap automatically to the width we want
var annotation = chart1.append("foreignObject")
	.attr("width",100)
	.attr("height",200)
	.attr("x", w-100)
	.attr("y", yScale(1))
	.attr("class","annotate")
  	.append("xhtml:div")
    .html("the earliest person/birthday");
//we want to point to a specific element in the dataset that we already know about
    //so we can put it as a hardcoded number into the scale
var lineAnnotation = chart1.append("line")
	.attr("x1",w-105)
	.attr("y1", margin+5)
	.attr("x2",w/2+5)
	.attr("y2", yScale(1))
	.attr("stroke","black")


//when clicked, highlight people who are over the age of 35
function year(){
    d3.selectAll('rect').filter(function(d) { return d.yr > 88 })
        .attr("stroke", "yellow") 	
        .attr("stroke-width", 5)      
    d3.select("#year").attr("class","clicked")
}

// SECOND CHART
//I want to make the radius scaled on the day, so I need my min and max
var minDay = d3.min(birthDay, d => d.day)
var maxDay = d3.max(birthDay, d => d.day)
//radius scale based on year (age)
var rScale = d3.scaleLinear()
	.domain([minDay, maxDay])
	.range([10,h/3]);

var names = birthDay.filter(function(d){
	return d.name;
})
// https://d3js.org/d3-scale-chromatic/categorical
// https://d3-graph-gallery.com/graph/custom_color.html
var colorScale = d3.scaleOrdinal()
	.domain([names])
	.range(d3.schemeSet3);
var circles = chart2.selectAll('birthDay')
		.data(birthDay)
		.join('circle') 
		.attr('cx', w/2+margin*2)
	  	.attr('cy', h/2)
	  	.attr("fill","none")
	  	.attr('stroke',function(d){
	  		return colorScale(d.name)
	  	})
	  	.attr("stroke-width",2)
	  	.attr('r',function(d,i){
			return rScale(d.day);
		})
//make a separate space for the legend
var legend = chart2.append("g");
//make lines to show how small and big the circles can be at min and max
var circMinLine = legend.append("line")
	.attr("x1", w-margin*2)
	.attr("x2", w-margin*2)
	.attr("y1",h/2)
	.attr("y2", h/2-rScale(minDay))
	.attr("stroke","black")
var circMaxLine = legend.append("line")
	.attr("x1", w-margin*2+15)
	.attr("x2", w-margin*2+15)
	.attr("y1",h/2)
	.attr("y2", h/2-rScale(maxDay))
	.attr("stroke","black")

var textMin = legend.append("text")
	.attr("x", w-margin*2-3)
	.attr("y",h/2+10)
	.style("font-size",8)
	.text(minDay)
var textMax = legend.append("text")
	.attr("x", w-margin*2+12)
	.attr("y",h/2+10)
	.style("font-size",8)
	.text(maxDay)
var measureLineMin = legend.append("line")
	.attr("x1", w-margin*2-3)
	.attr("x2", w-margin*2+3)
	.attr("y1",h/2)
	.attr("y2", h/2)
	.attr("stroke","black")
var measureLineMax = legend.append("line")
	.attr("x1", w-margin*2+15-3)
	.attr("x2", w-margin*2+15+3)
	.attr("y1",h/2)
	.attr("y2", h/2)
	.attr("stroke","black")
var msLineMin = legend.append("line")
	.attr("x1", w-margin*2-3)
	.attr("x2", w-margin*2+3)
	.attr("y1", h/2-rScale(minDay))
	.attr("y2", h/2-rScale(minDay))
	.attr("stroke","black")
var msLineMax = legend.append("line")
	.attr("x1", w-margin*2+15-3)
	.attr("x2", w-margin*2+15+3)
	.attr("y1", h/2-rScale(maxDay))
	.attr("y2", h/2-rScale(maxDay))
	.attr("stroke","black")

var hovered;
var names = legend.selectAll("names")
	.data(birthDay)
	.join("text")
	.attr("font-size","8px")
	.attr("y",function(d,i){
		return h/2-rScale(d.day);
	})
	.attr("x", w-margin*2)
  	.attr('fill',function(d){
  		return colorScale(d.name)
  	})
	.text(function(d){
		return d.name;
	})
	.on("mouseover", function(d){
		d3.select(this).transition().attr("font-size","14px");

		hovered = d3.select(this).data();

		circles.filter(function(d){
				return d.name!=hovered[0].name;
			})
			.transition()
		    .style("opacity", 0)
	})
	.on("mouseout", function(d){
		d3.select(this).transition().attr("font-size","8px")
		circles
			.transition()
		    .style("opacity", 1)
	})

// THIRD CHART
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
var rects = chart3.selectAll('scatter')
	.data(birthDay)
	.join('rect')
	.attr("width",10)
	.attr("height",10)
	.attr("x", function(d){
		return xScale(d.month)
	})
	.attr("y", function(d){
		return yearScale(d.yr)
	})