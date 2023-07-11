// GOAL: can we draw a shape for every cup of coffee we drank this morning?

var width = 500;
var height = 500;
var leftMargin = 20;
var canvas = d3.select("#vis")
				.append("svg")
				.attr("width",width)
				.attr("height",height);

var cupsCoffee = [1,0,0,0,0,1,0,10,0,0,0,1,1,0,1,0];

var coffeeCircles = canvas.selectAll("circle")
							.data(cupsCoffee)
							.join("circle")
							.attr("cx", function(d,i){
								return leftMargin+(d*10)+(i*20);
							})
							.attr("cy",height/2)
							.attr("r", function(d){
								if(d==0){
									return 1;
								}
								else{
									return d*10;
								}
							})
							.attr("fill","none")
							.attr("stroke","black")



















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