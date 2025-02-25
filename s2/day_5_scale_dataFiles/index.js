// Goal: map data onto coordinates, shapes and work with color. 
// Learn to load and handle external files of data. 

var w = 800;
var h = 800;
var r = 50;
var margin = r;

//create canvas
var svg = d3.select("#canvas").append("svg")
			.attr("width",w)
			.attr("height",h)
			.style("background-color","black")



//create array of data
//each data represents what percentage of the sky was cloudy
//every data piece was observed on an individual day
// var skyData = [0, 30, 40, 70, 30, 50, 60];

// // //find the minimum and maximum of the array of data
// var minSky = d3.min(skyData);
// var maxSky = d3.max(skyData);

// // //make a scale so that each piece of data is placed across the x axis of the canvas with equal spacing in between
// var xScale = d3.scaleLinear()
// 				.domain([0, skyData.length-1])
// 				.range([margin, w-margin]);
// // // make a scale so each day's cloudiness factor maps to the color of the circle
// var colorScale = d3.scaleLinear()
// 				.domain([minSky, maxSky])
// 				.range(["blue","white"]);

// ////1. LINEAR SCALES
// // //make a circle for every datapoint
// // //spread the circles along the x axis using the xScale
// var circles = svg.selectAll("circle")
// 				.data(skyData)
// 				.join("circle")
// 				.attr("cx", function(d,i){
// 					return xScale(i);
// 				})
// 				.attr("cy", h/2)
// 				.attr("r", r)
// 				.attr("fill", function(d){
// 					return colorScale(d);
// 				})














////2. CATEGORICAL DATA -> COLORS = ORDINAL SCALES
// var arrData = ["apple","strawberry","mango","pineapple","banana","dragonfruit","mango","grapes","watermelon","pineapple","banana","orange","mango","apple","mango","strawberry"];
// var uniqueFruits = ["apple","strawberry","mango","pineapple","banana","dragonfruit","grapes","watermelon","orange"]
// var colors = ["green","red","coral","#e6fccb","yellow","pink","purple","#fa3975","orange"]
// var colScale = d3.scaleOrdinal()
// 				.domain(uniqueFruits)
// 				.range(colors)
//   				// .range(d3.schemePaired);

////make a scale so that each circle is placed across the x axis evenly according to its index number in the array
// var xScale = d3.scaleLinear()
// 	.domain([0, arrData.length-1])
// 	.range([margin, w-margin])


////make a scale so that each circles is placed along the x axis according to its day of the week
// var xScale = d3.scaleBand()
// 	.domain(uniqueFruits)
// 	.range([margin, w-margin])
// var line = svg.append("line")
// 			.attr("x1", margin)
// 			.attr("x2", w-margin)
// 			.attr("y1", h/2)
// 			.attr("y2", h/2)
// 			.attr("stroke","white")
// var circles = svg
// 	.selectAll('circle')
// 	.data(arrData)
// 	.join('circle')
// 	.attr("class", function(d,i){
// 		return d;
// 	})
	// .attr('cx', function(d,i){
	// 	return xScale(d);
	// })
	// .attr('cy', function(d){
	// })
	// .attr('r', r)
	// .attr('fill', function(d){
	// 		return colScale(d);
	// 	})
	// .attr('stroke','white')	









////5. DATA OBJECTS -> SCALES
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

// var days = skyData.map(function(d){
// 		return d.day;
// 	});
// // var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// var dayScale = d3.scaleBand()
// 	.domain(days)
// 	.range([margin, w-margin]);

// var minSky = d3.min(skyData, function(d){
// 	return d.sky;
// })
// var maxSky = d3.max(skyData, function(d){
// 	return d.sky;
// })

// var colScale = d3.scaleSequential(d3.interpolateBlues);

// var colPrep = d3.scaleLinear()
// 	.domain([minSky, maxSky])
// 	.range([0,1]);

// var yScale = d3.scaleLinear()
// 	.domain([0,6])
// 	.range([h/4,h*3/4])

// var skyCirc = svg.selectAll("circle")
// 	.data(skyData)
// 	.join("circle")
// 	.attr("class", function(d){
// 		return d.day;
// 	})
// 	.attr("cx", function(d,i){
// 		return dayScale(d.day)
// 	})
// 	.attr("cy", function(d,i){
// 		return yScale(Math.floor(i/7))
// 	})
// 	.attr("r", 10)
// 	.attr("fill",function(d){
// 		var prepped = colPrep(d.sky)
// 		return colScale(prepped);
// 	})
// // 	// .attr("fill", function(d){
// // 	// 	return 'rgb(0,0,'+colScale(d.sky)+')'
// // 	// })




////BRING IN AN EXTERNAL DATASET
////do a d3 way of visualising how many items are in each category (of fruit in this case)
var fruitData = [];
d3.json("fruitQuant.json")
	.then(function(data) {
    	fruitData = data;
    	}).then(function(){
		prep();
  	}).then(function(){
		draw();
	})

var types, categories;
var xScale = d3.scaleBand()
				.range([margin, w-margin])
function prep(){
	types = d3.groups(fruitData, (d) => d.fruit);
	categories = d3.map(types, function(d,i){
		return d[0];
	})
	xScale.domain(categories)
}
function draw(){
	var groups = svg
		.selectAll("g")
		.data(types)
		.join("g")
		.attr("transform",function(d){
			return "translate("+xScale(d[0])+","+h/2+")"
		})
	groups.selectAll("circle")
		.data(function(d){
			return d[1]
		})
		.join("circle")
		.attr("fill","white")
		.attr("r",10)
		.attr("cy", function(d,i){
			return i*10;
		})
}







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
//     	}).then(function(){
		// draw();
//   	});

// function draw(){
// 	var min = d3.min(skyData, function(d){
// 		return d.cloudCov;
// 	});
// 	var max = d3.max(skyData, function(d){
// 		return d.cloudCov;
// 	});

// 	var days =d3.map(skyData, function(d){
	// return d.day
// });

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