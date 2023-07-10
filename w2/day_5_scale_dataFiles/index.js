// Goal: map data onto coordinates, shapes and work with color. 
// Learn to load and handle external files of data. 

var w = 1000;
var h = 700;
var rad = 10;
var margin = rad*4;


var svg = d3.select("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")

//1. LINEAR SCALES
// var arrData = [100, 40, 80, 70, 100, 90, 90, 100, 1];
// var xScale = d3.scaleLinear()
// 				.domain([0, 100])
// 				.range([margin, w-margin]);
// svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr('cx', function(d,i){
// 		return xScale(d);
// 	})
// 	.attr('cy', h/2)
// 	.attr('r', rad)
// 	.attr('fill', 'none')
// 	.attr('stroke','white')






//2. CATEGORICAL DATA -> COLORS = ORDINAL SCALES
// var arrData = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday","monday","tuesday"];
// var colScale = d3.scaleOrdinal()
// 				.domain(arrData)
// 				.range(["red", "green", "blue","yellow", "orange", "purple","teal"])
//   				// .range(d3.schemePaired);

// svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr('cx', function(d,i){
// 		return i*(rad*2);
// 	})
// 	.attr('cy', h/2)
// 	.attr('r', rad)
// 	.attr('fill', function(d){
// 			return colScale(d);
// 		})
// 	.attr('stroke','white')	






//3. CATEGORICAL DATA -> POSITIONS = SCALE BAND
// var arrData = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday","monday","tuesday"];
// var xScale = d3.scaleBand()
// 				.domain(arrData)
// 				.range([margin, w-margin]);
// svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr('cx', function(d,i){
// 		return xScale(d);
// 	})
// 	.attr('cy', h/2)
// 	.attr('r', rad)
// 	.attr('fill', 'none')
// 	.attr('stroke','white')	






//4. MIN AND MAX OF DATA TO DRIVE THE SCALE'S DOMAIN EFFICIENTLY
// var arrData = [100, 40, 80, 70, 100, 90, 90, 100, 1];
// var min = d3.min(arrData)
// var max = d3.max(arrData)
// var radScale = d3.scaleLinear()
// 	.domain([min, max])
// 	.range([10, 20])
// svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr('cx', w/2)
// 	.attr('cy', h/2)
// 	.attr('r', function(d){
// 		return radScale(d);
// 	})
// 	.attr('fill', 'none')
// 	.attr('stroke','white')






//5. DATA OBJECTS -> SCALES
// var skyData = [
// 	{"day":"monday", "sky":100},
// 	{"day":"tuesday", "sky":40},
// 	{"day":"wednesday", "sky":80},
// 	{"day":"thursday", "sky":70},
// 	{"day":"friday", "sky":100},
// 	{"day":"saturday", "sky":90},
// 	{"day":"sunday", "sky":90},
// 	{"day":"monday", "sky":100},
// 	{"day":"tuesday", "sky":1}
// ];

// //CLASSIC JAVASCRIPT
// var days = [];
// getDays();
// function getDays(){
// 	for (var i = 0; i<skyData.length; i++){
// 		days.push(skyData[i].day);
// 	}
// }
// var dayScale = d3.scaleBand()
// 	.domain(days)
// 	.range([margin, w-margin]);

// var minSky = d3.min(skyData, function(d){
// 	return d.sky;
// })
// var maxSky = d3.max(skyData, function(d){
// 	return d.sky;
// })

// var colScale = d3.scaleLinear()
// 	.domain([minSky, maxSky])
// 	.range(d3.schemeTableau10)
// 	// .range(d3.schemePaired);
// 	// .range([0,255])

// var skyCirc = svg.selectAll("circle")
// 	.data(skyData)
// 	.join("circle")
// 	.attr("cx", function(d,i){
// 		return dayScale(d.day)
// 	})
// 	.attr("cy", h/2)
// 	.attr("r", 10)
// 	.attr("fill",function(d){
// 		console.log(colScale(d.sky))
// 		return colScale(d.sky)
// 	})
// 	// .attr("fill", function(d){
// 	// 	return 'rgb(0,0,'+colScale(d.sky)+')'
// 	// })






////INITIAL DATA OBJECT FOR REFERENCE
//// var skyData = [
//// 	{"day":"monday", "cloudCov":100},
//// 	{"day":"tuesday", "cloudCov":40},
//// 	{"day":"wednesday", "cloudCov":80}
//// ];

// var skyData = [];
// d3.json("skyData.json")
// 	.then(function(data) {
//     	skyData = data;
//     	draw();
//   	});

// function draw(){
// 	var min = d3.min(skyData, function(d){
// 		return d.cloudCov;
// 	});
// 	var max = d3.max(skyData, function(d){
// 		return d.cloudCov;
// 	});

// 	var days = [];
// 	getSky();
// 	function getSky(){
// 		for (var i = 0; i<skyData.length; i++){
// 			days.push(skyData[i].day);
// 		}
// 	}
// 	var xScale = d3.scaleBand()
// 					.domain(days)
// 					.range([margin, w-margin]);
	
// 	var yScale = d3.scaleLinear()
// 					.domain([0, 6])
// 					.range([h/3, h/3+100])


// 	var clScale = d3.scaleLinear()
// 					.domain([min, max])
// 					.range(["lightblue","blue"]);

// 	var skyRects = svg
// 		.selectAll('rect')
// 		.data(skyData)
// 		.join('rect')
// 		.attr('x', function(d){
// 			return xScale(d.day);
// 		})
// 		.attr('y', function(d,i){
// 			// console.log(Math.floor(i / 7))
// 			return yScale(Math.floor(i / 7))
// 		})
// 		.attr('width', rad)
// 		.attr('height', rad)
// 		.attr('fill', function(d){
// 			return clScale(d.cloudCov)
// 		})
// }
