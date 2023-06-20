var w = 1000;
var h = 500;
var rad = 20;
var leftMargin = rad*2;


var svg = d3.select("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")

var skyData = [
	{"day":1, "cloud":0},
	{"day":2, "cloud":70},
	{"day":3, "cloud":10},
	{"day":4, "cloud":0},
	{"day":5, "cloud":20},
	{"day":6, "cloud":0},
	{"day":7, "cloud":30},
	{"day":8, "cloud":60},
	{"day":9, "cloud":80},
	{"day":10, "cloud":100}
]

console.log(skyData[0]);
var minSky = d3.min(skyData, function(d){
	return d.cloud;
});
var maxSky = d3.max(skyData, function(d){
	return d.cloud;
});
var xScale = d3.scaleLinear()
	.domain([0, skyData.length])
	.range([leftMargin, w-leftMargin])

var rotScale = d3.scaleLinear()
	.domain([minSky, maxSky])
	.range([0, 350])

var gElements = svg.selectAll("g")
	.data(skyData)
	.join("g")
	.attr("transform", function(d,i){
		return "translate("+xScale(i)+","+h/2+")"
	});
gElements
	.append("rect")
	.attr("x", 0)
	.attr("y",0)
	.attr("width",rad)
	.attr("height",rad)
	.attr("fill","white")
	.attr("transform", function(d,i){
		return "rotate("+rotScale(d.cloud)+")"
	})
gElements
	.append("circle")
	.attr("cx", 0)
	.attr("cy",0)
	.attr("r",rad)
	.attr("stroke","white")
	.attr("fill","none")




// var skyRects = svg.selectAll(".skyRects")
// 	.data(skyData)
// 	.join("rect")
// 	.attr("x", function(d,i){
// 		console.log(xScale(i))
// 		return xScale(i);
// 	})
// 	.attr("y", h/4)
// 	.attr("width",rad)
// 	.attr("height",rad)
// 	.attr("fill","white")
// 	.attr("transform",function(d,i){
// 		return "translate("+(w/2)+","+h/2+") rotate("+rotScale(d.cloud)+")"
// 	})




























    	// return 'translate('+xScale(d)+',' +h/2+') rotate(15)'

// var fruitQuant = [];
// d3.json("fruitQuant.json")
// 	.then(function(data) {
//     	fruitQuant = data;
//     	draw();
//   	});

// function draw(){
// 	////new need here:
// 	var min = d3.min(fruitQuant, function(d){
// 		return d.quant;
// 	});
// 	var max = d3.max(fruitQuant, function(d){
// 		return d.quant;
// 	});

// 	////new need here:
// 	var fruitNames = [];
// 	var fruitColors = [];

// 	getFruit();
// 	function getFruit(){
// 		for (var i = 0; i<fruitQuant.length; i++){
// 			fruitNames.push(fruitQuant[i].fruit);
// 			fruitColors.push(fruitQuant[i].color);
// 		}
// 	}

// 	var ordinalScale = d3.scaleOrdinal()
// 						  .domain(fruitNames)
// 						  .range(fruitColors);

// 	var xScale = d3.scaleLinear()
// 					.domain([min, max])
// 					.range([leftMargin, w-leftMargin]);


// 	var rotationScale = d3.scaleLinear()
// 					.domain([0, fruitQuant.length])
// 					.range([0, 360]);


// 	var seqScale = d3.scaleSequential()
// 					  		.domain([0, 100])
// 					  		.interpolator(d3.interpolateRainbow);



// 	var gElements = svg.selectAll('g')
// 		.data(fruitQuant)
// 		.join('g')
// 	    .attr('transform' , function(d){
// 	    	return 'translate('+xScale(d.quant)+',' +h/2+')'
// 	    });


// 	gElements.append('circle')
// 		.attr('cx',0)
// 		.attr('cy',0)
// 		.attr('r', rad)
// 		.attr('fill',function(d){
// 			return seqScale(d.del);
// 		})
// 		.attr('stroke', function(d){
// 			return ordinalScale(d.color)
// 		})
// 		.attr('opacity',.7);
// 	gElements.append('rect')
// 		.attr('x', 0)
// 		.attr('y', 0)
// 		.attr('width', rad)
// 		.attr('height', rad)
// 		.attr('fill', 'none')
// 		.attr('stroke','white')
// 		.attr('transform',function(d,i){
// 			return 'rotate('+rotationScale(i)+')'
// 		});
// }