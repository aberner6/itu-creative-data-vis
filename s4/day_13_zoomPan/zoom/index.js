var w = 300;
var h = 300;
var barHeight = 10;


var svg = d3.select("#canvas")
	.append("svg")
	.attr("width",w)
	.attr("height",h)
	.style("border-style","solid")
	.style("border-color","pink")
      .append("g")
		
var zoom = d3.zoom()
	.scaleExtent([1, 5])
	.translateExtent([[0,0],[w,h]])
	.on("zoom", handleZoom)


function handleZoom(e){
	d3.select('svg g').attr("transform", e.transform)
}
function initZoom(){
	d3.select('svg').call(zoom)
}

var birthDay = [
	{"name":"stine","day":1,"month":12,"yr":90},
	{"name":"evin","day":11,"month":9,"yr":98},
	{"name":"ann","day":12,"month":11,"yr":99},
	{"name":"ann","day":12,"month":3,"yr":95},
	{"name":"rachel","day":20,"month":1,"yr":80},
	{"name":"rachel","day":18,"month":2,"yr":88},
	{"name":"rachel","day":18,"month":4,"yr":85},
	{"name":"rachel","day":18,"month":6,"yr":82}
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
	})


//when we click, zoom in
function zoomIn(){
	d3.select('svg')
		.call(zoom.scaleBy,2)
}
//when we click, move the focus
function move(){
    d3.select('svg')
    	.transition()
    	.duration(2000)
    	.ease(d3.easeBounce)
		.call(
			zoom.transform,
			d3.zoomIdentity.translate(50, -100)
		);
}

initZoom();