var w = 1000;
var h = 1000;
var rad = 20;
var leftMargin = rad;


var svg = d3.select("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")

var skyData = [
	{"day":"monday", "sky":100},
	{"day":"tuesday", "sky":40},
	{"day":"wednesday", "sky":80},
	{"day":"thursday", "sky":70},
	{"day":"friday", "sky":100},
	{"day":"saturday", "sky":90},
	{"day":"sunday", "sky":90},
	{"day":"monday", "sky":100},
	{"day":"tuesday", "sky":1}
];

var xScale = d3.scaleLinear()
	.domain([0,skyData.length])
	.range([20, w])


var dayScale = d3.scaleOrdinal()
	.domain(["monday", "tuesday", "wednesday","thursday","friday","saturday","sunday"])
	.range(["red","blue","orange","purple","pink","beige","brown"])

var minSky = d3.min(skyData, function(d){
	return d.sky;
})
var maxSky = d3.max(skyData, function(d){
	return d.sky;
})

var radScale = d3.scaleLinear()
	.domain([minSky, maxSky])
	.range([10, 20])

var blueScale = d3.scaleLinear()
	.domain([minSky, maxSky])
	.range([0,255])

var skyCirc = svg.selectAll(".skyCirc")
	.data(skyData)
	.join("circle")
	.attr("cx", function(d,i){
		return xScale(i)
	})
	.attr("cy", h/2)
	.attr("r", function(d){
		return radScale(d.sky);
	})
	.attr("stroke",function(d){
		return dayScale(d.day)
	})
	.attr("fill", function(d){
		return 'rgb(0,0,'+blueScale(d.sky)+')'
	})





















////LINEAR SCALES
// var arrData = [1, 10, 17, 28];

// var min = d3.min(arrData);
// var max = d3.max(arrData);

// var xScale = d3.scaleLinear()
// 				.domain([min, max])
// 				.range([leftMargin, w-leftMargin]);

// var numCircs = svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr('cx', function(d,i){
// 		return xScale(d);
// 	})
// 	.attr('cy', h/2)
// 	.attr('r', rad)
// 	.attr('fill', 'none')
// 	.attr('stroke','magenta');


////ORDINAL SCALES
// var favFruits = ['orange','apple','tomato','kaki','grapes','berries'];

// var ordinalScale = d3.scaleOrdinal()
//   .domain(favFruits)
//   .range(d3.schemePaired);

// var fruitRects = svg
// 	.selectAll('rect')
// 	.data(favFruits)
// 	.join('rect')
// 	.attr('x', function(d,i){
// 		return i*10
// 	})
// 	.attr('y', h/2)
// 	.attr('width', rad*2)
// 	.attr('height', rad*2)
// 	.attr('opacity',.5)
// 	.attr('fill', function(d){
// 		return ordinalScale(d);
// 	})


////INITIAL DATA OBJECT
// var fruitQuant = [
//   { fruit: 'orange', quant: 1, color: 'orange'},
//   { fruit: 'apple', quant: 10, color: 'green'},
//   { fruit: 'tomato', quant: 17, color: 'red'}
// ];

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

// 	var fruitRects = svg
// 		.selectAll('rect')
// 		.data(fruitQuant)
// 		.join('rect')
// 		.attr('x', function(d,i){
// 			return xScale(d.quant);
// 		})
// 		.attr('y', h/2)
// 		.attr('width', rad)
// 		.attr('height', rad)
// 		.attr('opacity',.5)
// 		.attr('fill', function(d){
// 			return ordinalScale(d.fruit);
// 		})
// }
