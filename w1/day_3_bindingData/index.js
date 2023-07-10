//GOAL: can we move shapes around based on their data? 
// Can we store more information inside every data piece aside from just numbers?

var w = 500;
var h = 500;
var rad = 50;
var leftMargin = w/4; 

var canvas = d3.select("svg")
				.attr("width", w)
				.attr("height", h)
				.style("background-color","black")

// var myData = [17,5,10];
// var circ = canvas.selectAll("circle")
// 					.data(myData) 
// 					.join("circle")
					// .attr("cx", function(d,i){
					// 	return leftMargin+ i*rad*2;
					// })
					// .attr("cy",h/2)
					// .attr("r",function(d){
					// 	return d;
					// })
					// .attr("fill","none")
					// .attr("stroke","white");


// var participants = [
//   { name: 'Sine', birthyear: 1990},
//   { name: 'Leo', birthyear: 1992},
//   { name: 'Ana', birthyear: 1995},
// ];

// var circ = canvas.selectAll("circle")
// 					.data(participants) 
// 					.join("circle")
// 					.attr("cx", function(d,i){
// 						return leftMargin+ i*rad*2;
// 					})
// 					.attr("cy",h/2)
// 					.attr('r', function(d) {
// 					    return 0.01 * d.birthyear;
// 					  })
// 					.attr("fill","white")
