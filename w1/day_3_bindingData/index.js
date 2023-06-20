var w = 500;
var h = 500;
var dogData = [17,5,10];
var rad = 50;
var leftMargin = w/4; 

var myCanvas = d3.select("svg")
								.attr("width", w)
								.attr("height", h)
								.style("background-color","black")

var circShape = d3.select("svg").selectAll("circle")
									.data(dogData) 
									.join("circle")
									// .attr("cx", function(d,i){
									// 	return leftMargin+ i*rad*2;
									// })
									// .attr("cy",h/2)
									// .attr("r",function(d){
									// 	return d;
									// })
									// .attr("fill","none")
									// .attr("stroke","white");





































// var arrData = [10, 40, 80];

// d3.select('svg')
//   .selectAll('circle')
//   .data(arrData)
//   .join('circle')
// 	.attr('cx', function(d,i){
// 		return 50+i*50;
// 	})
//   .attr('cy', h/2)
//   .attr('r', function(d){
// 		return d/2;
// 	})
//   .style('fill', 'pink')
//   .attr('stroke','magenta')
//   .attr('opacity',.3)