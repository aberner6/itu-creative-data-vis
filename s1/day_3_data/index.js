// GOAL: can we draw a shape for every cup of coffee we drank this morning?

var width = 800;
var height = 800;

var myCanvas = d3.select("#vis")
				.append("svg")
				.attr("width",width)
				.attr("height",height)
				.style("background-color","lightblue");

var cupsCoffee = [3, 2, 1, 0, 1, 2, 2, 1, 1, 1, 0, 1, 0, 2, 1, 2, 0, 1];

//for every person who gave their coffee data, please draw 1 circle
var circsCoffee = myCanvas.selectAll(".circsCoffee")
							.data(cupsCoffee)
							.join("rect")
							.attr("class", "circsCoffee")
							.attr("x", function(d,i){
								// console.log(i+ " i");
								console.log(d+ " d");
								return i*20;
							})
							.attr("y", height/2)
							.attr("width", function(d){
								return d*10;
							})
							.attr("height", function(d){
								return d*10;
							})
							.attr("fill", "none")
							.attr("stroke-width", .5)
							.attr("stroke","black")

d3.selectAll(".circsCoffee").attr("fill","red");
















// var cupsCoffee = [0, 0, 0, 0, 1, 2, 1, 1, 1, 0, 0, 0, 3, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1];

// var cupsWater = [2, 1, 3, 2, 1, 2, 2, 1, 1, 1, 1, 0, 3, 1, 2, 2, 1, 2, 1, 2, 2, 3, 4, 4, 0];

// var xScale = d3.scaleLinear().domain([0,cupsCoffee.length]).range([0, width])

// var myRects = canvas.selectAll("rect")
// 					.data(cupsCoffee)
// 					.join("rect")
// 					.attr("x", function(d,i){
// 						return xScale(i);
// 					})
// 					.attr("y", function(d){
// 						return height/2-d*10
// 					})
// 					.attr("width", function(d){
// 						if(d==0){
// 							return 1;
// 						}
// 						else{
// 							return d*10;
// 						}
// 					})
// 					.attr("height", function(d){
// 						if(d==0){
// 							return 1;
// 						}
// 						else{
// 							return (d*10);
// 						}
// 					})
// 					.attr("fill","none")
// 					.attr("stroke","black")
// 					.attr("stroke-width",.5)

















// var cupsCoffee = [1,0,0,0,0,1,0,10,0,0,0,1,1,0,1,0];

// var coffeeCircles = canvas.selectAll("circle")
// 							.data(cupsCoffee)
// 							.join("circle")
// 							.attr("cx", function(d,i){
// 								return leftMargin+(d*10)+(i*20);
// 							})
// 							.attr("cy",height/2)
// 							.attr("r", function(d){
// 								if(d==0){
// 									return 1;
// 								}
// 								else{
// 									return d*10;
// 								}
// 							})
// 							.attr("fill","none")
// 							.attr("stroke","black")



















// var dataPoint = [3];
// var circles = canvas.selectAll("circle")
// 					.data(dataPoint)
// 					.join("circle")
// 					.attr("r", radius)
// 					.attr("cx", w/2)
// 					.attr("cy", h/2);






// var moreData = [17,5,10];
// var circShape = canvas.selectAll("circle")
// 					.data(moreData) 
// 					.join("circle")
// 					.attr("r", radius)
// 					.attr("cx", w/2)
// 					.attr("cy", h/2);