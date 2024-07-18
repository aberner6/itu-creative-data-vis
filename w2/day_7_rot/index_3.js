//this is the one with cos and sin 
//rotating data elements around in a circle

var skyData = [];
d3.json("skyData.json").then(function(data) {
    	skyData = data;
    	draw();
  	});

function draw(){
	var r = 300,
	    w = r * 3,
	    h = w,
	    radius = 10,
	    interval = 360/skyData.length;

	var svg = d3.select("#canvas").append("svg")
				.attr("width",w)
				.attr("height",h)
				.style("background-color","black")
	
	
//prepare scale to handle mapping the cloud cover number to a color for every data point	
	var min = d3.min(skyData, function(d){
		return d.cloudCov;
	});
	var max = d3.max(skyData, function(d){
		return d.cloudCov;
	});
	var clScale = d3.scaleLinear()
					.domain([min, max])
					.range(["lightblue","blue"]);



//i want to map every element in my dataset to an angle from 0 to 360
	var rotScale = d3.scaleLinear()
		.domain([0, skyData.length])
		.range([0, 360])

	var gElements = svg.selectAll("g")
		.data(skyData)
		.join('g')
	    .attr('transform', function (d, i) {
	    	return 'translate('+(w/2-r) * Math.cos((rotScale(i)) * Math.PI/180)+','+(h/2-r) * Math.sin((rotScale(i)) * Math.PI/180)+')';
	    });
	gElements    
		.append('circle')
	    .attr('r', radius)
	    .attr('cx', r)
	    .attr('cy', r)
	    .attr('fill', function(d){
	    	return clScale(d.cloudCov)
	    })
	gElements    
		.append('line')
	    .attr('x1', r)
	    .attr('x2', r + 10)
	    .attr('y1', r)
	    .attr('y2', r+10)
		.attr('stroke',function(d){
			if(d.cloudCov>50){
				return 'red'
			}else{
				return 'white'
			}
		})
}
