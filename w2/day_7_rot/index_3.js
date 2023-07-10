var skyData = [];
d3.json("skyData.json")
	.then(function(data) {
    	skyData = data;
    	draw();
  	});

function draw(){
	var r = 300,
	    w = r * 3,
	    h = w,
	    radius = 10,
	    interval = 360/skyData.length;

	var svg = d3.select("svg")
				.attr("width",w)
				.attr("height",h)
				.style("background-color","black")
	var min = d3.min(skyData, function(d){
		return d.cloudCov;
	});
	var max = d3.max(skyData, function(d){
		return d.cloudCov;
	});
	var rotScale = d3.scaleLinear()
		.domain([0, skyData.length])
		.range([0, 360])

	var days = [];
	var rotPos = [];
	getSky();
	function getSky(){
		for (var i = 0; i<skyData.length; i++){
			days.push(skyData[i].day);
			rotPos.push({
				"x":((w/2-r) * Math.cos((rotScale(i)) * Math.PI/180)),
				"y":((h/2-r) * Math.sin((rotScale(i)) * Math.PI/180))
			})
		}
	}

	var clScale = d3.scaleLinear()
					.domain([min, max])
					.range(["lightblue","blue"]);

	var gElements = svg.selectAll("g")
		.data(skyData)
		.join('g')
	    .attr('transform', function (d, i) {
	    	return 'translate('+rotPos[i].x+','+rotPos[i].y+')';
	    });
	gElements    
		.append('circle')
	    .attr('r', radius)
	    .attr('cx', r)
	    .attr('cy', r)
	    .attr('fill', function(d){
	    	return clScale(d.cloudCov)
	    })
}
