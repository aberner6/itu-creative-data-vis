// Goal: map data onto coordinates, shapes and work with color. 
// Learn to load and handle external files of data. 

var w = 1000;
var h = 700;
var r = 10;
var margin = r*4;

//create canvas
// var svg = d3.select("#canvas").append("svg")
// 			.attr("width",w)
// 			.attr("height",h)
// 			.style("background-color","black")



//create array of data
// var skyData = [0, 30, 40, 70, 30, 50, 60];

// //find the minimum and maximum of the array of data
// var minSky = d3.min(skyData);
// var maxSky = d3.max(skyData);

// //make a scale so that each piece of data is placed across the x axis of the canvas with equal spacing in between
// var xScale = d3.scaleLinear()
// 				.domain([minSky, maxSky])
// 				.range([margin, w-margin]);

// //make a circle for every datapoint
// //spread the circles along the x axis using the xScale
// var circles = svg.selectAll("circle")
// 				.data(skyData)
// 				.join("circle")
// 				.attr("cx", function(d){
// 					return xScale(d);
// 				})
// 				.attr("cy", h/2)
// 				.attr("r", 10)
// 				.attr("fill", "white")








////1. LINEAR SCALES
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
// var arrData = ["apple", "blueberry", "pear", "banana","papaya","blueberry","apple","pear"];
// var colors = ["red","blue","green","yellow","orange"];

// var colScale = d3.scaleOrdinal()
// 				.domain(arrData)
// 				.range(colors)
  				// .range(d3.schemePaired);

//make a scale so that each circle is placed across the x axis evenly according to its index number in the array
// var xScale = d3.scaleLinear()
// 	.domain([0, arrData.length-1])
// 	.range([margin, w-margin])

//make a scale so that each circles is placed along the x axis according to its day of the week
// var xScale = d3.scaleBand()
// 	.domain(arrData)
// 	.range([margin, w-margin])

// var circles = svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr('cx', function(d,i){
// 		console.log(d+xScale(d))
// 		return xScale(d);
// 	})
// 	.attr('cy', h/2)
// 	.attr('r', r)
// 	.attr('fill', function(d){
// 			return colScale(d);
// 		})
// 	.attr('stroke','white')	

// var circles = svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr('cx', function(d,i){
// 		return xScale(i);
// 	})
// 	.attr('cy', h/2)
// 	.attr('r', r)
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











////BRING IN A DATASET
////INITIAL DATA OBJECT FOR REFERENCE
// var skyData = [
// 	{"day":"monday", "cloudCov":100},
//  	{"day":"tuesday", "cloudCov":40},
// 	{"day":"wednesday", "cloudCov":80}
//  ];





// var skyData = [];
// d3.json("skyData.json").then(function(data) {
//     	skyData = data;
// 		draw();
//   	});



// function draw(){
// 	var minCloud = d3.min(skyData, function(d){
// 		return d.cloudCov;
// 	})
// 	var maxCloud = d3.max(skyData, function(d){
// 		return d.cloudCov;
// 	})
// 	var cloudColor = d3.scaleLinear()
// 		.domain([minCloud, maxCloud])
// 		.range(["blue","white"])


// 	console.log("Drawing stuff");

// 	var cloudCircles = svg.selectAll("circle")
// 		.data(skyData)
// 		.join("circle")
// 		.attr("cx", function(d,i){
// 			return 10+i*30
// 		})
// 		.attr("cy", h/2)
// 		.attr("fill", function(d){
// 			return cloudColor(d.cloudCov)
// 		})
// 		.attr("r", 10)


// }













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












// //  Exercise
// //Re-write your code from Friday using `d3.scale` to space out the shapes that you drew in your assignment.
// var w = 1000;
// var h = 700;
// var shapeSize = 10;
// var margin = shapeSize*4; // relate shape size to margin
// // create canvas
// var svg = d3.select("#canvas")
//             .append("svg")
//             .attr("width",w)
//             .attr("height",h)
//             .style("background-color","beige")
// var cloudData = [
//     {density: 7, size:5},
//     {density: 1, size: 1},
//     {density: 1, size:1},
//     {density:1, size:1},
//     {density: 1, size:1},
//     {density: 1, size: 1},
//     {density: 4, size:3},
//     {density:1, size:1},
//     {density: 1, size:5},
//     {density: 1, size: 3},
//     {density: 1, size:1},
//     {density:10, size:2},
//     {density:1, size:2},
//     {density: 2, size:2},
//     {density: 8, size: 8},
//     {density: 1, size:1},
//     {density:1, size:1},
//     {density:10, size:4},
//     {density: 3, size:3},
//     {density: 3, size: 8},
//     {density: 1, size:1},
//     {density:5, size:5},
//     {density: 7, size:10},
//     {density: 1, size: 1},
//     {density: 5, size:5},
//     {density:7, size:10},
//     {density: 1, size:1},
//     {density: 2, size: 2},
//     {density: 5, size:5},
//     {density:10, size:10},
//     {density: 4, size:3},
//     {density: 7, size: 10},
// ]
// // find the minimum and maximum of the array of data
// var minSky = d3.min(cloudData, function(d){
//     return d.size
// });
// var maxSky = d3.max(cloudData, function(d){
//     return d.size
// });
// var dayScale = d3.scaleLinear()
//     .domain([0,cloudData.length])
//     .range([margin, w-margin]); 
// var radScale = d3.scaleLinear()
//     .domain([minSky, maxSky])
//     .range([5, 20])

// var minDensity = d3.min(cloudData, function(d){
//     return d.density
// });
// var maxDensity = d3.max(cloudData, function(d){
//     return d.density
// });
// var colScale = d3.scaleLinear()
//     .domain([minDensity, maxDensity])
//     .range([100, 255])
//     //.range(d3.schemePaired)
//     //.range([0,255]);

// var colorScale = d3.scaleSequential()
//     .interpolator(d3.interpolateRgb("white", "blue"))
//     .domain([minDensity, maxDensity]);

// var skyCirc = svg.selectAll("circle")
//     .data(cloudData)
//     .join("circle")
//     .attr('cx', function(d,i){
//         return dayScale(i);
//     })
//     .attr("cy", h/2)
//     .attr("r", function(d){
//         return radScale(d.size)
//     })
//     .attr("fill",function(d){
//         return colorScale(d.density)
//         // return 'rgb(0, 0,'+colScale(d.density)+')'
//     })

